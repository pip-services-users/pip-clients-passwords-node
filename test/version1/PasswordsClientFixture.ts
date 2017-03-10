let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { IPasswordsClient } from '../../src/version1/IPasswordsClient';

let USER_PWD = {
    id: '1',
    password: 'password123'
};

export class PasswordsClientFixture {
    private _client: IPasswordsClient;
    
    constructor(client: IPasswordsClient) {
        this._client = client;
    }

    testRecoverPassword(done) {
        async.series([
        // Create a new user
            (callback) => {
                this._client.setPassword(
                    null,
                    USER_PWD.id, 
                    USER_PWD.password,
                    (err, userPassword) => {
                        assert.isNull(err);
                        
                        assert.isObject(userPassword);

                        callback();
                    }
                );
            },
        // Recover password
            (callback) => {
                this._client.recoverPassword(
                    null,
                    USER_PWD.id,
                    (err, userPassword) => {
                        assert.isNull(err);
                        
                        assert.isObject(userPassword);
                        //assert.isDefined(user.pwd_rec_code);

                        callback();
                    }
                );
            }
        ], done);
    }

    testChangePassword(done) {
        async.series([
        // Sign up
            (callback) => {
                this._client.setPassword(
                    null,
                    USER_PWD.id, 
                    USER_PWD.password,
                    (err, userPassword) => {
                        assert.isNull(err);
                        
                        assert.isObject(userPassword);

                        callback();
                    }
                );
            },
        // Change password
            (callback) => {
                this._client.changePassword(
                    null,
                    USER_PWD.id,
                    USER_PWD.password,
                    'xxx123',
                    (err, userPassword) => {
                        assert.isNull(err);
                        
                        assert.isObject(userPassword);

                        callback();
                    }
                );
            },
        // Sign in with new password
            (callback) => {
                this._client.authenticate(
                    null,
                    USER_PWD.id,
                    'xxx123',
                    (err, userPassword) => {
                        assert.isNull(err);
                        
                        assert.isObject(userPassword);

                        callback();
                    }
                );
            },
        // Delete password  
            (callback) => {
                this._client.deletePassword(
                    null,
                    USER_PWD.id,
                    (err) => {
                        assert.isNull(err);
                        
                        callback();
                    }
                )
            }    
        ], done);
    }

    testSigninWithWrongPassword(done) {
        async.series([
        // Sign up
            (callback) => {
                this._client.setPassword(
                    null,
                    USER_PWD.id, 
                    USER_PWD.password,
                    (err, userPassword) => {
                        assert.isNull(err);
                        
                        assert.isObject(userPassword);

                        callback();
                    }
                );
            },
        // Sign in with wrong password
            (callback) => {
                this._client.authenticate(
                    null,
                    USER_PWD.id,
                    'xxx',
                    (err, user) => {
                        assert.isNotNull(err);

                        callback();
                    }
                );
            }
        ], done);
    }
        
}
