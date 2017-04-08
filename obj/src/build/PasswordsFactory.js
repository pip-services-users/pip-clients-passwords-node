"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const PasswordsNullClientV1_1 = require("../version1/PasswordsNullClientV1");
const PasswordsDirectClientV1_1 = require("../version1/PasswordsDirectClientV1");
const PasswordsHttpClientV1_1 = require("../version1/PasswordsHttpClientV1");
const PasswordsSenecaClientV1_1 = require("../version1/PasswordsSenecaClientV1");
class PasswordsFactory extends pip_services_commons_node_2.Factory {
    constructor() {
        super();
        this.registerAsType(PasswordsFactory.NullClientV1Descriptor, PasswordsNullClientV1_1.PasswordsNullClientV1);
        this.registerAsType(PasswordsFactory.DirectClientV1Descriptor, PasswordsDirectClientV1_1.PasswordsDirectClientV1);
        this.registerAsType(PasswordsFactory.HttpClientV1Descriptor, PasswordsHttpClientV1_1.PasswordsHttpClientV1);
        this.registerAsType(PasswordsFactory.SenecaClientV1Descriptor, PasswordsSenecaClientV1_1.PasswordsSenecaClientV1);
    }
}
PasswordsFactory.Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-passwords', 'factory', 'default', 'default', '1.0');
PasswordsFactory.NullClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-passwords', 'client', 'null', 'default', '1.0');
PasswordsFactory.DirectClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-passwords', 'client', 'direct', 'default', '1.0');
PasswordsFactory.HttpClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-passwords', 'client', 'http', 'default', '1.0');
PasswordsFactory.SenecaClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-passwords', 'client', 'seneca', 'default', '1.0');
exports.PasswordsFactory = PasswordsFactory;
//# sourceMappingURL=PasswordsFactory.js.map