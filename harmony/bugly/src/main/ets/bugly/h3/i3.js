import { n24 } from "./j3/n3";
import { w26 } from "./j3/o3";
import { LogLevel } from "../c/d/LogLevel";
import HashMap from "@ohos.util.HashMap";
import process from "@ohos.process";
import { d27 } from "./q3";
import { b27 } from "./p3";
export class b24 {
    static t15(w27) {
        b24.subLogDirs = w27;
    }
    static g16() {
        return b24.subLogDirs;
    }
    static v15() {
        if (!b24.j12) {
            b24.j12 = new b27();
        }
        return b24.j12;
    }
    static h16() {
        return b24.j16;
    }
    static k16() {
        return b24.consoleLog;
    }
    static s15(dir) {
        b24.logDir = dir;
    }
    static f16() {
        return b24.logDir;
    }
    static l16(dir) {
        b24.cacheDir = dir;
    }
    static getCacheDir() {
        return b24.cacheDir;
    }
    static r15(key) {
        b24.pubKey = key;
    }
    static getPubKey() {
        return b24.pubKey;
    }
    static q15(v27) {
        b24.m16 = v27;
    }
    static n15() {
        return b24.m16;
    }
    static setMaxFileSize(u27) {
        if (b24.m16) {
            b24.maxFileSize = u27;
            b24.m16.setMaxFileSize(0, u27);
        }
    }
    static setMaxAliveTime(t27) {
        if (b24.m16) {
            b24.maxAliveTime = t27;
            b24.m16.setMaxAliveTime(0, t27);
        }
    }
    static appenderOpen(level, mode, s27, namePrefix) {
        if (b24.m16) {
            const config = new w26();
            config.level = level;
            config.mode = mode;
            config.logDir = s27;
            config.namePrefix = namePrefix;
            config.pubKey = b24.pubKey;
            config.cacheDir = b24.cacheDir;
            config.cacheDays = b24.e16;
            b24.m16.appenderOpen(config);
        }
    }
    static appenderClose() {
        if (b24.m16) {
            b24.m16.appenderClose();
            for (const namePrefix of b24.j16.keys()) {
                b24.x15(namePrefix);
            }
        }
    }
    static appenderFlush() {
        if (b24.m16) {
            b24.m16.appenderFlush(0, false);
            for (const namePrefix of b24.j16.keys()) {
                const r27 = b24.j16.get(namePrefix);
                r27.appenderFlush();
            }
        }
    }
    static n16(isSync) {
        if (b24.m16) {
            b24.m16.appenderFlush(0, isSync);
        }
    }
    static getLogLevel() {
        if (b24.m16) {
            return b24.m16.getLogLevel(0);
        }
        return LogLevel.LEVEL_NONE;
    }
    static setLogLevel(level) {
        if (b24.m16) {
            b24.m16.setLogLevel(0, level);
        }
        for (const namePrefix of b24.j16.keys()) {
            const q27 = b24.j16.get(namePrefix);
            q27.setLogLevel(level);
        }
    }
    static setConsoleLogOpen(p27) {
        b24.consoleLog = p27;
        if (b24.m16) {
            b24.m16.setConsoleLogOpen(0, p27);
        }
    }
    static f(tag, message) {
        const o27 = b24.n15();
        if (o27 && b24.getLogLevel() <= LogLevel.LEVEL_FATAL) {
            o27.c16(0, tag, "", "", 0, process.pid, process.tid, process.pid, message);
        }
    }
    static e(tag, message) {
        const n27 = b24.n15();
        if (n27 && b24.getLogLevel() <= LogLevel.LEVEL_ERROR) {
            n27.o15(0, tag, "", "", 0, process.pid, process.tid, process.pid, message);
        }
    }
    static w(tag, message) {
        const m27 = b24.n15();
        if (m27 && b24.getLogLevel() <= LogLevel.LEVEL_WARNING) {
            m27.b16(0, tag, "", "", 0, process.pid, process.tid, process.pid, message);
        }
    }
    static i(tag, message) {
        const l27 = b24.n15();
        if (l27 && b24.getLogLevel() <= LogLevel.LEVEL_INFO) {
            l27.u15(0, tag, "", "", 0, process.pid, process.tid, process.pid, message);
        }
    }
    static d(tag, message) {
        const k27 = b24.n15();
        if (k27 && b24.getLogLevel() <= LogLevel.LEVEL_DEBUG) {
            k27.a16(0, tag, "", "", 0, process.pid, process.tid, process.pid, message);
        }
    }
    static v(tag, message) {
        const j27 = b24.n15();
        if (j27 && b24.getLogLevel() <= LogLevel.LEVEL_VERBOSE) {
            j27.z15(0, tag, "", "", 0, process.pid, process.tid, process.pid, message);
        }
    }
    static printErrStackTrace(tag, error, message) {
        const h27 = b24.n15();
        if (h27 && b24.getLogLevel() <= LogLevel.LEVEL_ERROR) {
            const i27 = error.name + '\n' + error.message + '\n' + error.stack ? error.stack : "";
            h27.o15(0, tag, "", "", 0, process.pid, process.tid, process.pid, message + '\n' + i27);
        }
    }
    static w15(level, mode, f27, namePrefix) {
        if (b24.j16.hasKey(namePrefix)) {
            return b24.j16.get(namePrefix);
        }
        const config = new w26();
        config.level = level;
        config.mode = mode;
        config.logDir = f27;
        config.namePrefix = namePrefix;
        config.pubKey = b24.pubKey;
        config.cacheDir = b24.cacheDir;
        config.cacheDays = b24.e16;
        let g27 = new d27(config);
        b24.j16.set(namePrefix, g27);
        g27.setConsoleLogOpen(b24.k16());
        g27.setMaxFileSize(b24.maxFileSize);
        g27.setMaxAliveTime(b24.maxAliveTime);
        return g27;
    }
    static x15(prefix) {
        if (b24.m16) {
            if (b24.j16.hasKey(prefix)) {
                let e27 = b24.j16.remove(prefix);
                b24.m16.releaseXlogInstance(prefix);
                e27.o16 = -1;
            }
        }
    }
    static y15(prefix) {
        if (b24.j16.hasKey(prefix)) {
            return b24.j16.get(prefix);
        }
        return null;
    }
}
b24.e16 = 0;
b24.logDir = "";
b24.cacheDir = "";
b24.pubKey = "";
b24.consoleLog = false;
b24.maxFileSize = 50 * 1024 * 1024;
b24.maxAliveTime = 7 * 24 * 60 * 60;
b24.subLogDirs = null;
b24.m16 = new n24();
b24.j16 = new HashMap();
