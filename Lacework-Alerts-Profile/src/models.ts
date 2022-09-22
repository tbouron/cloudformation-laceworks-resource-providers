// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Lacework::Alerts::Profile';

    @Exclude()
    protected readonly IDENTIFIER_KEY_ALERTPROFILEID: string = '/properties/AlertProfileId';

    @Expose({ name: 'AlertProfileId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'alertProfileId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    alertProfileId?: Optional<string>;
    @Expose({ name: 'Extends' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'extends_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    extends_?: Optional<string>;
    @Expose({ name: 'Alerts' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'alerts', value, obj, [Set, Map]),
        {
            toClassOnly: true,
        }
    )
    alerts?: Optional<Set<Map<string, object>>>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.alertProfileId != null) {
            identifier[this.IDENTIFIER_KEY_ALERTPROFILEID] = this.alertProfileId;
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

