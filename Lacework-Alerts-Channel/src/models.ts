// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Lacework::Alerts::Channel';

    @Exclude()
    protected readonly IDENTIFIER_KEY_INTGGUID: string = '/properties/IntgGuid';

    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Enabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'enabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enabled?: Optional<number>;
    @Expose({ name: 'Data' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'data', value, obj, [Map]),
        {
            toClassOnly: true,
        }
    )
    data?: Optional<Map<string, object>>;
    @Expose({ name: 'Props' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'props', value, obj, [Map]),
        {
            toClassOnly: true,
        }
    )
    props?: Optional<Map<string, object>>;
    @Expose({ name: 'IsOrg' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'isOrg', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    isOrg?: Optional<number>;
    @Expose({ name: 'CreatedOrUpdatedBy' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'createdOrUpdatedBy', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    createdOrUpdatedBy?: Optional<string>;
    @Expose({ name: 'CreatedOrUpdatedTime' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'createdOrUpdatedTime', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    createdOrUpdatedTime?: Optional<string>;
    @Expose({ name: 'IntgGuid' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'intgGuid', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    intgGuid?: Optional<string>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.intgGuid != null) {
            identifier[this.IDENTIFIER_KEY_INTGGUID] = this.intgGuid;
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

