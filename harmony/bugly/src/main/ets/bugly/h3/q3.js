import { b24 } from "./i3";
import { LogLevel } from "../c/d/LogLevel";
import process from "@ohos.process";
export class d27 {
    constructor(config) {
        this.o16 = -1;
        this.p16 = null;
        this.logDir = "";
        const q28 = b24.n15();
        if (q28) {
            this.o16 = q28.w15(config);
            this.p16 = config.namePrefix;
            this.logDir = config.logDir;
        }
    }
    flushLog() {
        this.appenderFlush();
    }
    f(tag, message) {
        const p28 = b24.n15();
        if (p28 && this.o16 != -1 && b24.getLogLevel() <= LogLevel.LEVEL_FATAL) {
            p28.c16(this.o16, tag, "", "", 0, process.pid, process.tid, process.pid, message);
        }
    }
    e(tag, message) {
        const o28 = b24.n15();
        if (o28 && this.o16 != -1 && b24.getLogLevel() <= LogLevel.LEVEL_ERROR) {
            o28.o15(this.o16, tag, "", "", 0, process.pid, process.tid, process.pid, message);
        }
    }
    w(tag, message) {
        const n28 = b24.n15();
        if (n28 && this.o16 != -1 && b24.getLogLevel() <= LogLevel.LEVEL_WARNING) {
            n28.b16(this.o16, tag, "", "", 0, process.pid, process.tid, process.pid, message);
        }
    }
    i(tag, message) {
        const m28 = b24.n15();
        if (m28 && this.o16 != -1 && b24.getLogLevel() <= LogLevel.LEVEL_INFO) {
            m28.u15(this.o16, tag, "", "", 0, process.pid, process.tid, process.pid, message);
        }
    }
    d(tag, message) {
        const l28 = b24.n15();
        if (l28 && this.o16 != -1 && b24.getLogLevel() <= LogLevel.LEVEL_DEBUG) {
            l28.a16(this.o16, tag, "", "", 0, process.pid, process.tid, process.pid, message);
        }
    }
    v(tag, message) {
        const k28 = b24.n15();
        if (k28 && this.o16 != -1 && b24.getLogLevel() <= LogLevel.LEVEL_VERBOSE) {
            k28.z15(this.o16, tag, "", "", 0, process.pid, process.tid, process.pid, message);
        }
    }
    printErrStackTrace(tag, error, message) {
        const i28 = b24.n15();
        if (i28 && this.o16 != -1 && b24.getLogLevel() <= LogLevel.LEVEL_ERROR) {
            const j28 = error.name + '\n' + error.message + '\n' + error.stack ? error.stack : "";
            i28.o15(this.o16, tag, "", "", 0, process.pid, process.tid, process.pid, message + '\n' + j28);
        }
    }
    appenderFlush() {
        const h28 = b24.n15();
        if (h28 && this.o16 != -1) {
            h28.appenderFlush(this.o16, false);
        }
    }
    n16() {
        const g28 = b24.n15();
        if (g28 && this.o16 != -1) {
            g28.appenderFlush(this.o16, true);
        }
    }
    getLogLevel() {
        const f28 = b24.n15();
        if (f28 && this.o16 != -1) {
            return f28.getLogLevel(this.o16);
        }
        return LogLevel.LEVEL_NONE;
    }
    setLogLevel(d28) {
        const e28 = b24.n15();
        if (e28 && this.o16 != -1) {
            e28.setLogLevel(this.o16, d28);
        }
    }
    setConsoleLogOpen(b28) {
        const c28 = b24.n15();
        if (c28 && this.o16 != -1) {
            c28.setConsoleLogOpen(this.o16, b28);
        }
    }
    setMaxFileSize(z27) {
        const a28 = b24.n15();
        if (a28 && this.o16 != -1) {
            a28.setMaxFileSize(this.o16, z27);
        }
    }
    setMaxAliveTime(x27) {
        const y27 = b24.n15();
        if (y27 && this.o16 != -1) {
            y27.setMaxAliveTime(this.o16, x27);
        }
    }
}
