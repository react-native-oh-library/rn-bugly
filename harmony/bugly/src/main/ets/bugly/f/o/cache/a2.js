import { v6 } from "../l1/m1";
import { w5 } from "../../d1/i1";
import { u5 } from "../../d1/f1/g1";
import { v5 } from "../../d1/f1/h1";
import { l2 } from "../../i/q";
import { j2 } from "../p";
export class g13 {
    constructor() {
        this.m9 = 3;
        this.n9 = 5 * 1000;
    }
    o9(data) {
        if (!data) {
            return Promise.resolve(-1);
        }
        if (data.w6 == v6.y8) {
            let u13 = new u5(data.appId, data.userId, data.deviceId, data.buildId, data.appVersion, data.sdkVersion, data.w6, data.recordId, data.eventName, data.params, JSON.stringify(data.p9), JSON.stringify(data.q9), data.createTime);
            return w5.getInstance().insert(u13);
        }
        else if (data.w6 == v6.v8) {
            let t13 = new v5(data.w6, data.recordId, data.appId, data.userId, data.deviceId, data.buildId, data.appVersion, data.sdkVersion, data.eventName, data.params, data.createTime);
            return w5.getInstance().insert(t13);
        }
        return Promise.resolve(-1);
    }
    r9() {
        l2.info('check and report cache data in a delay task.');
        setTimeout(() => {
            let r13 = new u5();
            this.s9(r13);
            let s13 = new v5();
            this.s9(s13);
        }, this.n9);
    }
    async t9(data, status) {
        if (!data) {
            return;
        }
        let table = null;
        if (data.w6 == v6.y8) {
            table = new u5();
        }
        else if (data.w6 == v6.v8) {
            table = new v5();
        }
        if (!table) {
            return;
        }
        let p13 = await w5.getInstance().g6(table, data.recordId, status);
        if (p13) {
            l2.info(`Successfully update ${table.tableName} status. recordId: ${data.recordId}, status: ${status}`);
        }
        else {
            l2.info(`Failed to update ${table.tableName} status. recordId: ${data.recordId}, status: ${status}`);
        }
    }
    async s9(table) {
        let m13 = await w5.getInstance().d6(table);
        if (m13) {
            l2.info(`Successfully delete uploaded and over time data in ${table.tableName}.`);
        }
        else {
            l2.warn(`Failed to delete uploaded and over time data in ${table.tableName}.`);
        }
        let n13 = await w5.getInstance().query(table);
        let o13 = this.u9(n13);
        this.v9(o13, table);
    }
    u9(j13) {
        if (!j13 || j13.length == 0) {
            return null;
        }
        let k13 = j13.map(obj => obj);
        if (k13.length > this.m9) {
            l2.info("size of data to upload big then limit, get newest record.");
            k13 = k13.slice(0, this.m9);
        }
        return k13;
    }
    v9(h13, table) {
        if (!h13 || h13.length == 0) {
            l2.info(`no data need to upload in ${table.tableName}`);
            return;
        }
        l2.info(`try to upload ${table.tableName} data: ${h13.length}`);
        for (const i13 of h13) {
            try {
                j2.getInstance().a10.b10(i13, false);
            }
            catch (e) {
                l2.error(e);
            }
        }
    }
}
