import { ICrashListener } from "../n2/ICrashListener";
export declare class BuglyBuilder {
    static readonly PLATFORM_OA = "OA";
    static readonly PLATFORM_PRO = "PRO";
    appId: string;
    appKey: string;
    appVersion: string;
    buildNum: string;
    appChannel: string;
    deviceId: string;
    userId: string;
    deviceModel: string;
    debugMode: boolean;
    initDelay: number;
    platform: string | null;
    crashListener: ICrashListener | null;
    enableJsCrashProtect: boolean;
    constructor();
}
