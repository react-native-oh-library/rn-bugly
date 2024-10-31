export interface ILogInstance {
    f(tag: string, message: string): void;
    e(tag: string, message: string): void;
    w(tag: string, message: string): void;
    i(tag: string, message: string): void;
    d(tag: string, message: string): void;
    v(tag: string, message: string): void;
    printErrStackTrace(tag: string, error: Error, message: string): void;
    flushLog(): void;
    getLogLevel(): number;
    setLogLevel(level: number): void;
    setConsoleLogOpen(isOpen: boolean): void;
    setMaxFileSize(maxFileSize: number): void;
    setMaxAliveTime(maxAliveTime: number): void;
}
