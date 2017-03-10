declare module 'pip-clients-password-node' {
	import { IClient } from 'pip-services-runtime-node';
	import { RestClient } from 'pip-services-runtime-node';
	import { LambdaClient } from 'pip-services-runtime-node';
	import { SenecaClient } from 'pip-services-runtime-node';
	import { AbstractClient } from 'pip-services-runtime-node';
	import { ComponentDescriptor } from 'pip-services-runtime-node';
	import { ComponentFactory } from 'pip-services-runtime-node';

    export class PasswordsFactory extends ComponentFactory {
        public static Instance: PasswordsFactory;	
        constructor();	
    }

    module Version1 {
        export interface IPasswordsClient extends IClient {
            setPassword(correlationId: string, userId: string, password: string, callback: any): void;
            deletePassword(correlationId: string, userId: string, callback: any): void;            
            authenticate(correlationId: string, userId: string, password: string, callback: any): void;
            changePassword(correlationId: string, userId: string, oldPassword: string, newPassword: string, callback: any): void;
            resetPassword(correlationId: string, userId: string, code: string, password: string, callback: any): void;
            recoverPassword(correlationId: string, userId: string, callback: any): void;
        }

        export class PasswordsRestClient extends RestClient implements IPasswordsClient {
            public static Descriptor: ComponentDescriptor;
            constructor(config?: any);
            setPassword(correlationId: string, userId: string, password: string, callback: any): void;
            deletePassword(correlationId: string, userId: string, callback: any): void;            
            authenticate(correlationId: string, userId: string, password: string, callback: any): void;
            changePassword(correlationId: string, userId: string, oldPassword: string, newPassword: string, callback: any): void;
            resetPassword(correlationId: string, userId: string, code: string, password: string, callback: any): void;
            recoverPassword(correlationId: string, userId: string, callback: any): void;
        }

        export class PasswordsLambdaClient extends SenecaClient implements IPasswordsClient {
            public static Descriptor: ComponentDescriptor;
            constructor(config?: any);
            setPassword(correlationId: string, userId: string, password: string, callback: any): void;
            deletePassword(correlationId: string, userId: string, callback: any): void;            
            authenticate(correlationId: string, userId: string, password: string, callback: any): void;
            changePassword(correlationId: string, userId: string, oldPassword: string, newPassword: string, callback: any): void;
            resetPassword(correlationId: string, userId: string, code: string, password: string, callback: any): void;
            recoverPassword(correlationId: string, userId: string, callback: any): void;
        }

        export class PasswordsSenecaClient extends SenecaClient implements IPasswordsClient {
            public static Descriptor: ComponentDescriptor;
            constructor(config?: any);
            setPassword(correlationId: string, userId: string, password: string, callback: any): void;
            deletePassword(correlationId: string, userId: string, callback: any): void;            
            authenticate(correlationId: string, userId: string, password: string, callback: any): void;
            changePassword(correlationId: string, userId: string, oldPassword: string, newPassword: string, callback: any): void;
            resetPassword(correlationId: string, userId: string, code: string, password: string, callback: any): void;
            recoverPassword(correlationId: string, userId: string, callback: any): void;
        }

        export class PasswordsNullClient extends AbstractClient implements IPasswordsClient {
            public static Descriptor: ComponentDescriptor;
            constructor(config?: any);
            setPassword(correlationId: string, userId: string, password: string, callback: any): void;
            deletePassword(correlationId: string, userId: string, callback: any): void;            
            authenticate(correlationId: string, userId: string, password: string, callback: any): void;
            changePassword(correlationId: string, userId: string, oldPassword: string, newPassword: string, callback: any): void;
            resetPassword(correlationId: string, userId: string, code: string, password: string, callback: any): void;
            recoverPassword(correlationId: string, userId: string, callback: any): void;
        }
    }
}
