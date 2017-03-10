let _ = require('lodash');

import { Category } from 'pip-services-runtime-node';
import { ComponentDescriptor } from 'pip-services-runtime-node';
import { ComponentConfig } from 'pip-services-runtime-node';
import { ComponentSet } from 'pip-services-runtime-node';
import { LambdaClient } from 'pip-services-runtime-node';

import { IPasswordsClient } from './IPasswordsClient';

export class PasswordsLambdaClient extends LambdaClient implements IPasswordsClient {       
	/**
	 * Unique descriptor for the PasswordsLambdaClient component
	 */
	public static Descriptor: ComponentDescriptor = new ComponentDescriptor(
		Category.Clients, "pip-services-passwords", "lambda", "1.0"
	);
    
    constructor(config?: any) {
        super(PasswordsLambdaClient.Descriptor);

        if (config != null) {
            this.configure(ComponentConfig.fromValue(config));
            this.link(new ComponentSet());
        }
    }
    
    public setPassword(correlationId: string, userId: string, password: string, callback) {
        callback = this.instrument(correlationId, 'passwords.set_password', callback);
        this.call(
            'set_password', 
            {
                correlation_id: correlationId,
                user_id: userId,
                password: password
            }, 
            callback
        );
    }

    public deletePassword(correlationId: string, userId: string, callback) {
        callback = this.instrument(correlationId, 'passwords.delete_password', callback);
        this.call(
            'delete_password',
            {
                correlation_id: correlationId,
                user_id: userId
            }, 
            callback
        );
    }
        
    public authenticate(correlationId: string, userId: string, password: string, callback) {
        callback = this.instrument(correlationId, 'passwords.authenticate', callback);
        this.call(
            'authenticate',
            {
                correlation_id: correlationId,
                user_id: userId,
                password: password
            }, 
            callback
        );
    }

    public changePassword(correlationId: string, userId: string, oldPassword: string, newPassword: string, callback) {
        callback = this.instrument(correlationId, 'passwords.change_password', callback);
        this.call(
            'change_password',
            {
                correlation_id: correlationId,
                user_id: userId,
                old_password: oldPassword,
                new_password: newPassword
            }, 
            callback
        );
    }

    public resetPassword(correlationId: string, userId: string, code: string, password: string, callback) {
        callback = this.instrument(correlationId, 'passwords.reset_password', callback);
        this.call(
            'reset_password',
            {
                correlation_id: correlationId,
                user_id: userId,
                code: code,
                password: password
            }, 
            callback
        );
    }

    public recoverPassword(correlationId: string, userId: string, callback) {
        callback = this.instrument(correlationId, 'passwords.recover_password', callback);
        this.call(
            'recover_password',
            {
                correlation_id: correlationId,
                user_id: userId
            }, 
            callback
        );
    }
    
}
