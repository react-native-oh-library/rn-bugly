import { n6 } from "./j1";
import relationalStore from '@ohos.data.relationalStore';
export declare class u5 extends n6 {
    private static readonly t7;
    private static readonly u7;
    private static readonly s6;
    private static readonly d7;
    private static readonly e7;
    private static readonly f7;
    private static readonly g7;
    private static readonly h7;
    private static readonly i7;
    private static readonly b7;
    private static readonly c7;
    private static readonly j7;
    private static readonly k7;
    private static readonly r7;
    private static readonly s7;
    private static readonly l7;
    private static readonly n7;
    private static readonly a7;
    static readonly o6: string;
    static readonly r6: string;
    private appId;
    private userId;
    private deviceId;
    private buildId;
    private x6;
    private y6;
    private w6;
    private recordId;
    private eventName;
    private z6;
    private p7;
    private q7;
    private createTime;
    constructor(appId?: string, userId?: string, deviceId?: string, o9?: string, p9?: string, q9?: string, r9?: number, s9?: string, eventName?: string, t9?: string, u9?: string, v9?: string, createTime?: number);
    insert(h9: relationalStore.RdbStore): Promise<number>;
    query(t8: relationalStore.RdbStore): Promise<Array<object>>;
    e6(o8: relationalStore.RdbStore): Promise<boolean>;
    h6(h8: relationalStore.RdbStore, i8: string, status: number): Promise<boolean>;
}
