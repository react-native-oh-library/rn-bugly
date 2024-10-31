import { l2 } from "../i/q";
import { g13 } from "./cache/a2";
import { p11 } from "./t1/x1";
import { f14 } from "./e2/f2";
import { o1 } from "../g/l";
import { h1 } from "../g/k";
import { b11 } from "./t1/v1";
import { u } from "../g/h";
import { o10 } from "./t1/u1";
export class j2 {
    constructor() {
        this.p10 = new g13();
        this.a10 = new f14();
    }
    static getInstance() {
        if (!j2.instance) {
            j2.instance = new j2();
        }
        return j2.instance;
    }
    w2(j14) {
        let k14 = null;
        if (j14 instanceof o1) {
            k14 = p11.getInstance().l8(j14);
        }
        else if (j14 instanceof h1) {
            k14 = b11.getInstance().l8(j14);
        }
        else if (j14 instanceof u) {
            k14 = o10.getInstance().l8(j14);
        }
        if (!k14) {
            l2.error(`Failed to report data, data is null or undefined.`);
            return;
        }
        this.a10.b10(k14, true, this.q10);
    }
    saveData(data) {
        return this.p10.o9(data);
    }
    c6() {
        this.p10.r9();
    }
    r10(data, status) {
        this.p10.t9(data, status);
    }
    s10(listener) {
        this.q10 = listener;
    }
}
