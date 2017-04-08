"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_net_node_1 = require("pip-services-net-node");
class PasswordsSenecaClientV1 extends pip_services_net_node_1.CommandableSenecaClient {
    constructor(config) {
        super('passwords');
        if (config != null)
            this.configure(pip_services_commons_node_1.ConfigParams.fromValue(config));
    }
    setPassword(correlationId, userId, password, callback) {
        this.callCommand('set_password', correlationId, {
            user_id: userId,
            password: password
        }, callback);
    }
    deletePassword(correlationId, userId, callback) {
        this.callCommand('delete_password', correlationId, {
            user_id: userId
        }, callback);
    }
    authenticate(correlationId, userId, password, callback) {
        this.callCommand('authenticate', correlationId, {
            user_id: userId,
            password: password
        }, (err, result) => {
            let authenticated = result != null ? result.authenticated : false;
            callback(err, authenticated);
        });
    }
    changePassword(correlationId, userId, oldPassword, newPassword, callback) {
        this.callCommand('change_password', correlationId, {
            user_id: userId,
            old_password: oldPassword,
            new_password: newPassword
        }, callback);
    }
    resetPassword(correlationId, userId, code, password, callback) {
        this.callCommand('reset_password', correlationId, {
            user_id: userId,
            code: code,
            password: password
        }, callback);
    }
    recoverPassword(correlationId, userId, callback) {
        this.callCommand('recover_password', correlationId, {
            user_id: userId
        }, callback);
    }
}
exports.PasswordsSenecaClientV1 = PasswordsSenecaClientV1;
//# sourceMappingURL=PasswordsSenecaClientV1.js.map