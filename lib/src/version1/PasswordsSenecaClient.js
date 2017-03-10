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
var PasswordsSenecaClient = (function (_super) {
    __extends(PasswordsSenecaClient, _super);
    function PasswordsSenecaClient(config) {
        _super.call(this, PasswordsSenecaClient.Descriptor);
        if (config != null) {
            this.configure(pip_services_runtime_node_3.ComponentConfig.fromValue(config));
            this.link(new pip_services_runtime_node_4.ComponentSet());
        }
    }
    PasswordsSenecaClient.prototype.setPassword = function (correlationId, userId, password, callback) {
        callback = this.instrument(correlationId, 'passwords.set_password', callback);
        this.call('passwords', 'set_password', {
            correlation_id: correlationId,
            user_id: userId,
            password: password
        }, callback);
    };
    PasswordsSenecaClient.prototype.deletePassword = function (correlationId, userId, callback) {
        callback = this.instrument(correlationId, 'passwords.delete_password', callback);
        this.call('passwords', 'delete_password', {
            correlation_id: correlationId,
            user_id: userId
        }, callback);
    };
    PasswordsSenecaClient.prototype.authenticate = function (correlationId, userId, password, callback) {
        callback = this.instrument(correlationId, 'passwords.authenticate', callback);
        this.call('passwords', 'authenticate', {
            correlation_id: correlationId,
            user_id: userId,
            password: password
        }, callback);
    };
    PasswordsSenecaClient.prototype.changePassword = function (correlationId, userId, oldPassword, newPassword, callback) {
        callback = this.instrument(correlationId, 'passwords.change_password', callback);
        this.call('passwords', 'change_password', {
            correlation_id: correlationId,
            user_id: userId,
            old_password: oldPassword,
            new_password: newPassword
        }, callback);
    };
    PasswordsSenecaClient.prototype.resetPassword = function (correlationId, userId, code, password, callback) {
        callback = this.instrument(correlationId, 'passwords.reset_password', callback);
        this.call('passwords', 'reset_password', {
            correlation_id: correlationId,
            user_id: userId,
            code: code,
            password: password
        }, callback);
    };
    PasswordsSenecaClient.prototype.recoverPassword = function (correlationId, userId, callback) {
        callback = this.instrument(correlationId, 'passwords.recover_password', callback);
        this.call('passwords', 'recover_password', {
            correlation_id: correlationId,
            user_id: userId
        }, callback);
    };
    /**
     * Unique descriptor for the PasswordsSenecaClient component
     */
    PasswordsSenecaClient.Descriptor = new pip_services_runtime_node_2.ComponentDescriptor(pip_services_runtime_node_1.Category.Clients, "pip-services-passwords", "seneca", "1.0");
    return PasswordsSenecaClient;
}(pip_services_runtime_node_5.SenecaClient));
exports.PasswordsSenecaClient = PasswordsSenecaClient;
