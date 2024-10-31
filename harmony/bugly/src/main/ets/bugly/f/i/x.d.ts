import { Context } from '@ohos.abilityAccessCtrl';
export declare class h4 {
    static z11(context: Context, dir: string): string;
    static a12(context: Context, dir: string): string;
    static b12(context: Context, dir: string): string;
    static c12(context: Context, dir: string): string;
    static z4(path: string): boolean;
    static r4(path: string): void;
    static k5(context: Context, content: string, append: boolean, path?: string, fileName?: string): string;
    static e11(path: string, m17?: boolean): string;
    static d12(path: string): string;
    static e12(path: string): string;
    static o5(path: string): void;
    static f12(files: Array<string>): void;
    static g12(input: string, e17: string): Promise<boolean>;
    static a5(inFiles: Array<string>, outFile: string): Promise<boolean>;
    static g11(filePath: string): ArrayBuffer | null;
    static h12(filePath: string): number;
    static s4(dir: string, y16: number): void;
    static m5(filePath: string): string | null;
    static u4(j16: string, limit: number): void;
}
