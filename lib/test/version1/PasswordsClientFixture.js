"use strict";
var _ = require('lodash');
var async = require('async');
var assert = require('chai').assert;
var USER_PWD = {
    id: '1',
    password: 'password123'
};
var PasswordsClientFixture = (function () {
    function PasswordsClientFixture(client) {
        this._client = client;
    }
    PasswordsClientFixture.prototype.testRecoverPassword = function (done) {
        var _this = this;
        async.series([
            // Create a new user
            function (callback) {
                _this._client.setPassword(null, USER_PWD.id, USER_PWD.password, function (err, userPassword) {
                    assert.isNull(err);
                    assert.isObject(userPassword);
                    callback();
                });
            },
            // Recover password
            function (callback) {
                _this._client.recoverPassword(null, USER_PWD.id, function (err, userPassword) {
                    assert.isNull(err);
                    assert.isObject(userPassword);
                    //assert.isDefined(user.pwd_rec_code);
                    callback();
                });
            }
        ], done);
    };
    PasswordsClientFixture.prototype.testChangePassword = function (done) {
        var _this = this;
        async.series([
            // Sign up
            function (callback) {
                _this._client.setPassword(null, USER_PWD.id, USER_PWD.password, function (err, userPassword) {
                    assert.isNull(err);
                    assert.isObject(userPassword);
                    callback();
                });
            },
            // Change password
            function (callback) {
                _this._client.changePassword(null, USER_PWD.id, USER_PWD.password, 'xxx123', function (err, userPassword) {
                    assert.isNull(err);
                    assert.isObject(userPassword);
                    callback();
                });
            },
            // Sign in with new password
            function (callback) {
                _this._client.authenticate(null, USER_PWD.id, 'xxx123', function (err, userPassword) {
                    assert.isNull(err);
                    assert.isObject(userPassword);
                    callback();
                });
            },
            // Delete password  
            function (callback) {
                _this._client.deletePassword(null, USER_PWD.id, function (err) {
                    assert.isNull(err);
                    callback();
                });
            }
        ], done);
    };
    PasswordsClientFixture.prototype.testSigninWithWrongPassword = function (done) {
        var _this = this;
        async.series([
            // Sign up
            function (callback) {
                _this._client.setPassword(null, USER_PWD.id, USER_PWD.password, function (err, userPassword) {
                    assert.isNull(err);
                    assert.isObject(userPassword);
                    callback();
                });
            },
            // Sign in with wrong password
            function (callback) {
                _this._client.authenticate(null, USER_PWD.id, 'xxx', function (err, user) {
                    assert.isNotNull(err);
                    callback();
                });
            }
        ], done);
    };
    return PasswordsClientFixture;
}());
exports.PasswordsClientFixture = PasswordsClientFixture;
