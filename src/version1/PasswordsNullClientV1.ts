import { IPasswordsClientV1 } from './IPasswordsClientV1';

export class PasswordsNullClientV1 implements IPasswordsClientV1 {
    
    public setPassword(correlationId: string, userId: string, password: string,
        callback: (err: any) => void): void {
        callback(null);
    }

    public deletePassword(correlationId: string, userId: string,
        callback: (err: any) => void): void {
        callback(null);
    }

    public authenticate(correlationId: string, userId: string, password: string,
        callback: (err: any, authenticated: boolean) => void): void {
        callback(null, true);
    }

    public changePassword(correlationId: string, userId: string, oldPassword: string, newPassword: string,
        callback: (err: any) => void): void {
        callback(null);
    }

    public resetPassword(correlationId: string, userId: string, code: string, password: string,
        callback: (err: any) => void): void {
        callback(null);
    }

    public recoverPassword(correlationId: string, userId: string,
        callback: (err: any) => void): void {
        callback(null);
    }

}
