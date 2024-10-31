import { g24, CompressLevel, f24 } from "./l3";
import { LogLevel } from "../../c/d/LogLevel";
export class w26 {
    constructor(level = LogLevel.LEVEL_INFO, mode = f24.Async, x26 = "", namePrefix = "", pubKey = "", y26 = g24.ZLIB, z26 = CompressLevel.ZSTD_COMPRESS_LEVEL6, cacheDir = "", a27 = w26.e16) {
        this.level = level;
        this.mode = mode;
        this.logDir = x26;
        this.namePrefix = namePrefix;
        this.pubKey = pubKey;
        this.compressMode = y26;
        this.compressLevel = z26;
        this.cacheDir = cacheDir;
        this.cacheDays = a27;
    }
}
w26.e16 = 0;
