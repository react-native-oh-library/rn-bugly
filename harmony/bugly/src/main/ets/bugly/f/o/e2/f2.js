import { i2 } from "../../m/n";
import { l2 } from "../../i/q";
import { v6 } from "../l1/m1";
import { d14 } from "../y/c2";
import { e14 } from "../y/d2";
import systemDateTime from "@ohos.systemDateTime";
import { r3 } from "../../u/w";
export class f14 {
    d10(data, g14) {
        if (!g14) {
            l2.info("disable print report data.");
            return;
        }
        try {
            l2.info("#+++++++++Bugly Report Event+++++++++#");
            l2.info(`app id: ${data.appId}`);
            l2.info(`user id: ${data.userId}`);
            l2.info(`device id: ${data.deviceId}`);
            l2.info(`build id: ${data.buildId}`);
            l2.info(`report type: ${data.w6}`);
            l2.info(`event name: ${data.eventName}`);
            l2.info(`app version: ${data.appVersion}`);
            l2.info(`sdk version: ${data.sdkVersion}`);
            l2.info(`record id: ${data.recordId}`);
            l2.info(`create time: ${data.createTime}`);
            const h14 = JSON.parse(data.params);
            for (const key of Object.keys(h14)) {
                if (key == "Body") {
                    for (const i14 of Object.keys(h14[key])) {
                        l2.info(`params: body ${i14}: ${JSON.stringify(h14[key][i14])}`);
                    }
                }
                else if (key == "Resource" || key == "Attributes") {
                    l2.info(`params: ${key}: ${JSON.stringify(h14[key])}`);
                }
                else {
                    l2.info(`params: ${key}: ${h14[key]}`);
                }
            }
            for (const path of data.p9) {
                l2.info(`filePath: ${JSON.stringify(path)}`);
            }
            l2.info("#++++++++++++++++++++++++++++++++++++#");
        }
        catch (e) {
            l2.warn(e);
        }
    }
    e10(url, data, sync, callback) {
        new e14(url, data, sync, callback).upload();
    }
    f10(url, data, sync, callback) {
        new d14(url, data, sync, callback).upload();
    }
    g10() {
        return `${r3.v3}/v${r3.w3}/${i2.getInstance().appId}/upload-json`;
    }
    h10() {
        return `${r3.v3}/v${r3.w3}/${i2.getInstance().appId}/upload-file`;
    }
    i10() {
        return `${r3.v3}/v${r3.w3}/${i2.getInstance().appId}/custom/upload-file`;
    }
    k10(data) {
        let timestamp = systemDateTime.getTime();
        return `?timestamp=${timestamp}&nonce=${data.recordId}`;
    }
    l10(data, sync, callback) {
        if (data.w6 == v6.m8) {
            let url = this.i10() + this.k10(data);
            this.f10(url, data, sync);
        }
        else {
            if (data.p9 && data.p9.length > 0) {
                let url = this.h10() + this.k10(data);
                this.f10(url, data, sync, callback);
            }
            else {
                let url = this.g10() + this.k10(data);
                this.e10(url, data, sync, callback);
            }
        }
    }
    b10(data, sync, callback) {
        if (!data) {
            return;
        }
        l2.info(`bugly do upload, type: ${data.w6}, event: ${data.eventName}`);
        this.l10(data, sync, callback);
    }
}
