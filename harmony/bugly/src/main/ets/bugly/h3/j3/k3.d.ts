import { w26 } from "./o3";
import { z28 } from "./m3";
export declare class c24 implements z28 {
    constructor();
    z15(t26: number, tag: string, filename: string, u26: string, line: number, pid: number, tid: number, v26: number, log: string): void;
    u15(q26: number, tag: string, filename: string, r26: string, line: number, pid: number, tid: number, s26: number, log: string): void;
    a16(n26: number, tag: string, filename: string, o26: string, line: number, pid: number, tid: number, p26: number, log: string): void;
    b16(k26: number, tag: string, filename: string, l26: string, line: number, pid: number, tid: number, m26: number, log: string): void;
    o15(h26: number, tag: string, filename: string, i26: string, line: number, pid: number, tid: number, j26: number, log: string): void;
    c16(e26: number, tag: string, filename: string, f26: string, line: number, pid: number, tid: number, g26: number, log: string): void;
    getLogLevel(d26: number): number;
    setLogLevel(c26: number, level: number): void;
    setAppenderMode(b26: number, mode: number): void;
    w15(a26: w26): number;
    getXlogInstance(namePrefix: string): number;
    releaseXlogInstance(namePrefix: string): void;
    appenderOpen(z25: w26): void;
    appenderClose(): void;
    appenderFlush(y25: number, isSync: boolean): void;
    setConsoleLogOpen(w25: number, x25: boolean): void;
    setMaxFileSize(v25: number, maxSize: number): void;
    setMaxAliveTime(t25: number, u25: number): void;
    d16(s25: w26): number;
}
