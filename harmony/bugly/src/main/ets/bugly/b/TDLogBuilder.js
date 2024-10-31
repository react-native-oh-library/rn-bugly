import { LogLevel } from "../c/d/LogLevel";
export class TDLogBuilder {
    constructor() {
        this.logLevel = LogLevel.LEVEL_ALL;
        this.mode = TDLogMode.Async;
        this.logDir = "";
        this.namePrefix = TDLogBuilder.DEFAULT_NAME_PREFIX;
        this.consoleLog = false;
        this.pubKey = "";
        this.maxFileSize = TDLogBuilder.DEFAULT_FILE_SIZE;
        this.maxAliveTime = TDLogBuilder.DEFAULT_ALIVE_TIME;
        this.subLogDirs = null;
    }
}
TDLogBuilder.DEFAULT_NAME_PREFIX = "TDLog";
TDLogBuilder.DEFAULT_FILE_SIZE = 50 * 1024 * 1024;
TDLogBuilder.DEFAULT_ALIVE_TIME = 7 * 24 * 60 * 60;
export var TDLogMode;
(function (TDLogMode) {
    TDLogMode[TDLogMode["Async"] = 0] = "Async";
    TDLogMode[TDLogMode["Sync"] = 1] = "Sync";
})(TDLogMode || (TDLogMode = {}));
