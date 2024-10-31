import relationalStore from '@ohos.data.relationalStore';
export declare abstract class n6 {
    tableName: string;
    j6: string;
    constructor(tableName: string, o6: string);
    abstract insert(y28: relationalStore.RdbStore): Promise<number>;
    abstract query(x28: relationalStore.RdbStore): Promise<Array<object>>;
}
