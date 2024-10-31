export declare class TDLogBuilder {
    private static readonly DEFAULT_NAME_PREFIX;
    private static readonly DEFAULT_FILE_SIZE;
    private static readonly DEFAULT_ALIVE_TIME;
    logLevel: number;
    mode: number;
    logDir: string;
    namePrefix: string;
    consoleLog: boolean;
    pubKey: string;
    maxFileSize: number;
    maxAliveTime: number;
    subLogDirs: Array<string> | null;
    constructor();
}
export declare enum TDLogMode {
    Async = 0,
    Sync = 1
}
