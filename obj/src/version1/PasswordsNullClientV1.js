"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PasswordsNullClientV1 {
    setPassword(correlationId, userId, password, callback) {
        callback(null);
    }
    deletePassword(correlationId, userId, callback) {
        callback(null);
    }
    authenticate(correlationId, userId, password, callback) {
        callback(null, true);
    }
    changePassword(correlationId, userId, oldPassword, newPassword, callback) {
        callback(null);
    }
    resetPassword(correlationId, userId, code, password, callback) {
        callback(null);
    }
    recoverPassword(correlationId, userId, callback) {
        callback(null);
    }
}
exports.PasswordsNullClientV1 = PasswordsNullClientV1;
//# sourceMappingURL=PasswordsNullClientV1.js.map