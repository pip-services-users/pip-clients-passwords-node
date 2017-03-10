"use strict";
var _ = require('lodash');
var pip_services_runtime_node_1 = require('pip-services-runtime-node');
var pip_services_runtime_node_2 = require('pip-services-runtime-node');
var pip_services_runtime_node_3 = require('pip-services-runtime-node');
var PasswordsMemoryPersistence = require('pip-services-passwords/lib/src/persistence/PasswordsMemoryPersistence').PasswordsMemoryPersistence;
var PasswordsController = require('pip-services-passwords/lib/src/logic/PasswordsController').PasswordsController;
var PasswordsRestService = require('pip-services-passwords/lib/src/services/version1/PasswordsRestService').PasswordsRestService;
var PasswordsRestClient_1 = require('../../src/version1/PasswordsRestClient');
var PasswordsClientFixture_1 = require('./PasswordsClientFixture');
var restConfig = pip_services_runtime_node_2.ComponentConfig.fromTuples('endpoint.protocol', 'http', 'endpoint.host', 'localhost', 'endpoint.port', 3000);
suite('PasswordsRestClient', function () {
    var db = new PasswordsMemoryPersistence();
    db.configure(new pip_services_runtime_node_2.ComponentConfig());
    var ctrl = new PasswordsController();
    ctrl.configure(new pip_services_runtime_node_2.ComponentConfig());
    var service = new PasswordsRestService();
    service.configure(restConfig);
    var client = new PasswordsRestClient_1.PasswordsRestClient();
    client.configure(restConfig);
    var components = pip_services_runtime_node_1.ComponentSet.fromComponents(db, ctrl, service, client);
    var fixture = new PasswordsClientFixture_1.PasswordsClientFixture(client);
    suiteSetup(function (done) {
        pip_services_runtime_node_3.LifeCycleManager.linkAndOpen(components, done);
    });
    suiteTeardown(function (done) {
        pip_services_runtime_node_3.LifeCycleManager.close(components, done);
    });
    setup(function (done) {
        db.clearTestData(done);
    });
    test('Test Recover Password', function (done) {
        fixture.testRecoverPassword(done);
    });
    test('Test Change Password', function (done) {
        fixture.testChangePassword(done);
    });
    test('Test Signin with Wrong Password', function (done) {
        fixture.testSigninWithWrongPassword(done);
    });
});
