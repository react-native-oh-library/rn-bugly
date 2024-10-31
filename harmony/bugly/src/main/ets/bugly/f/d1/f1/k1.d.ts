import { n6 } from "./j1";
import relationalStore from '@ohos.data.relationalStore';
export declare class q6 extends n6 {
    private static readonly s6;
    private static readonly t6;
    private static readonly u6;
    static readonly o6: string;
    static readonly r6: string;
    private config;
    constructor(config?: string);
    insert(s6: relationalStore.RdbStore): Promise<number>;
    query(r6: relationalStore.RdbStore): Promise<Array<object>>;
}
