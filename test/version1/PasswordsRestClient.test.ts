let _ = require('lodash');

import { ComponentSet } from 'pip-services-runtime-node';
import { ComponentConfig } from 'pip-services-runtime-node';
import { LifeCycleManager } from 'pip-services-runtime-node';

let PasswordsMemoryPersistence = require('pip-services-passwords/lib/src/persistence/PasswordsMemoryPersistence').PasswordsMemoryPersistence;
let PasswordsController = require('pip-services-passwords/lib/src/logic/PasswordsController').PasswordsController;
let PasswordsRestService = require('pip-services-passwords/lib/src/services/version1/PasswordsRestService').PasswordsRestService;

import { PasswordsRestClient } from '../../src/version1/PasswordsRestClient';
import { PasswordsClientFixture } from './PasswordsClientFixture';

let restConfig = ComponentConfig.fromTuples(
    'endpoint.protocol', 'http',
    'endpoint.host', 'localhost',
    'endpoint.port', 3000
);

suite('PasswordsRestClient', ()=> {    
    let db = new PasswordsMemoryPersistence();
    db.configure(new ComponentConfig());

    let ctrl = new PasswordsController();
    ctrl.configure(new ComponentConfig());

    let service = new PasswordsRestService();
    service.configure(restConfig);

    let client = new PasswordsRestClient();
    client.configure(restConfig);

    let components = ComponentSet.fromComponents(db, ctrl, service, client);
    let fixture = new PasswordsClientFixture(client);

    suiteSetup((done) => {
        LifeCycleManager.linkAndOpen(components, done);
    });
    
    suiteTeardown((done) => {
        LifeCycleManager.close(components, done);
    });
    
    setup((done) => {
        db.clearTestData(done);
    });
    
    test('Test Recover Password', (done) => {
        fixture.testRecoverPassword(done);
    });

    test('Test Change Password', (done) => {
        fixture.testChangePassword(done);
    });

    test('Test Signin with Wrong Password', (done) => {
        fixture.testSigninWithWrongPassword(done);
    });

});