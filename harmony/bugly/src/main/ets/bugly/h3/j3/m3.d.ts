import { w26 } from "./o3";
export interface z28 {
    z15(logInstancePtr: number, tag: string, filename: string, funcName: string, line: number, pid: number, tid: number, mainTid: number, log: string): void;
    u15(logInstancePtr: number, tag: string, filename: string, funcName: string, line: number, pid: number, tid: number, mainTid: number, log: string): void;
    a16(logInstancePtr: number, tag: string, filename: string, funcName: string, line: number, pid: number, tid: number, mainTid: number, log: string): void;
    b16(logInstancePtr: number, tag: string, filename: string, funcName: string, line: number, pid: number, tid: number, mainTid: number, log: string): void;
    o15(logInstancePtr: number, tag: string, filename: string, funcName: string, line: number, pid: number, tid: number, mainTid: number, log: string): void;
    c16(logInstancePtr: number, tag: string, filename: string, funcName: string, line: number, pid: number, tid: number, mainTid: number, log: string): void;
    getLogLevel(logInstancePtr: number): number;
    setLogLevel(logInstancePtr: number, level: number): void;
    setAppenderMode(logInstancePtr: number, mode: number): void;
    w15(xlogConfig: w26): number;
    getXlogInstance(namePrefix: string): number;
    releaseXlogInstance(namePrefix: string): void;
    appenderOpen(xlogConfig: w26): void;
    appenderClose(): void;
    appenderFlush(logInstancePtr: number, isSync: boolean): void;
    setConsoleLogOpen(logInstancePtr: number, isOpen: boolean): void;
    setMaxFileSize(logInstancePtr: number, maxSize: number): void;
    setMaxAliveTime(logInstancePtr: number, maxTime: number): void;
}
