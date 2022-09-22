import {AbstractLaceworkResource} from "../../Lacework-Common/src/abstract-lacework-resource"
import {exceptions} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {LaceworkClient} from "../../Lacework-Common/src/lacework-client"
import {ResourceModel, TypeConfigurationModel} from './models';
import {version} from "../package.json";
import {CaseTransformer, Transformer} from "../../Lacework-Common/src/util";
import {AxiosError} from "axios";

interface CallbackContext extends Record<string, any> {}

type AgentKey = {
    data: any
}

type AgentKeys = {
    data: any[]
}

class Resource extends AbstractLaceworkResource<ResourceModel, ResourceModel, ResourceModel, void, TypeConfigurationModel> {
    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async create(model: ResourceModel, typeConfiguration: TypeConfigurationModel | undefined): Promise<ResourceModel> {
        const response = await new LaceworkClient(typeConfiguration.laceworkAccess, this.userAgent, this.loggerProxy).doRequest<AgentKey>(
            'post',
            `/AgentAccessTokens`,
            null, {...Transformer.for(model.toJSON())
                    .transformKeys(CaseTransformer.PASCAL_TO_CAMEL)
                    .transform()});

        return new ResourceModel(response.data.data);
    }

    async update(model: ResourceModel, typeConfiguration: TypeConfigurationModel | undefined): Promise<void> {
        const response = await new LaceworkClient(typeConfiguration.laceworkAccess, this.userAgent, this.loggerProxy).doRequest<AgentKey>(
            'patch',
            `/AgentAccessTokens/${model.accessToken}`,
            null, {
                ...Transformer.for(model.toJSON())
                    .transformKeys(CaseTransformer.PASCAL_TO_CAMEL)
                    .transform()
            });
    }

    async delete(model: ResourceModel, typeConfiguration: TypeConfigurationModel | undefined): Promise<void> {
        if (!model.accessToken) {
            throw new exceptions.NotFound(this.typeName, null);
        }

        const deleteModel = new ResourceModel({...model, tokenEnabled: 0});

        await this.update(deleteModel, typeConfiguration);
    }

    async get(model: ResourceModel, typeConfiguration: TypeConfigurationModel | undefined): Promise<ResourceModel> {
        if (!model.accessToken) {
            throw new exceptions.NotFound(this.typeName, null);
        }

        const response = await new LaceworkClient(typeConfiguration.laceworkAccess, this.userAgent, this.loggerProxy).doRequest<AgentKey>(
            'get',
            `/AgentAccessTokens/${model.accessToken}`,
            null, null);

        const resourceModel = new ResourceModel(response.data.data);

        if(resourceModel.tokenEnabled == 0) {
            // We can't delete tokens so treat a deleted token as disabled.
            // throw new exceptions.NotFound(this.typeName, null);
            let axiosError = new AxiosError("Not Found", "400");
            axiosError.status = "400";
            throw axiosError;
        }

        return resourceModel;
    }

    async list(model: ResourceModel, typeConfiguration: TypeConfigurationModel | undefined): Promise<ResourceModel[]> {
        const response = await new LaceworkClient(typeConfiguration.laceworkAccess, this.userAgent, this.loggerProxy).doRequest<AgentKeys>(
            'get',
            `/AgentAccessTokens`,
            null, null);

        if(!response.data.data) {
            return [];
        }

        return response.data.data.map(group => this.setModelFrom(new ResourceModel(), new ResourceModel(group))).filter(value => value.tokenEnabled == 1);
    }

    newModel(partial: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from: ResourceModel | undefined): ResourceModel {
        if (!from) {
            return model;
        }
        let resourceModel = new ResourceModel({
            ...model,
            ...from
        });

        return resourceModel;
    }
}

// @ts-ignore // if running against v1.0.1 or earlier of plugin the 5th argument is not known but best to ignored (runtime code may warn)
export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel)!;

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
