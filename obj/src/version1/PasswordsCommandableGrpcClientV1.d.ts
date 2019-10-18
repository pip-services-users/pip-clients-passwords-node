import { CommandableGrpcClient } from 'pip-services3-grpc-node';
import { UserPasswordInfoV1 } from './UserPasswordInfoV1';
import { IPasswordsClientV1 } from './IPasswordsClientV1';
export declare class PasswordsCommandableGrpcClientV1 extends CommandableGrpcClient implements IPasswordsClientV1 {
    constructor(config?: any);
    getPasswordInfo(correlationId: string, userId: string, callback: (err: any, info: UserPasswordInfoV1) => void): void;
    setTempPassword(correlationId: string, userId: string, callback: (err: any, password: string) => void): void;
    setPassword(correlationId: string, userId: string, password: string, callback: (err: any) => void): void;
    deletePassword(correlationId: string, userId: string, callback: (err: any) => void): void;
    authenticate(correlationId: string, userId: string, password: string, callback: (err: any, authenticated: boolean) => void): void;
    changePassword(correlationId: string, userId: string, oldPassword: string, newPassword: string, callback: (err: any) => void): void;
    validateCode(correlationId: string, userId: string, code: string, callback: (err: any, valid: boolean) => void): void;
    resetPassword(correlationId: string, userId: string, code: string, password: string, callback: (err: any) => void): void;
    recoverPassword(correlationId: string, userId: string, callback: (err: any) => void): void;
}
