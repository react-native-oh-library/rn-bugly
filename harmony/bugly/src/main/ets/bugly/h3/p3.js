import { LogLevel } from "../c/d/LogLevel";
import { b24 } from "./i3";
import process from '@ohos.process';
export class b27 {
    setColorLevel(level) {
        b24.setLogLevel(level);
    }
    printDiagnoseLog(level, tag, msg, e) {
        switch (level) {
            case LogLevel.LEVEL_VERBOSE:
                b24.n15().z15(0, tag, "", "", 0, process.pid, process.tid, process.pid, msg);
                break;
            case LogLevel.LEVEL_INFO:
                b24.n15().u15(0, tag, "", "", 0, process.pid, process.tid, process.pid, msg);
                break;
            case LogLevel.LEVEL_WARNING:
                b24.n15().b16(0, tag, "", "", 0, process.pid, process.tid, process.pid, msg);
                break;
            case LogLevel.LEVEL_ERROR:
                if (e) {
                    b24.n15().o15(0, tag, "", "", 0, process.pid, process.tid, process.pid, `${msg}\n${e.name}\n${e.message}\n${e.stack}`);
                }
                else {
                    b24.n15().o15(0, tag, "", "", 0, process.pid, process.tid, process.pid, msg);
                }
                break;
            default:
                b24.n15().u15(0, tag, "", "", 0, process.pid, process.tid, process.pid, msg);
        }
    }
    getPubKey() {
        return b24.getPubKey();
    }
    getLogPaths() {
        let c27 = new Array();
        c27.push(b24.f16());
        if (b24.g16()) {
            for (const path of b24.g16()) {
                c27.push(path);
            }
        }
        return c27;
    }
}
