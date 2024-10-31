import { b24 } from "../h3/i3";
import { TDLogMode } from './TDLogBuilder';
import { LogLevel } from "../c/d/LogLevel";
import { c24 } from "../h3/j3/k3";
import process from "@ohos.process";
export class TDLog {
    static init(builder) {
        if (TDLog.j15) {
            b24.n15().o15(0, TDLog.p15, "", "", 0, process.pid, process.tid, process.pid, "[Logger Init] TDLog has already initted!");
            return;
        }
        if (!builder) {
            b24.n15().o15(0, TDLog.p15, "", "", 0, process.pid, process.tid, process.pid, "[Logger Init] Failed to init TDLog, builder is null or undefined.");
            return;
        }
        if (builder.logLevel < LogLevel.LEVEL_ALL || builder.logLevel > LogLevel.LEVEL_NONE) {
            b24.n15().o15(0, TDLog.p15, "", "", 0, process.pid, process.tid, process.pid, "[Logger Init] Failed to init TDLog, log level is invalid.");
            return;
        }
        if (builder.mode != TDLogMode.Async && builder.mode != TDLogMode.Sync) {
            b24.n15().o15(0, TDLog.p15, "", "", 0, process.pid, process.tid, process.pid, "[Logger Init] Failed to init TDLog, log mode is invalid.");
            return;
        }
        let e24 = new c24();
        b24.q15(e24);
        b24.r15(builder.pubKey);
        b24.setConsoleLogOpen(builder.consoleLog);
        b24.appenderOpen(builder.logLevel, builder.mode, builder.logDir, builder.namePrefix);
        b24.setMaxFileSize(builder.maxFileSize);
        b24.setMaxAliveTime(builder.maxAliveTime);
        b24.s15(builder.logDir);
        b24.t15(builder.subLogDirs);
        TDLog.j15 = true;
        b24.n15().u15(0, TDLog.p15, "", "", 0, process.pid, process.tid, process.pid, "[Logger Init] Init Bugly TDLog success!");
    }
    static getTDLogAdapter() {
        if (!TDLog.j15) {
            b24.n15().o15(0, TDLog.p15, "", "", 0, process.pid, process.tid, process.pid, "[Logger Init] Failed to get TDLog adapter, please init TDLog first.");
            return null;
        }
        return b24.v15();
    }
    static flushLog() {
        b24.appenderFlush();
    }
    static closeLog() {
        b24.appenderClose();
    }
    static getLogLevel() {
        return b24.getLogLevel();
    }
    static setLogLevel(level) {
        if (level < LogLevel.LEVEL_ALL || level > LogLevel.LEVEL_NONE) {
            b24.n15().o15(0, TDLog.p15, "", "", 0, process.pid, process.tid, process.pid, "Failed to set log level, log level is invalid.");
            return;
        }
        b24.setLogLevel(level);
    }
    static f(tag, message) {
        b24.f(tag, message);
    }
    static e(tag, message) {
        b24.e(tag, message);
    }
    static w(tag, message) {
        b24.w(tag, message);
    }
    static i(tag, message) {
        b24.i(tag, message);
    }
    static d(tag, message) {
        b24.d(tag, message);
    }
    static v(tag, message) {
        b24.v(tag, message);
    }
    static printErrStackTrace(tag, error, message) {
        b24.printErrStackTrace(tag, error, message);
    }
    static openSubLogInstance(level, mode, d24, namePrefix) {
        return b24.w15(level, mode, d24, namePrefix);
    }
    static closeSubLogInstance(namePrefix) {
        b24.x15(namePrefix);
    }
    static getSubLogInstance(namePrefix) {
        return b24.y15(namePrefix);
    }
}
TDLog.j15 = false;
TDLog.p15 = "Bugly-Logger";
