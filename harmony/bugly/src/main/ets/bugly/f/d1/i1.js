import relationalStore from '@ohos.data.relationalStore';
import { i2 } from "../m/n";
import { l2 } from "../i/q";
import { u5 } from "./f1/g1";
import { j2 } from "../o/p";
import { Constants } from "../u/v";
import { v5 } from "./f1/h1";
export class w5 {
    constructor(context) {
        this.tables = [new u5(), new v5()];
        this.store = undefined;
        this.context = context;
    }
    static getInstance() {
        if (!w5.instance) {
            w5.instance = new w5(i2.getInstance().context);
        }
        return w5.instance;
    }
    async x5(a6) {
        try {
            const b6 = await relationalStore.getRdbStore(this.context, w5.y5);
            l2.info(`get bugly rdb store success.`);
            this.store = b6;
            if (this.store.version == 0) {
                await this.z5();
                this.store.version = w5.a6;
            }
            if (this.store.version != w5.a6) {
                await this.b6(this.store);
                l2.info(`drop old db for version change.`);
            }
            setTimeout(() => {
                j2.getInstance().c6();
            }, a6);
        }
        catch (e) {
            l2.error('get db failed.');
            l2.error(e);
        }
    }
    insert(table) {
        if (!this.store) {
            l2.error(`Failed to insert data to db, store is null or undefined.`);
            return Promise.resolve(-1);
        }
        if (!table) {
            l2.error(`Failed to insert data to db, table is null or undefined.`);
            return Promise.resolve(-1);
        }
        try {
            return table.insert(this.store);
        }
        catch (e) {
            l2.error(e);
        }
        return Promise.resolve(-1);
    }
    query(table) {
        if (!this.store) {
            l2.error(`Failed to query table, store is null or undefined.`);
            return Promise.resolve([]);
        }
        if (!table) {
            l2.error(`Failed to query table, table is null or undefined.`);
            return Promise.resolve([]);
        }
        try {
            return table.query(this.store);
        }
        catch (e) {
            l2.error(e);
        }
        return Promise.resolve([]);
    }
    d6(table) {
        if (!this.store) {
            l2.error(`Failed to delete uploaded or over time data, store is null or undefined.`);
            return Promise.resolve(false);
        }
        if (!table) {
            l2.error(`Failed to delete uploaded or over time data, table is null or undefined.`);
            return Promise.resolve(false);
        }
        try {
            if (table instanceof u5) {
                return table.e6(this.store);
            }
            else if (table instanceof v5) {
                return table.f6(this.store);
            }
        }
        catch (e) {
            l2.error(e);
        }
        return Promise.resolve(false);
    }
    g6(table, z5, status) {
        if (!this.store) {
            l2.error(`Failed to update data status, store is null or undefined.`);
            return Promise.resolve(false);
        }
        if (!table) {
            l2.error(`Failed to update data status, table is null or undefined.`);
            return Promise.resolve(false);
        }
        try {
            if (table instanceof u5) {
                return table.h6(this.store, z5, status);
            }
            else if (table instanceof v5) {
                return table.i6(this.store, z5, status);
            }
        }
        catch (e) {
            l2.error(e);
        }
        return Promise.resolve(false);
    }
    async z5() {
        try {
            for (const table of this.tables) {
                await this.store.executeSql(table.j6);
                l2.info(`create table ${table.tableName} success.`);
            }
        }
        catch (e) {
            l2.error(e);
        }
    }
    async b6(y5) {
        if (this.k6(y5)) {
            await this.z5();
        }
        else {
            await this.l6();
        }
    }
    async l6() {
        try {
            await relationalStore.deleteRdbStore(this.context, w5.m6);
        }
        catch (e) {
            l2.error('failed to delete db.');
            l2.error(e);
        }
    }
    k6(x5) {
        try {
            for (const table of this.tables) {
                x5.executeSql(`DROP TABLE IF EXISTS ${table.tableName}`);
            }
            return true;
        }
        catch (e) {
            l2.error(e);
            return false;
        }
    }
}
w5.a6 = 3;
w5.m6 = `${Constants.e3}_database.db`;
w5.y5 = {
    name: w5.m6,
    securityLevel: relationalStore.SecurityLevel.S2,
    encrypt: false
};
