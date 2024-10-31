import { h1 } from "../../g/k";
import { l2 } from "../../i/q";
import { v6 } from "../l1/m1";
import { Constants } from "../../u/v";
import { r3 } from "../../u/w";
import { y9 } from "../../m/q1";
export class b11 {
    constructor() { }
    static getInstance() {
        if (b11.instance == null) {
            b11.instance = new b11();
        }
        return b11.instance;
    }
    l8(m11) {
        if (!m11 || !(m11 instanceof h1)) {
            return null;
        }
        l2.info("start to assemble connect report data.");
        let n11 = new v6(v6.v8, m11.recordId, m11.appId, m11.uid ? m11.uid : "", m11.deviceId, m11.buildNum, m11.appVersion, m11.sdkVersion, h1.n1, JSON.stringify(this.n8(m11)));
        return n11;
    }
    n8(k11) {
        let l11 = new Object();
        l11['base_type'] = r3.d4;
        l11['sub_type'] = r3.g4;
        l11['product_id'] = k11.appId;
        l11['app_key'] = k11.appKey;
        l11['event_time'] = k11.timestamp;
        l11['platform'] = Constants.f3;
        l11['app_version'] = k11.appVersion;
        l11['sdk_version'] = k11.sdkVersion;
        l11['bundle_id'] = k11.appName;
        l11['build_number'] = k11.buildNum;
        l11['client_identify'] = k11.recordId;
        l11['launch_id'] = k11.processIdentify;
        l11['process_launch_id'] = k11.processIdentify;
        l11['Resource'] = this.r8(k11);
        l11['Attributes'] = this.s8(k11);
        return l11;
    }
    r8(j11) {
        let resource = new Object();
        resource['hardware_os'] = j11.manufacture;
        resource['os_version'] = j11.osVersion;
        resource['full_os_version'] = j11.osVersion;
        resource['model'] = j11.deviceModel;
        resource['unique_id'] = j11.deviceId;
        resource['brand'] = j11.brand;
        resource['account_id'] = j11.uid;
        resource['network_type'] = j11.networkType;
        resource['cpu_type'] = j11.arch;
        resource['arch_ver'] = j11.arch;
        resource['rom'] = j11.manufacture;
        return resource;
    }
    s8(i11) {
        let attributes = new Object;
        attributes['first_report'] = i11.j1;
        attributes['sBuffer'] = this.w8(i11);
        return attributes;
    }
    w8(g11) {
        let h11 = new Object();
        h11['type'] = g11.j1 ? 1 : 0;
        h11['deviceId'] = g11.deviceId;
        h11['valueMap'] = this.x8();
        return h11;
    }
    x8() {
        let c11 = new Object();
        let d11 = y9.getInstance().e8;
        let e11 = [];
        if (d11) {
            try {
                d11.forEach((value, key) => {
                    e11.push("[");
                    e11.push(key);
                    e11.push(",");
                    e11.push(value);
                    e11.push("] ");
                });
            }
            catch (e) {
                l2.error(`failed to build sdk info.`);
                l2.error(e);
            }
            c11['C04_SDK_INFO'] = e11.join('');
        }
        return c11;
    }
}
