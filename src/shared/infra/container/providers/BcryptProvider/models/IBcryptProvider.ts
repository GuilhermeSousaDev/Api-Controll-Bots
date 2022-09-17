export interface IBcryptProvider {
    generateHash(payload: string): Promise<string>;
    compareHash(hash: string, payload: string): Promise<boolean>;
}