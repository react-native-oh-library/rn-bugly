import { z28 } from "./m3";
import { w26 } from "./o3";
export declare class n24 implements z28 {
    private static readonly domain;
    private static readonly format;
    private static level;
    z15(o25: number, tag: string, filename: string, p25: string, line: number, pid: number, tid: number, q25: number, log: string): void;
    u15(l25: number, tag: string, filename: string, m25: string, line: number, pid: number, tid: number, n25: number, log: string): void;
    a16(i25: number, tag: string, filename: string, j25: string, line: number, pid: number, tid: number, k25: number, log: string): void;
    b16(f25: number, tag: string, filename: string, g25: string, line: number, pid: number, tid: number, h25: number, log: string): void;
    o15(c25: number, tag: string, filename: string, d25: string, line: number, pid: number, tid: number, e25: number, log: string): void;
    c16(z24: number, tag: string, filename: string, a25: string, line: number, pid: number, tid: number, b25: number, log: string): void;
    getLogLevel(y24: number): number;
    setLogLevel(x24: number, level: number): void;
    setAppenderMode(w24: number, mode: number): void;
    w15(v24: w26): number;
    getXlogInstance(namePrefix: string): number;
    releaseXlogInstance(namePrefix: string): void;
    appenderOpen(u24: w26): void;
    appenderClose(): void;
    appenderFlush(t24: number, isSync: boolean): void;
    setConsoleLogOpen(r24: number, s24: boolean): void;
    setMaxFileSize(q24: number, maxSize: number): void;
    setMaxAliveTime(o24: number, p24: number): void;
}
