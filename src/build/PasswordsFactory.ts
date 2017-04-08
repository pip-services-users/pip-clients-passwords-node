import { Descriptor } from 'pip-services-commons-node';
import { Factory } from 'pip-services-commons-node';

import { PasswordsNullClientV1 } from '../version1/PasswordsNullClientV1';
import { PasswordsDirectClientV1 } from '../version1/PasswordsDirectClientV1';
import { PasswordsHttpClientV1 } from '../version1/PasswordsHttpClientV1';
import { PasswordsSenecaClientV1 } from '../version1/PasswordsSenecaClientV1';

export class PasswordsFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-passwords', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('pip-services-passwords', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-passwords', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-passwords', 'client', 'http', 'default', '1.0');
	public static SenecaClientV1Descriptor = new Descriptor('pip-services-passwords', 'client', 'seneca', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(PasswordsFactory.NullClientV1Descriptor, PasswordsNullClientV1);
		this.registerAsType(PasswordsFactory.DirectClientV1Descriptor, PasswordsDirectClientV1);
		this.registerAsType(PasswordsFactory.HttpClientV1Descriptor, PasswordsHttpClientV1);
		this.registerAsType(PasswordsFactory.SenecaClientV1Descriptor, PasswordsSenecaClientV1);
	}
	
}
