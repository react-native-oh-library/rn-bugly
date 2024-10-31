var p6;
import { n6 } from "./j1";
export class q6 extends n6 {
    constructor(config = '') {
        super(q6.o6, q6.r6);
        this.config = config;
    }
    insert(s6) {
        return Promise.resolve(-1);
    }
    query(r6) {
        return Promise.resolve([]);
    }
}
p6 = q6;
q6.s6 = "_id";
q6.t6 = "update_time";
q6.u6 = "config";
q6.o6 = "config_table";
q6.r6 = `CREATE TABLE ${p6.o6} (${p6.s6} INTEGER PRIMARY KEY AUTOINCREMENT,
    ${p6.t6} BIGINT,
    ${p6.u6} TEXT)`;
