import hilog from '@ohos.hilog';
import { LogLevel } from "../../c/d/LogLevel";
export class n24 {
    z15(o25, tag, filename, p25, line, pid, tid, q25, log) {
        hilog.info(n24.domain, tag, n24.format, log);
    }
    u15(l25, tag, filename, m25, line, pid, tid, n25, log) {
        hilog.info(n24.domain, tag, n24.format, log);
    }
    a16(i25, tag, filename, j25, line, pid, tid, k25, log) {
        hilog.debug(n24.domain, tag, n24.format, log);
    }
    b16(f25, tag, filename, g25, line, pid, tid, h25, log) {
        hilog.warn(n24.domain, tag, n24.format, log);
    }
    o15(c25, tag, filename, d25, line, pid, tid, e25, log) {
        hilog.error(n24.domain, tag, n24.format, log);
    }
    c16(z24, tag, filename, a25, line, pid, tid, b25, log) {
        hilog.fatal(n24.domain, tag, n24.format, log);
    }
    getLogLevel(y24) {
        return n24.level;
    }
    setLogLevel(x24, level) {
        n24.level = level;
    }
    setAppenderMode(w24, mode) {
    }
    w15(v24) {
        return 0;
    }
    getXlogInstance(namePrefix) {
        return 0;
    }
    releaseXlogInstance(namePrefix) {
    }
    appenderOpen(u24) {
    }
    appenderClose() {
    }
    appenderFlush(t24, isSync) {
    }
    setConsoleLogOpen(r24, s24) {
    }
    setMaxFileSize(q24, maxSize) {
    }
    setMaxAliveTime(o24, p24) {
    }
}
n24.domain = 0x0000;
n24.format = '%{public}s';
n24.level = LogLevel.LEVEL_ALL;
