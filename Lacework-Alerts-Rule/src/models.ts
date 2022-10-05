// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Lacework::Alerts::Rule';

    @Exclude()
    protected readonly IDENTIFIER_KEY_MCGUID: string = '/properties/McGuid';

    @Expose({ name: 'IntgGuidList' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'intgGuidList', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    intgGuidList?: Optional<Set<string>>;
    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'CreatedOrUpdatedTime' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'createdOrUpdatedTime', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    createdOrUpdatedTime?: Optional<string>;
    @Expose({ name: 'Filters' })
    @Type(() => Filters)
    filters?: Optional<Filters>;
    @Expose({ name: 'McGuid' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'mcGuid', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    mcGuid?: Optional<string>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.mcGuid != null) {
            identifier[this.IDENTIFIER_KEY_MCGUID] = this.mcGuid;
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

export class Filters extends BaseModel {
    ['constructor']: typeof Filters;


    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'Description' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'description', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    description?: Optional<string>;
    @Expose({ name: 'Enabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'enabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enabled?: Optional<number>;
    @Expose({ name: 'ResourceGroups' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'resourceGroups', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    resourceGroups?: Optional<Array<string>>;
    @Expose({ name: 'EventCategory' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'eventCategory', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    eventCategory?: Optional<Set<string>>;
    @Expose({ name: 'Severity' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'severity', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    severity?: Optional<Set<number>>;

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

