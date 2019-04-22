import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { PasswordsNullClientV1 } from '../version1/PasswordsNullClientV1';
import { PasswordsDirectClientV1 } from '../version1/PasswordsDirectClientV1';
import { PasswordsHttpClientV1 } from '../version1/PasswordsHttpClientV1';

export class PasswordsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-passwords', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('pip-services-passwords', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-passwords', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-passwords', 'client', 'http', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(PasswordsClientFactory.NullClientV1Descriptor, PasswordsNullClientV1);
		this.registerAsType(PasswordsClientFactory.DirectClientV1Descriptor, PasswordsDirectClientV1);
		this.registerAsType(PasswordsClientFactory.HttpClientV1Descriptor, PasswordsHttpClientV1);
	}
	
}
