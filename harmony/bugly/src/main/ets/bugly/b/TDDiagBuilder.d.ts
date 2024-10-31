import { LoggerAdapter } from "../c/d/LoggerAdapter";
import { LogUploadListener } from "../c/d/LogUploadListener";
export declare class TDDiagBuilder {
    static readonly PLATFORM_OA = 0;
    static readonly PLATFORM_PRO = 3;
    appId: string;
    appKey: string;
    appVersion: string;
    platform: number;
    loggerAdapter: LoggerAdapter | null | undefined;
    logUploadListener?: LogUploadListener;
    initiativeUploadWhiteListTags?: Array<string>;
    xgTrafficQuota: number;
    constructor();
}
