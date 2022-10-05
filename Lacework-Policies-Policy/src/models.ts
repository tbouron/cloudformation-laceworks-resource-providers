// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Lacework::Policies::Policy';

    @Exclude()
    protected readonly IDENTIFIER_KEY_POLICYID: string = '/properties/PolicyId';

    @Expose({ name: 'PolicyId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'policyId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    policyId?: Optional<string>;
    @Expose({ name: 'PolicyType' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'policyType', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    policyType?: Optional<string>;
    @Expose({ name: 'QueryId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'queryId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    queryId?: Optional<string>;
    @Expose({ name: 'Title' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'title', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    title?: Optional<string>;
    @Expose({ name: 'Enabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enabled?: Optional<boolean>;
    @Expose({ name: 'Description' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'description', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    description?: Optional<string>;
    @Expose({ name: 'Remediation' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'remediation', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    remediation?: Optional<string>;
    @Expose({ name: 'Severity' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'severity', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    severity?: Optional<string>;
    @Expose({ name: 'Limit' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'limit', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    limit?: Optional<number>;
    @Expose({ name: 'AlertEnabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'alertEnabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    alertEnabled?: Optional<boolean>;
    @Expose({ name: 'AlertProfile' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'alertProfile', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    alertProfile?: Optional<string>;
    @Expose({ name: 'Tags' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'tags', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    tags?: Optional<Array<string>>;
    @Expose({ name: 'EvaluatorId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'evaluatorId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    evaluatorId?: Optional<string>;
    @Expose({ name: 'Owner' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'owner', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    owner?: Optional<string>;
    @Expose({ name: 'LastUpdateTime' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'lastUpdateTime', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    lastUpdateTime?: Optional<string>;
    @Expose({ name: 'LastUpdateUser' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'lastUpdateUser', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    lastUpdateUser?: Optional<string>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.policyId != null) {
            identifier[this.IDENTIFIER_KEY_POLICYID] = this.policyId;
        }

        // only return the identifier if it can be used, i.e. if all components are present
        return Object.keys(identifier).length === 1 ? identifier : null;
    }

    @Exclude()
    public getAdditionalIdentifiers(): Array<Dict> {
        const identifiers: Array<Dict> = new Array<Dict>();
        // only return the identifiers if any can be used
        return identifiers.length === 0 ? null : identifiers;
    }
}

export class TypeConfigurationModel extends BaseModel {
    ['constructor']: typeof TypeConfigurationModel;


    @Expose({ name: 'LaceworkAccess' })
    @Type(() => LaceworkAccess)
    laceworkAccess?: Optional<LaceworkAccess>;

}

export class LaceworkAccess extends BaseModel {
    ['constructor']: typeof LaceworkAccess;


    @Expose({ name: 'Url' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'url', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    url?: Optional<string>;
    @Expose({ name: 'AccessKeyId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'accessKeyId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    accessKeyId?: Optional<string>;
    @Expose({ name: 'SecretKey' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'secretKey', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    secretKey?: Optional<string>;

}

