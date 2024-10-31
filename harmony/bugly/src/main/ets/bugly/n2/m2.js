import HashMap from "@ohos.util.HashMap";
import { q1 } from "../f/g/l";
import { DeviceInfo } from "../f/m/r";
import { i2 } from "../f/m/n";
import util from '@ohos.util';
import { Constants } from "../f/u/v";
import { l2 } from "../f/i/q";
import fs from '@ohos.file.fs';
import { e5 } from "../f/a1/c1";
import { j4 } from "../f/a1/b1";
import { g18 } from "./r2";
import { h4 } from "../f/i/x";
export default class CrashHandlerHelper {
    static y12(num) {
        return num.toString().padStart(2, '0');
    }
    static s12(o19) {
        if (o19 == null || o19 == undefined || o19.length == 0) {
            return null;
        }
        const p19 = new HashMap();
        for (const q19 of o19) {
            p19.set(`${q19['thread_name']}#${q19['tid']}`, CrashHandlerHelper.z12(q19['frames']));
        }
        return p19;
    }
    static x12(pid, l19) {
        const m19 = [];
        if (!l19 || l19.length == 0) {
            return m19;
        }
        for (const n19 of l19) {
            if (pid == n19['tid']) {
                return CrashHandlerHelper.r12(n19['frames']);
            }
        }
        return m19;
    }
    static r12(h19) {
        const i19 = [];
        let j19 = 0;
        for (const frame of h19) {
            let k19 = new q1();
            k19.index = j19;
            k19.symbol = frame['symbol'];
            k19.file = frame['file'];
            if (frame['pc'] && frame['pc'] != '') {
                k19.buildId = CrashHandlerHelper.a13(frame['buildId']);
                k19.pc = frame['pc'];
                k19.offset = frame['offset'] ? frame['offset'] : 0;
            }
            else {
                k19.row = frame['line'] ? frame['line'] : 0;
                k19.column = frame['column'] ? frame['column'] : 0;
            }
            i19.push(k19);
            j19++;
        }
        return i19;
    }
    static z12(e19) {
        const stack = [];
        let f19 = 0;
        for (const frame of e19) {
            stack.push(`#${CrashHandlerHelper.y12(f19)} `);
            if (frame['pc'] && frame['pc'] != '') {
                let g19 = CrashHandlerHelper.a13(frame['buildId']);
                if (frame['symbol'] && frame['symbol'] != '') {
                    stack.push(`pc ${frame['pc']} ${frame['file']} (${frame['symbol']}+${frame['offset']}) [::${g19}]`);
                }
                else {
                    stack.push(`pc ${frame['pc']} ${frame['file']} [::${g19}]`);
                }
            }
            else {
                stack.push(`${frame['symbol']} (${frame['file']}:${frame['line']}:${frame['column']})`);
            }
            stack.push('\n');
            f19++;
        }
        return stack.join('');
    }
    static p12(c19, eventInfo) {
        c19.timestamp = eventInfo.params['time'];
        c19.foreground = eventInfo.params['foreground'];
        c19.appName = eventInfo.params['bundle_name'];
        c19.pid = eventInfo.params['pid'];
        c19.processName = eventInfo['process_name'] ? eventInfo['process_name'] : "";
        g18.getInstance().b13(c19, eventInfo);
        CrashHandlerHelper.c13(c19);
        if (!c19.appVersion || c19.appVersion.length == 0) {
            c19.appVersion = eventInfo.params['bundle_version'];
        }
        c19.a2 = eventInfo.params['external_log'];
        let d19 = eventInfo.params['log_over_limit'];
        if (d19) {
            l2.warn("Fault log dir is over limit, fault log file may not be upload.");
        }
    }
    static c13(b19) {
        b19.deviceId = i2.getInstance().z2();
        b19.appId = i2.getInstance().appId;
        b19.appKey = i2.getInstance().appKey;
        b19.recordId = util.generateRandomUUID();
        b19.osVersion = DeviceInfo.b3();
        b19.brand = DeviceInfo.c3();
        b19.manufacture = DeviceInfo.d3();
        b19.deviceModel = i2.getInstance().deviceModel;
    }
    static t12(a19, eventInfo) {
        if (eventInfo.params['hilog']) {
            let log = eventInfo.params['hilog'];
            a19.s1 = log.join('\n');
        }
    }
    static a13(uuid) {
        if (!uuid) {
            return "";
        }
        return uuid.slice(-32);
    }
    static q12(value) {
        let z18 = "";
        switch (value) {
            case 4:
                z18 = "SIGILL";
                break;
            case 11:
                z18 = "SIGSEGV";
                break;
            case 6:
                z18 = "SIGABRT";
                break;
            case 8:
                z18 = "SIGFPE";
                break;
            case 7:
                z18 = "SIGBUS";
                break;
            case 31:
                z18 = "SIGSYS";
                break;
            case 5:
                z18 = "SIGTRAP";
                break;
            case 16:
                z18 = "SIGSTKFLT";
                break;
            default:
                z18 = "";
        }
        return z18;
    }
    static u12(x18, eventInfo) {
        let y18 = eventInfo.params[Constants.n3];
        if (!y18) {
            l2.info("bugly crash launch id do not link to app event.");
            return;
        }
        x18.processIdentify = y18;
        x18.b2 = e5.getInstance().l5(y18);
    }
    static v12(u18, eventInfo) {
        let v18 = eventInfo.params[Constants.q3];
        if (v18 && v18.length != 0) {
            let w18 = j4.getInstance().x4(v18, u18.recordId);
            if (w18) {
                u18.c2 = w18;
                l2.info(`success get and zip custom files, zip path: ${w18}`);
            }
        }
        else {
            l2.info(`custom files is empty, do not get custom file paths.`);
        }
    }
    static n12(r18) {
        if (!i2.getInstance().debugMode) {
            return;
        }
        let s18 = new Date(r18.appLaunchTime * 1000);
        let t18 = new Date(r18.timestamp);
        l2.error("#+++++++++++Record By Bugly+++++++++++#");
        l2.error(`# APP NAME: ${r18.appName}`);
        l2.error(`# APP VERSION: ${r18.appVersion}`);
        l2.error(`# SDK VERSION: ${r18.sdkVersion}`);
        l2.error(`# LAUNCH TIME: ${s18}`);
        l2.error(`# CRASH TYPE: ${r18.typeName}`);
        l2.error(`# CRASH NAME: ${r18.exceptionName}`);
        l2.error(`# CRASH TIME: ${t18}`);
        l2.error(`# PROCESS ID: ${r18.pid}`);
        l2.error(`# PROCESS NAME: ${r18.processName}`);
        l2.error(`# THREAD NAME: ${r18.threadName}`);
        l2.error(`# RECORD ID: ${r18.recordId}`);
        l2.error(`# CRASH DEVICE: ${r18.deviceModel}`);
        l2.error("# CRASH STACK: \n");
        let stack = "";
        if (r18.u1) {
            stack = CrashHandlerHelper.d13(r18.t1);
        }
        else {
            stack = r18.exceptionStack;
        }
        l2.error(stack ? stack : "FAILED TO GET STACK.");
        l2.error("#+++++++++++++++++++++++++++++++++++++#");
    }
    static w12(l18, eventInfo) {
        if (!l18.exceptionName.includes("SIGABRT")) {
            return;
        }
        try {
            let filesDir = i2.getInstance().context?.filesDir;
            if (!filesDir) {
                l2.error(`failed to get files dir, return.`);
                return;
            }
            const m18 = filesDir + "/" + Constants.h3;
            if (!fs.accessSync(m18)) {
                return;
            }
            let n18 = {
                recursion: false,
                listNum: 0,
                filter: {
                    suffix: [".txt"]
                }
            };
            let o18 = fs.listFileSync(m18, n18);
            for (let p18 = 0; p18 < o18.length; p18++) {
                let q18 = h4.e11(o18[p18]);
                if (q18 == l18.processIdentify) {
                    let filePath = m18 + "/" + o18[p18];
                    CrashHandlerHelper.e13(l18, filePath, eventInfo);
                    break;
                }
            }
        }
        catch (e) {
            l2.error(`failed to update stack for multi platform crash.`);
            l2.error(e);
        }
    }
    static d13(k18) {
        if (!k18 || k18.length <= 0) {
            return "";
        }
        let stack = [];
        for (const frame of k18) {
            stack.push(`#${CrashHandlerHelper.y12(frame.index)} `);
            if (frame.pc != '') {
                if (frame.symbol != '') {
                    stack.push(`pc ${frame.pc} ${frame.file} (${frame.symbol}+${frame.offset}) [::${frame.buildId}]`);
                }
                else {
                    stack.push(`pc ${frame.pc} ${frame.file} [::${frame.buildId}]`);
                }
            }
            else {
                stack.push(`${frame.symbol} (${frame.file}:${frame.row}:${frame.column})`);
            }
            stack.push('\n');
        }
        return stack.join('');
    }
    static e13(h18, fileName, eventInfo) {
        let record = h4.m5(fileName);
        if (record == null) {
            l2.error("related error record is null, just return.");
            return;
        }
        let i18 = JSON.parse(record);
        const name = i18['name'];
        const message = i18['message'];
        const stack = i18['stack'];
        const j18 = `Multi-platform Stack:\n${stack}\n\n`
            + `Original Stack:\n${CrashHandlerHelper.q12(h18.signo)}\n${eventInfo.params['exception']['message']}\n`
            + CrashHandlerHelper.z12(eventInfo.params['exception']['frames']);
        h18.u1 = false;
        h18.t1 = null;
        h18.exceptionStack = j18;
        h18.exceptionName = name;
        h18.exceptionMsg = message;
    }
}
