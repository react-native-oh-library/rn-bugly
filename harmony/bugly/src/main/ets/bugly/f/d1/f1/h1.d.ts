import { n6 } from "./j1";
import relationalStore from '@ohos.data.relationalStore';
export declare class v5 extends n6 {
    private static readonly m7;
    private static readonly o7;
    private static readonly s6;
    private static readonly b7;
    private static readonly c7;
    private static readonly d7;
    private static readonly e7;
    private static readonly f7;
    private static readonly g7;
    private static readonly h7;
    private static readonly i7;
    private static readonly j7;
    private static readonly k7;
    private static readonly l7;
    private static readonly n7;
    private static readonly a7;
    static readonly o6 = "connect_table";
    static readonly r6: string;
    private w6;
    private recordId;
    private appId;
    private userId;
    private deviceId;
    private buildId;
    private x6;
    private y6;
    private eventName;
    private z6;
    private createTime;
    constructor(b8?: number, c8?: string, appId?: string, userId?: string, deviceId?: string, d8?: string, e8?: string, f8?: string, eventName?: string, g8?: string, createTime?: number);
    insert(u7: relationalStore.RdbStore): Promise<number>;
    query(i7: relationalStore.RdbStore): Promise<Array<object>>;
    f6(d7: relationalStore.RdbStore): Promise<boolean>;
    i6(w6: relationalStore.RdbStore, x6: string, status: number): Promise<boolean>;
}
