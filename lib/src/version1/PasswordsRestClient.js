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
var PasswordsRestClient = (function (_super) {
    __extends(PasswordsRestClient, _super);
    function PasswordsRestClient(config) {
        _super.call(this, PasswordsRestClient.Descriptor);
        if (config != null) {
            this.configure(pip_services_runtime_node_3.ComponentConfig.fromValue(config));
            this.link(new pip_services_runtime_node_4.ComponentSet());
        }
    }
    PasswordsRestClient.prototype.setPassword = function (correlationId, userId, password, callback) {
        callback = this.instrument(correlationId, 'passwords.set_password', callback);
        this.call('post', '/passwords', {
            correlation_id: correlationId,
            user_id: userId,
            password: password
        }, {}, callback);
    };
    PasswordsRestClient.prototype.deletePassword = function (correlationId, userId, callback) {
        callback = this.instrument(correlationId, 'passwords.delete_password', callback);
        this.call('delete', '/passwords/' + userId, {
            correlation_id: correlationId
        }, callback);
    };
    PasswordsRestClient.prototype.authenticate = function (correlationId, userId, password, callback) {
        callback = this.instrument(correlationId, 'passwords.authenticate', callback);
        this.call('post', '/passwords/' + userId + '/authenticate', {
            correlation_id: correlationId,
            user_id: userId,
            password: password
        }, callback);
    };
    PasswordsRestClient.prototype.changePassword = function (correlationId, userId, oldPassword, newPassword, callback) {
        callback = this.instrument(correlationId, 'passwords.change_password', callback);
        this.call('post', '/passwords/' + userId + '/change', {
            correlation_id: correlationId,
            user_id: userId,
            old_password: oldPassword,
            new_password: newPassword
        }, callback);
    };
    PasswordsRestClient.prototype.resetPassword = function (correlationId, userId, code, password, callback) {
        callback = this.instrument(correlationId, 'passwords.reset_password', callback);
        this.call('post', '/passwords/' + userId + '/reset', {
            correlation_id: correlationId,
            user_id: userId,
            code: code,
            password: password
        }, callback);
    };
    PasswordsRestClient.prototype.recoverPassword = function (correlationId, userId, callback) {
        callback = this.instrument(correlationId, 'passwords.recover_password', callback);
        this.call('post', '/passwords/' + userId + '/recover', {
            correlation_id: correlationId,
            user_id: userId
        }, callback);
    };
    /**
     * Unique descriptor for the PasswordsRestClient component
     */
    PasswordsRestClient.Descriptor = new pip_services_runtime_node_2.ComponentDescriptor(pip_services_runtime_node_1.Category.Clients, "pip-services-passwords", "rest", "1.0");
    return PasswordsRestClient;
}(pip_services_runtime_node_5.RestClient));
exports.PasswordsRestClient = PasswordsRestClient;
