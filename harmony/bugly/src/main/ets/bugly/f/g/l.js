import { t } from "./e";
import { g1 } from "../i/j";
export class o1 extends t {
    constructor() {
        super();
        this.type = -1;
        this.typeName = "";
        this.foreground = false;
        this.pid = -1;
        this.s1 = "";
        this.exceptionName = "";
        this.exceptionMsg = "";
        this.exceptionStack = "";
        this.t1 = null;
        this.u1 = false;
        this.signo = -1;
        this.code = -1;
        this.threadName = "";
        this.tid = -1;
        this.rss = -1;
        this.pss = -1;
        this.vss = -1;
        this.v1 = -1;
        this.w1 = -1;
        this.z1 = -1;
        this.a2 = null;
        this.b2 = null;
        this.c2 = null;
        this.appLaunchTime = -1;
    }
    c1() {
        return JSON.stringify({
            appKey: this.appKey,
            timestamp: this.timestamp,
            appName: this.appName,
            osVersion: this.osVersion,
            brand: this.brand,
            manufacture: this.manufacture,
            type: this.type,
            typeName: this.typeName,
            foreground: this.foreground,
            pid: this.pid,
            exceptionName: this.exceptionName,
            exceptionMsg: this.exceptionMsg,
            exceptionStack: this.exceptionStack,
            signo: this.signo,
            code: this.code,
            threadName: this.threadName,
            tid: this.tid,
            d2: this.d2 ? g1.m1(this.d2) : '',
            s1: this.s1,
            rss: this.rss,
            pss: this.pss,
            vss: this.vss,
            v1: this.v1,
            w1: this.w1,
            z1: this.z1,
            l1: this.l1 ? g1.m1(this.l1) : ''
        });
    }
}
o1.e2 = 0;
o1.f2 = 1;
o1.g2 = 2;
o1.h2 = 3;
export class q1 {
    constructor() {
        this.index = 0;
        this.symbol = '';
        this.file = '';
        this.buildId = '';
        this.pc = '';
        this.offset = -1;
        this.row = 0;
        this.column = 0;
    }
}
