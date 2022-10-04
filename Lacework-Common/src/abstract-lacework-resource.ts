import {
    BaseModel,
    exceptions,
    ResourceHandlerRequest
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {AbstractBaseResource} from "./abstract-base-resource";
import {LaceworkError} from "./types";
import {AxiosError} from "axios";

export abstract class AbstractLaceworkResource<ResourceModelType extends BaseModel, GetResponseData, CreateResponseData, UpdateResponseData, TypeConfigurationM> extends AbstractBaseResource<ResourceModelType, GetResponseData, CreateResponseData, UpdateResponseData, LaceworkError, TypeConfigurationM> {

    processRequestException(e: AxiosError<LaceworkError>, request: ResourceHandlerRequest<ResourceModelType>) {
        const errors = [e.message];
        if (e.response?.data?.message) {
            errors.push(e.response.data.message);
        }
        const errorMessage = errors.join('\n');

        let status = e.status != undefined ? parseInt(e.status) : e.response.status;
        switch (status) {
            case 400:
                throw new exceptions.InvalidRequest(this.typeName);
            case 401:
                throw new exceptions.InvalidCredentials(errorMessage);
            case 403:
                throw new exceptions.AccessDenied(`Access denied, please check your API token: ${errorMessage}`);
            case 404:
                throw new exceptions.NotFound(this.typeName, request.logicalResourceIdentifier);
            case 409:
                throw new exceptions.ResourceConflict(errorMessage);
            case 429:
                throw new exceptions.ServiceLimitExceeded(errorMessage);
            default:
                throw new exceptions.InternalFailure(`Unexpected error occurred, see serialized exception below:\n${JSON.stringify(e)}`);
        }
    }

}