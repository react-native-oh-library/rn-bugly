import * as r25 from 'libbuglyxlog.so';
import { LogLevel } from "../../c/d/LogLevel";
export class c24 {
    constructor() {
    }
    z15(t26, tag, filename, u26, line, pid, tid, v26, log) {
        r25.logWrite2(t26, LogLevel.LEVEL_VERBOSE, tag, filename, u26, line, pid, tid, v26, log);
    }
    u15(q26, tag, filename, r26, line, pid, tid, s26, log) {
        r25.logWrite2(q26, LogLevel.LEVEL_INFO, tag, filename, r26, line, pid, tid, s26, log);
    }
    a16(n26, tag, filename, o26, line, pid, tid, p26, log) {
        r25.logWrite2(n26, LogLevel.LEVEL_DEBUG, tag, filename, o26, line, pid, tid, p26, log);
    }
    b16(k26, tag, filename, l26, line, pid, tid, m26, log) {
        r25.logWrite2(k26, LogLevel.LEVEL_WARNING, tag, filename, l26, line, pid, tid, m26, log);
    }
    o15(h26, tag, filename, i26, line, pid, tid, j26, log) {
        r25.logWrite2(h26, LogLevel.LEVEL_ERROR, tag, filename, i26, line, pid, tid, j26, log);
    }
    c16(e26, tag, filename, f26, line, pid, tid, g26, log) {
        r25.logWrite2(e26, LogLevel.LEVEL_FATAL, tag, filename, f26, line, pid, tid, g26, log);
    }
    getLogLevel(d26) {
        return r25.getLogLevel(d26);
    }
    setLogLevel(c26, level) {
        r25.setLogLevel(c26, level);
    }
    setAppenderMode(b26, mode) {
        r25.setAppenderMode(b26, mode);
    }
    w15(a26) {
        return this.d16(a26);
    }
    getXlogInstance(namePrefix) {
        return r25.getXlogInstance(namePrefix);
    }
    releaseXlogInstance(namePrefix) {
        r25.releaseXlogInstance(namePrefix);
    }
    appenderOpen(z25) {
        r25.appenderOpen(z25);
    }
    appenderClose() {
        r25.appenderClose();
    }
    appenderFlush(y25, isSync) {
        r25.appenderFlush(y25, isSync);
    }
    setConsoleLogOpen(w25, x25) {
        r25.setConsoleLogOpen(w25, x25);
    }
    setMaxFileSize(v25, maxSize) {
        r25.setMaxFileSize(v25, maxSize);
    }
    setMaxAliveTime(t25, u25) {
        r25.setMaxAliveTime(t25, u25);
    }
    d16(s25) {
        return r25.newXlogInstance(s25);
    }
}
