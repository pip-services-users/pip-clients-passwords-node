let _ = require('lodash');

import { ComponentSet } from 'pip-services-runtime-node';
import { ComponentConfig } from 'pip-services-runtime-node';
import { LifeCycleManager } from 'pip-services-runtime-node';
import { SenecaAddon } from 'pip-services-runtime-node';

let PasswordsMemoryPersistence = require('pip-services-passwords/lib/src/persistence/PasswordsMemoryPersistence').PasswordsMemoryPersistence;
let PasswordsController = require('pip-services-passwords/lib/src/logic/PasswordsController').PasswordsController;
let PasswordsSenecaService = require('pip-services-passwords/lib/src/services/version1/PasswordsSenecaService').PasswordsSenecaService;

import { PasswordsSenecaClient } from '../../src/version1/PasswordsSenecaClient';
import { PasswordsClientFixture } from './PasswordsClientFixture';

suite('PasswordsSenecaClient', ()=> {        
    let db = new PasswordsMemoryPersistence();
    db.configure(new ComponentConfig());

    let ctrl = new PasswordsController();
    ctrl.configure(new ComponentConfig());

    let service = new PasswordsSenecaService();
    service.configure(new ComponentConfig());

    let client = new PasswordsSenecaClient();
    client.configure(new ComponentConfig());

    let seneca = new SenecaAddon();
    seneca.configure(new ComponentConfig());

    let components = ComponentSet.fromComponents(db, ctrl, client, service, seneca);
    let fixture = new PasswordsClientFixture(client);

    suiteSetup((done) => {
        LifeCycleManager.linkAndOpen(components, done);
    });
    
    suiteTeardown((done) => {
        seneca.getSeneca().close(() => {
            LifeCycleManager.close(components, done);
        });
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