// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Lacework::Agents::Token';

    @Exclude()
    protected readonly IDENTIFIER_KEY_ACCESSTOKEN: string = '/properties/AccessToken';

    @Expose({ name: 'TokenAlias' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'tokenAlias', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    tokenAlias?: Optional<string>;
    @Expose({ name: 'TokenEnabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'tokenEnabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    tokenEnabled?: Optional<number>;
    @Expose({ name: 'Props' })
    @Type(() => Props)
    props?: Optional<Props>;
    @Expose({ name: 'AccessToken' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'accessToken', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    accessToken?: Optional<string>;
    @Expose({ name: 'CreatedTime' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'createdTime', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    createdTime?: Optional<string>;
    @Expose({ name: 'Version' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'version', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    version?: Optional<string>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.accessToken != null) {
            identifier[this.IDENTIFIER_KEY_ACCESSTOKEN] = this.accessToken;
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

export class Props extends BaseModel {
    ['constructor']: typeof Props;


    @Expose({ name: 'Description' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'description', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    description?: Optional<string>;
    @Expose({ name: 'Os' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'os', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    os?: Optional<string>;

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

