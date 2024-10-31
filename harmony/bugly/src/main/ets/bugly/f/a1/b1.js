import { u } from "../g/h";
import { i2 } from "../m/n";
import { h4 } from "../i/x";
import { l2 } from "../i/q";
import systemDateTime from "@ohos.systemDateTime";
import util from '@ohos.util';
import { DeviceInfo } from "../m/r";
import { j2 } from "../o/p";
import { r3 } from "../u/w";
import { i4 } from "../o/y/z";
import { Constants } from "../u/v";
export class j4 {
    constructor() {
    }
    static getInstance() {
        if (!j4.instance) {
            j4.instance = new j4();
        }
        return j4.instance;
    }
    l4() {
        this.m4();
        this.n4();
        this.o4();
    }
    m4() {
        const x4 = this.q4();
        try {
            if (x4) {
                h4.r4(x4);
            }
        }
        catch (e) {
            l2.error(`failed to create custom zip dir.`);
            l2.error(e);
        }
    }
    n4() {
        const w4 = this.q4();
        try {
            if (w4) {
                h4.s4(w4, j4.t4);
            }
        }
        catch (e) {
            l2.error(`failed to delete expired zip files.`);
            l2.error(e);
        }
    }
    o4() {
        const v4 = this.q4();
        try {
            if (v4) {
                h4.u4(v4, j4.v4);
            }
        }
        catch (e) {
            l2.error(`failed to delete over limit zip files.`);
            l2.error(e);
        }
    }
    q4() {
        try {
            const u4 = i2.getInstance().context.filesDir + "/" + j4.w4;
            return u4;
        }
        catch (e) {
            l2.error(`failed to get custom files dir.`);
            l2.error(e);
            return null;
        }
    }
    x4(files, p4) {
        if (!files || files.length == 0) {
            return null;
        }
        try {
            const q4 = i2.getInstance().context.filesDir + "/" + j4.w4;
            const r4 = q4 + "/" + j4.y4 + p4 + ".zip";
            let s4 = new Array();
            files.forEach((file) => {
                if (h4.z4(file)) {
                    s4.push(file);
                }
            });
            l2.info(`start to zip custom files: ${s4.toString()}`);
            if (s4 && s4.length != 0) {
                h4.a5(s4, r4);
                return r4;
            }
            else {
                l2.info(`all custom files is invalid, just return.`);
                return null;
            }
        }
        catch (e) {
            l2.error(`failed to zip custom files.`);
            l2.error(e);
            return null;
        }
    }
    async b5(filePath, m4, eventName) {
        if (!h4.z4(filePath)) {
            l2.error(`failed to upload custom files, zip file do not exist.`);
            return;
        }
        let token = await this.c5(eventName);
        if (!token) {
            l2.error(`failed to upload custom files, token is null.`);
            return;
        }
        let n4 = new u();
        let o4 = i2.getInstance();
        n4.appId = o4.appId;
        n4.appKey = o4.appKey;
        n4.timestamp = systemDateTime.getTime();
        n4.appVersion = o4.appVersion;
        n4.f1 = "Unknown";
        n4.sdkVersion = o4.getSdkVersion();
        n4.e1 = o4.appName;
        n4.recordId = util.generateRandomUUID();
        n4.manufacture = DeviceInfo.d3();
        n4.osVersion = DeviceInfo.b3();
        n4.brand = DeviceInfo.c3();
        n4.deviceId = o4.z2();
        n4.uid = o4.userId;
        n4.deviceModel = o4.deviceModel;
        n4.type = u.d1;
        n4.b1 = m4;
        n4.filePath = filePath;
        n4.a1 = eventName;
        n4.token = token;
        j2.getInstance().w2(n4);
    }
    async c5(eventName) {
        let k4 = `${r3.v3}/v${r3.w3}/${i2.getInstance().appId}/quota/check`;
        let l4 = new Object();
        l4["product_id"] = i2.getInstance().appId;
        l4['base_type'] = this.d5(eventName);
        l4['sub_type'] = r3.f4;
        l4['app_version'] = i2.getInstance().appVersion;
        l4['sdk_version'] = i2.getInstance().getSdkVersion();
        let request = new i4(k4, l4);
        let result = await request.upload();
        if (result) {
            const token = result['token'];
            return token;
        }
        return null;
    }
    d5(eventName) {
        if (eventName == Constants.j3) {
            return r3.b4;
        }
        else if (eventName == Constants.i3) {
            return r3.c4;
        }
        else {
            return r3.a4;
        }
    }
}
j4.w4 = "bugly_custom_zips";
j4.y4 = "custom_";
j4.t4 = 7 * 24 * 60 * 60;
j4.v4 = 30;
