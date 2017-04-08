"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const pip_services_net_node_1 = require("pip-services-net-node");
//import { IPasswordsBusinessLogic } from 'pip-services-passwords-node';
class PasswordsDirectClientV1 extends pip_services_net_node_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services_commons_node_2.Descriptor("pip-services-passwords", "controller", "*", "*", "*"));
        if (config != null)
            this.configure(pip_services_commons_node_1.ConfigParams.fromValue(config));
    }
    setPassword(correlationId, userId, password, callback) {
        let timing = this.instrument(correlationId, 'passwords.set_password');
        this._controller.setPassword(correlationId, userId, password, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
    deletePassword(correlationId, userId, callback) {
        let timing = this.instrument(correlationId, 'passwords.delete_password');
        this._controller.deletePassword(correlationId, userId, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
    authenticate(correlationId, userId, password, callback) {
        let timing = this.instrument(correlationId, 'passwords.authenticate');
        this._controller.authenticate(correlationId, userId, password, (err, authenticated) => {
            timing.endTiming();
            callback(err, authenticated);
        });
    }
    changePassword(correlationId, userId, oldPassword, newPassword, callback) {
        let timing = this.instrument(correlationId, 'passwords.change_password');
        this._controller.changePassword(correlationId, userId, oldPassword, newPassword, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
    resetPassword(correlationId, userId, code, password, callback) {
        let timing = this.instrument(correlationId, 'passwords.reset_password');
        this._controller.resetPassword(correlationId, userId, code, password, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
    recoverPassword(correlationId, userId, callback) {
        let timing = this.instrument(correlationId, 'passwords.recover_password');
        this._controller.recoverPassword(correlationId, userId, (err) => {
            timing.endTiming();
            callback(err);
        });
    }
}
exports.PasswordsDirectClientV1 = PasswordsDirectClientV1;
//# sourceMappingURL=PasswordsDirectClientV1.js.map