import { ConfigParams } from 'pip-services-commons-node';
import { IReferences } from 'pip-services-commons-node';
import { Descriptor } from 'pip-services-commons-node';
import { FilterParams } from 'pip-services-commons-node';
import { PagingParams} from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { DirectClient } from 'pip-services-net-node';

import { IPasswordsClientV1 } from './IPasswordsClientV1';
//import { IPasswordsBusinessLogic } from 'pip-services-passwords-node';

export class PasswordsDirectClientV1 extends DirectClient<any> implements IPasswordsClientV1 {
            
    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("pip-services-passwords", "controller", "*", "*", "*"))

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public setPassword(correlationId: string, userId: string, password: string,
        callback: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'passwords.set_password');
        this._controller.setPassword(correlationId, userId, password, (err) => {
            timing.endTiming();
            callback(err);
        });
    }

    public deletePassword(correlationId: string, userId: string,
        callback: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'passwords.delete_password');
        this._controller.deletePassword(correlationId, userId, (err) => {
            timing.endTiming();
            callback(err);
        });
    }

    public authenticate(correlationId: string, userId: string, password: string,
        callback: (err: any, authenticated: boolean) => void): void {
        let timing = this.instrument(correlationId, 'passwords.authenticate');
        this._controller.authenticate(correlationId, userId, password, (err, authenticated) => {
            timing.endTiming();
            callback(err, authenticated);
        });
    }

    public changePassword(correlationId: string, userId: string, oldPassword: string, newPassword: string,
        callback: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'passwords.change_password');
        this._controller.changePassword(correlationId, userId, oldPassword, newPassword, (err) => {
            timing.endTiming();
            callback(err);
        });
    }

    public resetPassword(correlationId: string, userId: string, code: string, password: string,
        callback: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'passwords.reset_password');
        this._controller.resetPassword(correlationId, userId, code, password, (err) => {
            timing.endTiming();
            callback(err);
        });
    }

    public recoverPassword(correlationId: string, userId: string,
        callback: (err: any) => void): void {
        let timing = this.instrument(correlationId, 'passwords.recover_password');
        this._controller.recoverPassword(correlationId, userId, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
}