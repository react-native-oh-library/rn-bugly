export declare class q21 {
    private static instance;
    private h8?;
    private g8;
    private constructor();
    static getInstance(): q21;
    putSync(key: string, value: number | string | boolean | Array<number> | Array<string> | Array<boolean>): q21;
    getNumber(key: string, defaultValue: number): number;
    i8(key: string, defaultValue: Array<number>): Array<number>;
    getStringArray(key: string, defaultValue: Array<string>): Array<string>;
    getString(key: string, defaultValue: string): string;
    getBoolean(key: string, defaultValue: boolean): boolean;
    remove(key: string): q21;
    commit(): void;
}
