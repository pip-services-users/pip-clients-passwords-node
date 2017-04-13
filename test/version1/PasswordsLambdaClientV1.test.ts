import { YamlConfigReader } from 'pip-services-commons-node';
import { PasswordsClientFixtureV1 } from './PasswordsClientFixtureV1';
import { PasswordsLambdaClientV1 } from '../../src/version1/PasswordsLambdaClientV1';

suite('PasswordsLambdaClient', ()=> {
    let config = YamlConfigReader.readConfig(null, './config/test_connections.yaml', null);
    let lambdaConfig = config.getSection('lambda');

    // Skip if connection is not configured
    if (lambdaConfig.getAsNullableString("connection.protocol") != "aws")
        return;

    let client: PasswordsLambdaClientV1;
    let fixture: PasswordsClientFixtureV1;

    setup((done) => {
        client = new PasswordsLambdaClientV1();
        client.configure(lambdaConfig);

        fixture = new PasswordsClientFixtureV1(client);

        client.open(null, done);
    });

    teardown((done) => {
        client.close(null, done);
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