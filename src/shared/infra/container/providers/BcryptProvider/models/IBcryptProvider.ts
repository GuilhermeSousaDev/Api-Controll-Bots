export interface IBcryptProvider {
    generateHash(password: string): Promise<string>;
    compareHash(hash: string, password: string): Promise<boolean>;
}