import { o1 } from "../../g/l";
import { v6 } from "../l1/m1";
import { Constants } from "../../u/v";
import { r3 } from "../../u/w";
import { o11 } from "../l1/w1";
import { l2 } from "../../i/q";
import fs from '@ohos.file.fs';
import { e5 } from "../../a1/c1";
import { n10 } from "../l1/s1";
import { y9 } from "../../m/q1";
import { h4 } from "../../i/x";
export class p11 {
    constructor() {
    }
    static getInstance() {
        if (!p11.instance) {
            p11.instance = new p11();
        }
        return p11.instance;
    }
    l8(e13) {
        if (!e13 || !(e13 instanceof o1)) {
            return null;
        }
        l2.info("start to assemble crash report data.");
        let f13 = new v6(v6.y8, e13.recordId, e13.appId, e13.uid ? e13.uid : '', e13.deviceId, e13.buildNum, e13.appVersion, e13.sdkVersion, e13.typeName, JSON.stringify(this.n8(e13)));
        if (e13.type != o1.g2) {
            this.z8(f13, e13);
            this.o8(f13, e13);
        }
        return f13;
    }
    o8(b13, c13) {
        if (c13.c2) {
            let d13 = new n10(n10.t8, c13.c2);
            b13.u8(d13);
        }
    }
    z8(s12, t12) {
        let u12 = new o11("log.txt", t12.s1);
        s12.a9(u12);
        let v12 = [];
        try {
            if (t12.a2 && t12.a2.length != 0) {
                let y12 = {
                    encoding: 'utf-8'
                };
                for (const z12 of t12.a2) {
                    if (h4.z4(z12)) {
                        let stat = fs.statSync(z12);
                        y12.length = stat.size;
                        let a13 = fs.readTextSync(z12, y12);
                        v12.push(a13);
                        v12.push("\n\n");
                    }
                }
            }
        }
        catch (e) {
            l2.warn("failed to get fault log file.");
            l2.error(e);
        }
        if (t12.l1) {
            t12.l1.forEach((value, key) => {
                v12.push(key);
                v12.push("\n");
                v12.push(value);
                v12.push("\n\n");
            });
        }
        if (v12 && v12.length != 0) {
            let w12 = new o11("crashInfos.txt", v12.join(''));
            s12.a9(w12);
        }
    }
    n8(q12) {
        let r12 = new Object();
        r12['base_type'] = this.p8(q12);
        r12['sub_type'] = r3.e4;
        r12['product_id'] = q12.appId;
        r12['app_key'] = q12.appKey;
        r12['event_time'] = Math.floor(q12.timestamp / 1000);
        r12['event_time_in_ms'] = q12.timestamp;
        r12['app_version'] = q12.appVersion;
        r12['app_version_mode'] = q12.f1;
        r12['sdk_version'] = q12.sdkVersion;
        r12['bundle_id'] = q12.appName;
        r12['build_number'] = q12.buildNum;
        r12['client_identify'] = q12.recordId;
        r12['launch_id'] = q12.processIdentify;
        r12['process_launch_id'] = q12.processIdentify;
        r12['platform'] = Constants.f3;
        r12['protocol_version'] = r3.w3;
        r12['app_name'] = q12.appName;
        r12['Resource'] = this.r8(q12);
        r12['Attributes'] = this.s8(q12);
        r12['Body'] = this.b9(q12);
        return r12;
    }
    r8(o12) {
        let p12 = new Object();
        p12['hardware_os'] = o12.manufacture;
        p12['os_version'] = o12.osVersion;
        p12['full_os_version'] = o12.osVersion;
        p12['model'] = o12.deviceModel;
        p12['unique_id'] = o12.deviceId;
        p12['brand'] = o12.brand;
        p12['account_id'] = o12.uid;
        p12['network_type'] = o12.networkType;
        p12['cpu_type'] = o12.arch;
        p12['arch_ver'] = o12.arch;
        p12['rom'] = o12.manufacture;
        return p12;
    }
    s8(n12) {
        let attributes = new Object();
        attributes['exp_info'] = this.c9(n12);
        attributes['biz_extend_info'] = this.d9(n12);
        attributes['component_info'] = this.e9();
        attributes['process_name'] = `${n12.processName}(${n12.pid.toString()})`;
        attributes['app_channel'] = n12.appChannel;
        attributes['app_in_foreground'] = n12.foreground;
        attributes['memory'] = this.f9(n12);
        attributes['app_start_time'] = n12.appLaunchTime;
        return attributes;
    }
    e9() {
        let j12 = y9.getInstance().e8;
        let k12 = [];
        if (j12) {
            j12.forEach((value, key) => {
                let m12 = new Object();
                m12['product_id'] = key;
                m12['version'] = value;
                k12.push(m12);
            });
        }
        return k12;
    }
    d9(g12) {
        let h12 = new Object();
        let userData = g12.b2;
        if (userData && userData.length != 0) {
            userData.forEach((value, key) => {
                h12[e5.p5 + key] = value;
            });
        }
        return h12;
    }
    f9(e12) {
        let f12 = new Object();
        f12['system_free'] = e12.z1;
        f12['system_total'] = e12.w1;
        f12['pss'] = e12.pss;
        f12['vss'] = e12.vss;
        return f12;
    }
    c9(c12) {
        let d12 = new Object();
        d12['type'] = this.g9(c12.typeName).toString();
        d12['name'] = c12.exceptionName;
        d12['message'] = c12.exceptionMsg;
        return d12;
    }
    g9(value) {
        if (value.startsWith('Js')) {
            return r3.e2;
        }
        else if (value == 'AppFreeze') {
            return r3.z3;
        }
        else if (value.startsWith('Native')) {
            return r3.y3;
        }
        else if (value == 'CatchError') {
            return r3.g2;
        }
        return -1;
    }
    b9(b12) {
        let body = new Object();
        body['stacks'] = this.h9(b12);
        body['attributed_stack'] = this.i9(b12);
        return body;
    }
    i9(z11) {
        let a12 = new Object();
        a12['call_stack'] = (!z11.u1 && z11.exceptionStack) ? z11.exceptionStack : "";
        a12['thread_name'] = z11.threadName;
        a12['thread_id'] = z11.tid.toString();
        a12['stack_frames'] = (z11.u1 && z11.t1) ? this.j9(z11) : [];
        return a12;
    }
    j9(w11) {
        let x11 = [];
        if (!w11.t1 || w11.t1.length == 0) {
            return x11;
        }
        for (const frame of w11.t1) {
            let y11 = new Object();
            y11['index'] = frame.index;
            y11['type'] = frame.pc == '' ? 'ts' : 'native';
            y11['image'] = frame.file;
            y11['frame_addr'] = frame.pc;
            y11['image_uuid'] = frame.buildId;
            y11['local_symbol'] = frame.symbol;
            y11['offset'] = frame.offset != -1 ? frame.offset : 0;
            y11['has_offset'] = frame.offset != -1;
            y11['arch'] = '';
            y11['register'] = frame.pc == '' ? '' : 'pc';
            y11['row'] = frame.row;
            y11['column'] = frame.column;
            x11.push(y11);
        }
        return x11;
    }
    h9(t11) {
        let u11 = [];
        if (t11.d2) {
            t11.d2.forEach((value, key) => {
                let stack = new Object();
                stack['call_stack'] = value;
                stack['thread_name'] = this.k9(key);
                stack['thread_id'] = this.l9(key);
                u11.push(stack);
            });
        }
        return u11;
    }
    p8(s11) {
        if (s11.type == o1.g2) {
            return r3.c4;
        }
        else if (s11.type == o1.h2) {
            return r3.b4;
        }
        else {
            return r3.a4;
        }
    }
    l9(value) {
        const r11 = value.split("#");
        return r11.length > 1 ? r11[0] : "";
    }
    k9(value) {
        const q11 = value.split("#");
        return q11.length > 1 ? q11[1] : "";
    }
}
