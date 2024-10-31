import { u } from "../../g/h";
import { Constants } from "../../u/v";
import { r3 } from "../../u/w";
import { l2 } from "../../i/q";
import { v6 } from "../l1/m1";
import { n10 } from "../l1/s1";
export class o10 {
    constructor() {
    }
    static getInstance() {
        if (!o10.instance) {
            o10.instance = new o10();
        }
        return o10.instance;
    }
    l8(z10) {
        if (!z10 || !(z10 instanceof u)) {
            return null;
        }
        l2.info("start to assemble attachment report data.");
        let a11 = new v6(v6.m8, z10.recordId, z10.appId, z10.uid ? z10.uid : "", z10.deviceId, z10.buildNum, z10.appVersion, z10.sdkVersion, Constants.l3, JSON.stringify(this.n8(z10)));
        this.o8(a11, z10);
        return a11;
    }
    n8(x10) {
        let y10 = new Object();
        y10['base_type'] = this.p8(x10);
        y10['sub_type'] = this.q8(x10);
        y10['product_id'] = x10.appId;
        y10['app_key'] = x10.appKey;
        y10['event_time'] = Math.floor(x10.timestamp / 1000);
        y10['event_time_in_ms'] = x10.timestamp;
        y10['app_version'] = x10.appVersion;
        y10['app_version_mode'] = x10.f1;
        y10['sdk_version'] = x10.sdkVersion;
        y10['bundle_id'] = x10.appName;
        y10['build_number'] = x10.buildNum;
        y10['client_identify'] = x10.recordId;
        y10['platform'] = Constants.f3;
        y10['launch_id'] = x10.b1;
        y10['process_launch_id'] = x10.b1;
        y10['protocol_version'] = r3.w3;
        y10['Resource'] = this.r8(x10);
        y10['Attributes'] = this.s8(x10);
        return y10;
    }
    s8(w10) {
        let attributes = new Object();
        attributes['token'] = w10.token;
        return attributes;
    }
    r8(u10) {
        let v10 = new Object();
        v10['hardware_os'] = u10.manufacture;
        v10['os_version'] = u10.osVersion;
        v10['full_os_version'] = u10.osVersion;
        v10['model'] = u10.deviceModel;
        v10['unique_id'] = u10.deviceId;
        v10['brand'] = u10.brand;
        v10['account_id'] = u10.uid;
        return v10;
    }
    p8(t10) {
        if (t10.a1 == Constants.j3) {
            return r3.b4;
        }
        else if (t10.a1 == Constants.i3) {
            return r3.c4;
        }
        else {
            return r3.a4;
        }
    }
    q8(s10) {
        if (s10.type == u.d1) {
            return r3.f4;
        }
        else {
            return "";
        }
    }
    o8(p10, q10) {
        if (q10.filePath) {
            if (q10.type == u.d1) {
                let r10 = new n10(n10.t8, q10.filePath);
                p10.u8(r10);
            }
        }
    }
}
