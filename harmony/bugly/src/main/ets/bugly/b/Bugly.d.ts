import { BuglyBuilder } from './BuglyBuilder';
import { BuglyLogAdapter } from './BuglyLogAdapter';
export declare class Bugly {
    static readonly JS_CRASH = 0;
    static readonly CPP_CRASH = 1;
    static readonly APP_FREEZE = 2;
    private static j15;
    static init(context: Context, builder: BuglyBuilder): Promise<void>;
    static updateDeviceId(deviceId: string): void;
    static updateUserId(userId: string): Promise<void>;
    static updateDeviceModel(deviceModel: string): void;
    static postError(e: Error): void;
    static postCustomError(name: string, message: string, stack: string, u23?: boolean, context?: Context): void;
    static postCrashRelatedError(name: string, message: string, stack: string): void;
    static putUserData(key: string, value: string): void;
    static removeUserData(key: string): void;
    static clearUserData(): void;
    static setCustomFilePaths(t23: Array<string>): Promise<void>;
    static testCrash(q23: number): void;
    static setLogAdapter(p23: BuglyLogAdapter): void;
    static setDeleteFaultLogFileAfterUpload(o23: boolean): void;
    private static k15;
    private static l15;
    private static i15;
}
