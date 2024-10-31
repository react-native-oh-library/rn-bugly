import { h1 } from "../g/k";
import { i2 } from "../m/n";
import { j2 } from "../o/p";
import { l2 } from "../i/q";
import { DeviceInfo } from "../../f/m/r";
import systemDateTime from '@ohos.systemDateTime';
import util from '@ohos.util';
export class m2 {
    constructor() { }
    static getInstance() {
        if (!m2.instance) {
            m2.instance = new m2();
        }
        return m2.instance;
    }
    n2() {
        this.o2(true);
        this.q2();
    }
    s2() {
        const currentTime = systemDateTime.getTime();
        if (m2.t2 != -1
            && currentTime - m2.t2 < m2.u2) {
            l2.info(`do not upload dau data on ability foreground for limit in 3 min.`);
            return;
        }
        m2.getInstance().o2(false);
        m2.t2 = currentTime;
        l2.info(`do upload dau data on ability foreground success.`);
    }
    q2() {
        const r2 = new Date();
        const s2 = new Date(r2.getFullYear(), r2.getMonth(), r2.getDate() + 1, 0, 0, 0);
        const t2 = s2.getTime() - systemDateTime.getTime();
        try {
            setTimeout(() => {
                l2.info(`do upload dau data in next day task.`);
                this.o2(false);
                this.q2();
            }, t2);
        }
        catch (e) {
            l2.error(`failed to upload dau data next day, ${e}`);
        }
    }
    o2(o2) {
        let q2 = this.v2();
        q2.j1 = o2;
        if (!q2) {
            l2.info('failed to create connect bean, do not upload dau data.');
            return;
        }
        l2.info(`do upload dau data on start.`);
        j2.getInstance().w2(q2);
    }
    v2() {
        let n2 = new h1();
        try {
            n2.appId = i2.getInstance().appId;
            n2.appKey = i2.getInstance().appKey;
            n2.timestamp = systemDateTime.getTime();
            n2.appVersion = i2.getInstance().appVersion;
            n2.sdkVersion = i2.getInstance().getSdkVersion();
            n2.e1 = i2.getInstance().appName;
            n2.buildNum = i2.getInstance().buildNum;
            n2.deviceId = i2.getInstance().z2();
            n2.processIdentify = i2.getInstance().a3;
            n2.osVersion = DeviceInfo.b3();
            n2.brand = DeviceInfo.c3();
            n2.manufacture = DeviceInfo.d3();
            n2.recordId = util.generateRandomUUID();
        }
        catch (e) {
            l2.error(e);
        }
        return n2;
    }
}
m2.u2 = 3 * 60 * 1000;
m2.t2 = -1;
