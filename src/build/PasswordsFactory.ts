import { ComponentFactory } from 'pip-services-runtime-node';
import { DefaultFactory } from 'pip-services-runtime-node';

let Version1 = require('../version1');

export class PasswordsFactory extends ComponentFactory {
	public static Instance: PasswordsFactory = new PasswordsFactory();
	
	constructor() {
		super(DefaultFactory.Instance);

		this.register(Version1.PasswordsNullClient.Descriptor, Version1.PasswordsNullClient);
		this.register(Version1.PasswordsRestClient.Descriptor, Version1.PasswordsRestClient);
		this.register(Version1.PasswordsSenecaClient.Descriptor, Version1.PasswordsSenecaClient);
		this.register(Version1.PasswordsLambdaClient.Descriptor, Version1.PasswordsLambdaClient);
	}
	
}
