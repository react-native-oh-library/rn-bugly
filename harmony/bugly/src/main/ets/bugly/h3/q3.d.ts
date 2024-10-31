import { w26 } from "./j3/o3";
import { ILogInstance } from './ILogInstance';
export declare class d27 implements ILogInstance {
    o16: number;
    p16: string | null;
    logDir: string;
    constructor(config: w26);
    flushLog(): void;
    f(tag: string, message: string): void;
    e(tag: string, message: string): void;
    w(tag: string, message: string): void;
    i(tag: string, message: string): void;
    d(tag: string, message: string): void;
    v(tag: string, message: string): void;
    printErrStackTrace(tag: string, error: Error, message: string): void;
    appenderFlush(): void;
    n16(): void;
    getLogLevel(): number;
    setLogLevel(d28: number): void;
    setConsoleLogOpen(b28: boolean): void;
    setMaxFileSize(z27: number): void;
    setMaxAliveTime(x27: number): void;
}
