import { o11 } from "./w1";
import { n10 } from "./s1";
export declare class v6 {
    static readonly y8 = 0;
    static readonly v8 = 1;
    static readonly m8 = 2;
    appId: string;
    userId: string;
    deviceId: string;
    buildId: string;
    appVersion: string;
    sdkVersion: string;
    recordId: string;
    w6: number;
    eventName: string;
    params: string;
    p9: Array<o11>;
    q9: Array<n10>;
    createTime: number;
    constructor(w13: number, x13: string, appId?: string, userId?: string, deviceId?: string, y13?: string, appVersion?: string, z13?: string, eventName?: string, params?: string, a14?: Array<o11>, b14?: Array<n10>, createTime?: number);
    a9(v13: o11): void;
    u8(zipFile: n10): void;
}
