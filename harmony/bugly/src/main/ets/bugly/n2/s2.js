import { l2 } from "../f/i/q";
import { o1 } from "../f/g/l";
import { s17 } from "./l2";
import systemDateTime from "@ohos.systemDateTime";
import { i2 } from "../f/m/n";
import t17 from "./m2";
import process from '@ohos.process';
import { Constants } from "../f/u/v";
import fs from '@ohos.file.fs';
import HashMap from "@ohos.util.HashMap";
import { h4 } from "../f/i/x";
export class r19 {
    constructor() {
    }
    static getInstance() {
        if (!r19.instance) {
            r19.instance = new r19();
        }
        return r19.instance;
    }
    k12() {
        this.n13();
        this.o13();
    }
    n13() {
        try {
            let filesDir = i2.getInstance().context?.filesDir;
            let w20 = filesDir + "/" + Constants.g3;
            let x20 = filesDir + "/" + Constants.h3;
            if (fs.accessSync(w20)) {
                h4.s4(w20, r19.p13);
                h4.u4(w20, r19.q13);
            }
            if (fs.accessSync(x20)) {
                h4.s4(x20, r19.p13);
                h4.u4(x20, r19.q13);
            }
        }
        catch (e) {
            l2.error(`failed to check and delete over limit error file.`);
            l2.error(e);
        }
    }
    handleError(name, message, stack, u20, context) {
        let v20 = this.l12(name, message, stack);
        if (!v20) {
            l2.error("failed to handle error, package crashBean is null or undefined.");
            return;
        }
        if (u20) {
            this.r13(v20, context);
            return;
        }
        s17.getInstance().o12(v20);
    }
    l12(name, message, stack) {
        if (!name || !stack) {
            l2.warn("Failed to package error, error name or error stack is null or undefined.");
            return null;
        }
        let s20 = new o1();
        try {
            const t20 = i2.getInstance();
            s20.type = o1.g2;
            s20.typeName = Constants.i3;
            s20.sdkVersion = t20.getSdkVersion();
            s20.buildNum = t20.buildNum;
            s20.appChannel = t20.appChannel;
            s20.timestamp = systemDateTime.getTime();
            s20.foreground = t20.w7;
            s20.appVersion = t20.appVersion;
            s20.appName = t20.appName;
            s20.pid = t20.v7;
            s20.uid = t20.userId;
            s20.processName = t20.processName;
            s20.appLaunchTime = t20.appLaunchTime;
            s20.tid = process.tid;
            s20.processIdentify = t20.a3;
            t17.c13(s20);
            s20.exceptionName = name;
            s20.exceptionMsg = message;
            s20.exceptionStack = stack;
            let userData = t20.b2;
            if (userData && userData.length != 0) {
                s20.b2 = new HashMap();
                s20.b2.setAll(userData);
            }
        }
        catch (e) {
            l2.error(e);
        }
        return s20;
    }
    r13(o20, context) {
        try {
            let filesDir = i2.getInstance().context?.filesDir;
            if (!filesDir) {
                l2.warn("failed to get info manager context.");
                filesDir = context?.getApplicationContext().filesDir;
                if (!filesDir) {
                    l2.error(`failed to get files dir, return.`);
                    return;
                }
            }
            const p20 = filesDir + "/" + Constants.g3;
            const fileName = "error_" + o20.recordId;
            const filePath = p20 + "/" + fileName + ".txt";
            if (!fs.accessSync(p20)) {
                fs.mkdirSync(p20);
            }
            let q20 = fs.openSync(filePath, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE);
            let r20 = fs.writeSync(q20.fd, JSON.stringify(o20));
            l2.info(`success write error data to ${fileName}.txt, write len: ${r20}`);
            fs.closeSync(q20);
        }
        catch (e) {
            l2.error(`failed to store error data to file.`);
            l2.error(e);
        }
    }
    o13() {
        try {
            let filesDir = i2.getInstance().context?.filesDir;
            if (!filesDir) {
                l2.error(`failed to get files dir, return.`);
                return;
            }
            const i20 = filesDir + "/" + Constants.g3;
            if (!fs.accessSync(i20)) {
                return;
            }
            let j20 = {
                recursion: false,
                listNum: 0,
                filter: {
                    suffix: [".txt"]
                }
            };
            let k20 = fs.listFileSync(i20, j20);
            for (let l20 = 0; l20 < k20.length; l20++) {
                if (l20 > r19.s13) {
                    break;
                }
                const filePath = i20 + "/" + k20[l20];
                try {
                    l2.info(`find error record ${k20[l20]}, prepare to upload.`);
                    let m20 = {
                        encoding: 'utf-8'
                    };
                    let stat = fs.statSync(filePath);
                    m20.length = stat.size;
                    let n20 = fs.readTextSync(filePath, m20);
                    this.t13(n20);
                }
                catch (e) {
                    l2.warn(e);
                }
                finally {
                    fs.unlinkSync(filePath);
                }
            }
        }
        catch (e) {
            l2.error(`failed to check local file data.`);
            l2.error(e);
        }
    }
    t13(record) {
        let g20 = JSON.parse(record);
        let h20 = new o1();
        t17.c13(h20);
        h20.sdkVersion = g20["sdkVersion"];
        h20.buildNum = g20["buildNum"];
        h20.appChannel = g20["appChannel"];
        h20.timestamp = g20["timestamp"];
        h20.foreground = g20["foreground"];
        h20.appVersion = g20["appVersion"];
        h20.appName = g20["appName"];
        h20.pid = g20["pid"];
        h20.uid = g20["uid"];
        h20.processName = g20["processName"];
        h20.appLaunchTime = g20["appLaunchTime"];
        h20.tid = g20["tid"];
        h20.processIdentify = g20['processIdentify'];
        h20.recordId = g20["recordId"];
        h20.osVersion = g20["osVersion"];
        h20.deviceId = g20["deviceId"];
        h20.deviceModel = g20["deviceModel"];
        h20.brand = g20['brand'];
        h20.manufacture = g20['manufacture'];
        h20.arch = g20["arch"];
        h20.networkType = g20["networkType"];
        h20.type = g20["type"];
        h20.typeName = g20["typeName"];
        h20.threadName = g20["threadName"];
        h20.exceptionName = g20["exceptionName"];
        h20.exceptionMsg = g20["exceptionMsg"];
        h20.exceptionStack = g20["exceptionStack"];
        s17.getInstance().o12(h20);
    }
    u13(name, message, stack) {
        try {
            let filesDir = i2.getInstance().context?.filesDir;
            if (!filesDir) {
                l2.error(`failed to get files dir in record crash related error, return.`);
                return;
            }
            const d20 = filesDir + "/" + Constants.h3;
            if (!fs.accessSync(d20)) {
                fs.mkdirSync(d20);
            }
            let record = JSON.stringify({
                "name": name,
                "message": message,
                "stack": stack
            });
            const filePath = d20 + "/" + i2.getInstance().a3 + ".txt";
            let e20 = fs.openSync(filePath, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE | fs.OpenMode.TRUNC);
            let f20 = fs.writeSync(e20.fd, record);
            l2.info(`success write crash related error, write len: ${f20}`);
            fs.closeSync(e20);
        }
        catch (e) {
            l2.error(`failed to store multi platform error data to file.`);
            l2.error(e);
        }
    }
}
r19.s13 = 5;
r19.q13 = 30;
r19.p13 = 7 * 24 * 60 * 60;
