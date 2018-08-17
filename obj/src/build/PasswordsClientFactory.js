"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_components_node_1 = require("pip-services-components-node");
const PasswordsNullClientV1_1 = require("../version1/PasswordsNullClientV1");
const PasswordsDirectClientV1_1 = require("../version1/PasswordsDirectClientV1");
const PasswordsHttpClientV1_1 = require("../version1/PasswordsHttpClientV1");
const PasswordsSenecaClientV1_1 = require("../version1/PasswordsSenecaClientV1");
class PasswordsClientFactory extends pip_services_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(PasswordsClientFactory.NullClientV1Descriptor, PasswordsNullClientV1_1.PasswordsNullClientV1);
        this.registerAsType(PasswordsClientFactory.DirectClientV1Descriptor, PasswordsDirectClientV1_1.PasswordsDirectClientV1);
        this.registerAsType(PasswordsClientFactory.HttpClientV1Descriptor, PasswordsHttpClientV1_1.PasswordsHttpClientV1);
        this.registerAsType(PasswordsClientFactory.SenecaClientV1Descriptor, PasswordsSenecaClientV1_1.PasswordsSenecaClientV1);
    }
}
PasswordsClientFactory.Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-passwords', 'factory', 'default', 'default', '1.0');
PasswordsClientFactory.NullClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-passwords', 'client', 'null', 'default', '1.0');
PasswordsClientFactory.DirectClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-passwords', 'client', 'direct', 'default', '1.0');
PasswordsClientFactory.HttpClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-passwords', 'client', 'http', 'default', '1.0');
PasswordsClientFactory.SenecaClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-passwords', 'client', 'seneca', 'default', '1.0');
exports.PasswordsClientFactory = PasswordsClientFactory;
//# sourceMappingURL=PasswordsClientFactory.js.map