"use strict";
var _ = require('lodash');
var pip_services_runtime_node_1 = require('pip-services-runtime-node');
var pip_services_runtime_node_2 = require('pip-services-runtime-node');
var pip_services_runtime_node_3 = require('pip-services-runtime-node');
var pip_services_runtime_node_4 = require('pip-services-runtime-node');
var PasswordsMemoryPersistence = require('pip-services-passwords/lib/src/persistence/PasswordsMemoryPersistence').PasswordsMemoryPersistence;
var PasswordsController = require('pip-services-passwords/lib/src/logic/PasswordsController').PasswordsController;
var PasswordsSenecaService = require('pip-services-passwords/lib/src/services/version1/PasswordsSenecaService').PasswordsSenecaService;
var PasswordsSenecaClient_1 = require('../../src/version1/PasswordsSenecaClient');
var PasswordsClientFixture_1 = require('./PasswordsClientFixture');
suite('PasswordsSenecaClient', function () {
    var db = new PasswordsMemoryPersistence();
    db.configure(new pip_services_runtime_node_2.ComponentConfig());
    var ctrl = new PasswordsController();
    ctrl.configure(new pip_services_runtime_node_2.ComponentConfig());
    var service = new PasswordsSenecaService();
    service.configure(new pip_services_runtime_node_2.ComponentConfig());
    var client = new PasswordsSenecaClient_1.PasswordsSenecaClient();
    client.configure(new pip_services_runtime_node_2.ComponentConfig());
    var seneca = new pip_services_runtime_node_4.SenecaAddon();
    seneca.configure(new pip_services_runtime_node_2.ComponentConfig());
    var components = pip_services_runtime_node_1.ComponentSet.fromComponents(db, ctrl, client, service, seneca);
    var fixture = new PasswordsClientFixture_1.PasswordsClientFixture(client);
    suiteSetup(function (done) {
        pip_services_runtime_node_3.LifeCycleManager.linkAndOpen(components, done);
    });
    suiteTeardown(function (done) {
        seneca.getSeneca().close(function () {
            pip_services_runtime_node_3.LifeCycleManager.close(components, done);
        });
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
