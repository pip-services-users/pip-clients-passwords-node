let _ = require('lodash');

import { Category } from 'pip-services-runtime-node';
import { ComponentDescriptor } from 'pip-services-runtime-node';
import { ComponentConfig } from 'pip-services-runtime-node';
import { ComponentSet } from 'pip-services-runtime-node';import { AbstractClient } from 'pip-services-runtime-node';

import { IPasswordsClient } from './IPasswordsClient';

export class PasswordsNullClient extends AbstractClient implements IPasswordsClient {       
	/**
	 * Unique descriptor for the PasswordsNullClient component
	 */
	public static Descriptor: ComponentDescriptor = new ComponentDescriptor(
		Category.Clients, "pip-services-passwords", "null", "1.0"
	);
    
    constructor(config?: any) {
        super(PasswordsNullClient.Descriptor);

        if (config != null) {
            this.configure(ComponentConfig.fromValue(config));
            this.link(new ComponentSet());
        }
    }
                
    public setPassword(correlationId: string, userId: string, password: string, callback) {
        callback(null, { id: userId, locked: false });
    }

    public deletePassword(correlationId: string, userId: string, callback) {
        callback(null);
    }
    
    public authenticate(correlationId: string, userId: string, password: string, callback) {
        callback(null, { id: userId, locked: false });
    }

    public changePassword(correlationId: string, userId: string, oldPassword: string, newPassword: string, callback) {
        callback(null, { id: userId, locked: false });
    }

    public resetPassword(correlationId: string, userId: string, code: string, password: string, callback) {
        callback(null, { id: userId, locked: false });
    }

    public recoverPassword(correlationId: string, userId: string, callback) {
        callback(null, { id: userId, locked: false });
    }
        
}
