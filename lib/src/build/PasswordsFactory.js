"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pip_services_runtime_node_1 = require('pip-services-runtime-node');
var pip_services_runtime_node_2 = require('pip-services-runtime-node');
var Version1 = require('../version1');
var PasswordsFactory = (function (_super) {
    __extends(PasswordsFactory, _super);
    function PasswordsFactory() {
        _super.call(this, pip_services_runtime_node_2.DefaultFactory.Instance);
        this.register(Version1.PasswordsNullClient.Descriptor, Version1.PasswordsNullClient);
        this.register(Version1.PasswordsRestClient.Descriptor, Version1.PasswordsRestClient);
        this.register(Version1.PasswordsSenecaClient.Descriptor, Version1.PasswordsSenecaClient);
        this.register(Version1.PasswordsLambdaClient.Descriptor, Version1.PasswordsLambdaClient);
    }
    PasswordsFactory.Instance = new PasswordsFactory();
    return PasswordsFactory;
}(pip_services_runtime_node_1.ComponentFactory));
exports.PasswordsFactory = PasswordsFactory;
