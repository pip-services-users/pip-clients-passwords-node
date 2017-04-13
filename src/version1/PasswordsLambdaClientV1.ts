import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { CommandableLambdaClient } from 'pip-services-aws-node';

import { IPasswordsClientV1 } from './IPasswordsClientV1';

export class PasswordsLambdaClientV1 extends CommandableLambdaClient implements IPasswordsClientV1 {

    constructor(config?: any) {
        super('passwords');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
        
    public setPassword(correlationId: string, userId: string, password: string,
        callback: (err: any) => void): void {
        this.callCommand(
            'set_password',
            correlationId,
            {
                user_id: userId,
                password: password
            },
            callback
        );
    }

    public deletePassword(correlationId: string, userId: string,
        callback: (err: any) => void): void {
        this.callCommand(
            'delete_password',
            correlationId,
            {
                user_id: userId
            },
            callback
        );
    }

    public authenticate(correlationId: string, userId: string, password: string,
        callback: (err: any, authenticated: boolean) => void): void {
        this.callCommand(
            'authenticate',
            correlationId,
            {
                user_id: userId,
                password: password
            },
            (err, result) => {
                let authenticated = result != null ? result.authenticated : false;
                callback(err, authenticated);
            }
        );
    }

    public changePassword(correlationId: string, userId: string, oldPassword: string, newPassword: string,
        callback: (err: any) => void): void {
        this.callCommand(
            'change_password',
            correlationId,
            {
                user_id: userId,
                old_password: oldPassword,
                new_password: newPassword
            },
            callback
        );
    }

    public resetPassword(correlationId: string, userId: string, code: string, password: string,
        callback: (err: any) => void): void {
        this.callCommand(
            'reset_password',
            correlationId,
            {
                user_id: userId,
                code: code,
                password: password
            },
            callback
        );
    }

    public recoverPassword(correlationId: string, userId: string,
        callback: (err: any) => void): void {
        this.callCommand(
            'recover_password',
            correlationId,
            {
                user_id: userId
            },
            callback
        );
    }
    
}
