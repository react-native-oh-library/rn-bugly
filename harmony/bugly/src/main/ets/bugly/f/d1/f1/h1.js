var p6;
import { n6 } from "./j1";
import relationalStore from '@ohos.data.relationalStore';
import systemDateTime from '@ohos.systemDateTime';
import { l2 } from "../../i/q";
import { v6 } from "../../o/l1/m1";
import { q5 } from "../e1";
export class v5 extends n6 {
    constructor(b8 = -1, c8 = '', appId = '', userId = '', deviceId = '', d8 = '', e8 = '', f8 = '', eventName = '', g8 = '', createTime = -1) {
        super(v5.o6, v5.r6);
        this.w6 = b8;
        this.recordId = c8;
        this.appId = appId;
        this.userId = userId;
        this.deviceId = deviceId;
        this.buildId = d8;
        this.x6 = e8;
        this.y6 = f8;
        this.eventName = eventName;
        this.z6 = g8;
        this.createTime = createTime;
    }
    insert(u7) {
        let valueBucket = {
            "report_type": this.w6,
            "record_id": this.recordId,
            "app_id": this.appId,
            "user_id": this.userId,
            "device_id": this.deviceId,
            "build_id": this.buildId,
            "app_ver": this.x6,
            "sdk_ver": this.y6,
            "event_name": this.eventName,
            "report_params": this.z6,
            "create_time": this.createTime,
            "report_cnt": 0,
            "report_result": 0
        };
        return new Promise((w7, x7) => {
            u7.insert(v5.o6, valueBucket).then((a8) => {
                l2.info(`insert connect table success, rowId = ${a8}`);
                w7(a8);
                return;
            }).catch((err) => {
                l2.error(`insert connect table failed, code is ${err.code}, message is ${err.message}`);
                w7(-1);
                return;
            });
        });
    }
    query(i7) {
        let j7 = [];
        let predicates = new relationalStore.RdbPredicates(this.tableName);
        predicates.notEqualTo(v5.a7, q5.s5);
        return new Promise((l7, m7) => {
            i7.query(predicates, (err, resultSet) => {
                if (err) {
                    l2.error(`query connect table failed, code is ${err.code},message is ${err.message}`);
                    l7([]);
                    return;
                }
                if (!resultSet) {
                    l2.error(`query connect table failed, resultSet is null!`);
                    l7([]);
                    return;
                }
                while (resultSet.goToNextRow()) {
                    const o7 = resultSet.getLong(resultSet.getColumnIndex(v5.b7));
                    const p7 = resultSet.getString(resultSet.getColumnIndex(v5.c7));
                    const appId = resultSet.getString(resultSet.getColumnIndex(v5.d7));
                    const userId = resultSet.getString(resultSet.getColumnIndex(v5.e7));
                    const deviceId = resultSet.getString(resultSet.getColumnIndex(v5.f7));
                    const q7 = resultSet.getString(resultSet.getColumnIndex(v5.g7));
                    const r7 = resultSet.getString(resultSet.getColumnIndex(v5.h7));
                    const s7 = resultSet.getString(resultSet.getColumnIndex(v5.i7));
                    const eventName = resultSet.getString(resultSet.getColumnIndex(v5.j7));
                    const params = resultSet.getString(resultSet.getColumnIndex(v5.k7));
                    const createTime = resultSet.getLong(resultSet.getColumnIndex(v5.l7));
                    let t7 = new v6(o7, p7, appId, userId, deviceId, q7, r7, s7, eventName, params, [], [], createTime);
                    j7.push(t7);
                }
                resultSet.close();
                l7(j7);
            });
        });
    }
    f6(d7) {
        let predicates = new relationalStore.RdbPredicates(this.tableName);
        const currentTime = systemDateTime.getTime();
        predicates.equalTo(v5.a7, q5.s5)
            .or()
            .lessThan(v5.l7, currentTime - v5.m7)
            .or()
            .greaterThan(v5.n7, v5.o7);
        return new Promise((f7, g7) => {
            d7.delete(predicates, (err, rows) => {
                if (err) {
                    l2.error(`clean db connect data failed, code is ${err.code},message is ${err.message}`);
                    f7(false);
                    return;
                }
                l2.info(`clean db connect data rows: ${rows}`);
                f7(true);
            });
        });
    }
    i6(w6, x6, status) {
        let y6 = `UPDATE ${this.tableName} SET report_cnt = report_cnt + 1, report_result = ${status} WHERE ${v5.c7} = "${x6}"`;
        return new Promise((a7, b7) => {
            w6.executeSql(y6, (err) => {
                if (err) {
                    l2.error(`update connect data status failed, code is ${err.code},message is ${err.message}`);
                    a7(false);
                    return;
                }
                a7(true);
            });
        });
    }
}
p6 = v5;
v5.m7 = 5 * 24 * 60 * 60 * 1000;
v5.o7 = 5;
v5.s6 = "_id";
v5.b7 = "report_type";
v5.c7 = "record_id";
v5.d7 = "app_id";
v5.e7 = "user_id";
v5.f7 = "device_id";
v5.g7 = "build_id";
v5.h7 = "app_ver";
v5.i7 = "sdk_ver";
v5.j7 = "event_name";
v5.k7 = "report_params";
v5.l7 = "create_time";
v5.n7 = "report_cnt";
v5.a7 = "report_result";
v5.o6 = "connect_table";
v5.r6 = `CREATE TABLE ${p6.o6} (${p6.s6} INTEGER PRIMARY KEY AUTOINCREMENT,
    ${p6.b7} INT,
    ${p6.c7} TEXT,
    ${p6.d7} TEXT,
    ${p6.e7} TEXT,
    ${p6.f7} TEXT,
    ${p6.g7} TEXT,
    ${p6.h7} TEXT,
    ${p6.i7} TEXT,
    ${p6.j7} TEXT,
    ${p6.k7} TEXT,
    ${p6.l7} BIGINT,
    ${p6.n7}, INT,
    ${p6.a7} INT)`;
