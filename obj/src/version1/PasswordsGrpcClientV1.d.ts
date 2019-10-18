import { GrpcClient } from 'pip-services3-grpc-node';
import { IPasswordsClientV1 } from './IPasswordsClientV1';
import { UserPasswordInfoV1 } from './UserPasswordInfoV1';
export declare class PasswordsGrpcClientV1 extends GrpcClient implements IPasswordsClientV1 {
    constructor();
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
