"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = require('lodash');
var pip_services_runtime_node_1 = require('pip-services-runtime-node');
var pip_services_runtime_node_2 = require('pip-services-runtime-node');
var pip_services_runtime_node_3 = require('pip-services-runtime-node');
var pip_services_runtime_node_4 = require('pip-services-runtime-node');
var pip_services_runtime_node_5 = require('pip-services-runtime-node');
var PasswordsNullClient = (function (_super) {
    __extends(PasswordsNullClient, _super);
    function PasswordsNullClient(config) {
        _super.call(this, PasswordsNullClient.Descriptor);
        if (config != null) {
            this.configure(pip_services_runtime_node_3.ComponentConfig.fromValue(config));
            this.link(new pip_services_runtime_node_4.ComponentSet());
        }
    }
    PasswordsNullClient.prototype.setPassword = function (correlationId, userId, password, callback) {
        callback(null, { id: userId, locked: false });
    };
    PasswordsNullClient.prototype.deletePassword = function (correlationId, userId, callback) {
        callback(null);
    };
    PasswordsNullClient.prototype.authenticate = function (correlationId, userId, password, callback) {
        callback(null, { id: userId, locked: false });
    };
    PasswordsNullClient.prototype.changePassword = function (correlationId, userId, oldPassword, newPassword, callback) {
        callback(null, { id: userId, locked: false });
    };
    PasswordsNullClient.prototype.resetPassword = function (correlationId, userId, code, password, callback) {
        callback(null, { id: userId, locked: false });
    };
    PasswordsNullClient.prototype.recoverPassword = function (correlationId, userId, callback) {
        callback(null, { id: userId, locked: false });
    };
    /**
     * Unique descriptor for the PasswordsNullClient component
     */
    PasswordsNullClient.Descriptor = new pip_services_runtime_node_2.ComponentDescriptor(pip_services_runtime_node_1.Category.Clients, "pip-services-passwords", "null", "1.0");
    return PasswordsNullClient;
}(pip_services_runtime_node_5.AbstractClient));
exports.PasswordsNullClient = PasswordsNullClient;
