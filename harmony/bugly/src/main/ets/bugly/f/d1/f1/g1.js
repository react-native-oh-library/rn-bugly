var p6;
import { n6 } from "./j1";
import relationalStore from '@ohos.data.relationalStore';
import { l2 } from "../../i/q";
import systemDateTime from "@ohos.systemDateTime";
import { v6 } from "../../o/l1/m1";
import { q5 } from "../e1";
export class u5 extends n6 {
    constructor(appId = '', userId = '', deviceId = '', o9 = '', p9 = '', q9 = '', r9 = -1, s9 = '', eventName = '', t9 = '', u9 = '', v9 = '', createTime = -1) {
        super(u5.o6, u5.r6);
        this.appId = appId;
        this.userId = userId;
        this.deviceId = deviceId;
        this.buildId = o9;
        this.x6 = p9;
        this.y6 = q9;
        this.w6 = r9;
        this.recordId = s9;
        this.eventName = eventName;
        this.z6 = t9;
        this.p7 = u9;
        this.q7 = v9;
        this.createTime = createTime;
    }
    insert(h9) {
        let valueBucket = {
            "app_id": this.appId,
            "user_id": this.userId,
            "device_id": this.deviceId,
            "build_id": this.buildId,
            "app_ver": this.x6,
            "sdk_ver": this.y6,
            "report_type": this.w6,
            "record_id": this.recordId,
            "event_name": this.eventName,
            "report_params": this.z6,
            "report_file_data": this.p7,
            "report_local_file_info": this.q7,
            "create_time": this.createTime,
            "report_cnt": 0,
            "report_result": q5.t5
        };
        return new Promise((j9, k9) => {
            h9.insert(u5.o6, valueBucket).then((n9) => {
                l2.info(`insert crash table success, rowId = ${n9}`);
                j9(n9);
                return;
            }).catch((err) => {
                l2.error(`insert crash table failed, code is ${err.code}, message is ${err.message}`);
                j9(-1);
                return;
            });
        });
    }
    query(t8) {
        let u8 = [];
        let predicates = new relationalStore.RdbPredicates(this.tableName);
        predicates.notEqualTo(u5.a7, q5.s5);
        return new Promise((w8, x8) => {
            t8.query(predicates, (err, resultSet) => {
                if (err) {
                    l2.error(`query crash table failed, code is ${err.code},message is ${err.message}`);
                    w8([]);
                    return;
                }
                if (!resultSet) {
                    l2.error(`query crash table failed, resultSet is null!`);
                    w8([]);
                    return;
                }
                while (resultSet.goToNextRow()) {
                    const appId = resultSet.getString(resultSet.getColumnIndex(u5.d7));
                    const userId = resultSet.getString(resultSet.getColumnIndex(u5.e7));
                    const deviceId = resultSet.getString(resultSet.getColumnIndex(u5.f7));
                    const z8 = resultSet.getString(resultSet.getColumnIndex(u5.g7));
                    const a9 = resultSet.getString(resultSet.getColumnIndex(u5.h7));
                    const b9 = resultSet.getString(resultSet.getColumnIndex(u5.i7));
                    const c9 = resultSet.getLong(resultSet.getColumnIndex(u5.b7));
                    const d9 = resultSet.getString(resultSet.getColumnIndex(u5.c7));
                    const eventName = resultSet.getString(resultSet.getColumnIndex(u5.j7));
                    const params = resultSet.getString(resultSet.getColumnIndex(u5.k7));
                    const e9 = JSON.parse(resultSet.getString(resultSet.getColumnIndex(u5.r7)));
                    const f9 = JSON.parse(resultSet.getString(resultSet.getColumnIndex(u5.s7)));
                    const createTime = resultSet.getLong(resultSet.getColumnIndex(u5.l7));
                    let g9 = new v6(c9, d9, appId, userId, deviceId, z8, a9, b9, eventName, params, e9, f9, createTime);
                    u8.push(g9);
                }
                resultSet.close();
                w8(u8);
            });
        });
    }
    e6(o8) {
        let predicates = new relationalStore.RdbPredicates(this.tableName);
        const currentTime = systemDateTime.getTime();
        predicates.equalTo(u5.a7, q5.s5)
            .or()
            .lessThan(u5.l7, currentTime - u5.t7)
            .or()
            .greaterThan(u5.n7, u5.u7);
        return new Promise((q8, r8) => {
            o8.delete(predicates, (err, rows) => {
                if (err) {
                    l2.error(`clean db crash failed, code is ${err.code},message is ${err.message}`);
                    q8(false);
                    return;
                }
                l2.info(`clean db crash rows: ${rows}`);
                q8(true);
            });
        });
    }
    h6(h8, i8, status) {
        let j8 = `UPDATE ${this.tableName} SET report_cnt = report_cnt + 1, report_result = ${status} WHERE ${u5.c7} = "${i8}"`;
        return new Promise((l8, m8) => {
            h8.executeSql(j8, (err) => {
                if (err) {
                    l2.error(`update crash data status failed, code is ${err.code},message is ${err.message}`);
                    l8(false);
                    return;
                }
                l8(true);
            });
        });
    }
}
p6 = u5;
u5.t7 = 5 * 24 * 60 * 60 * 1000;
u5.u7 = 5;
u5.s6 = "_id";
u5.d7 = "app_id";
u5.e7 = "user_id";
u5.f7 = "device_id";
u5.g7 = "build_id";
u5.h7 = "app_ver";
u5.i7 = "sdk_ver";
u5.b7 = "report_type";
u5.c7 = "record_id";
u5.j7 = "event_name";
u5.k7 = "report_params";
u5.r7 = "report_file_data";
u5.s7 = "report_local_file_info";
u5.l7 = "create_time";
u5.n7 = "report_cnt";
u5.a7 = "report_result";
u5.o6 = "crash_table";
u5.r6 = `CREATE TABLE ${p6.o6} (${p6.s6} INTEGER PRIMARY KEY AUTOINCREMENT,
    ${p6.d7} TEXT,
    ${p6.e7} TEXT,
    ${p6.f7} TEXT,
    ${p6.g7} TEXT,
    ${p6.h7} TEXT,
    ${p6.i7} TEXT,
    ${p6.b7} INT,
    ${p6.c7} TEXT,
    ${p6.j7} TEXT,
    ${p6.k7} TEXT,
    ${p6.r7} TEXT,
    ${p6.s7} TEXT,
    ${p6.l7} BIGINT,
    ${p6.n7}, INT,
    ${p6.a7} INT)`;
