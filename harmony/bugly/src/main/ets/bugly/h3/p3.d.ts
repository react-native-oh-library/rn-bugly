import { LoggerAdapter } from "../c/d/LoggerAdapter";
import { LogLevel } from "../c/d/LogLevel";
export declare class b27 implements LoggerAdapter {
    setColorLevel(level: LogLevel): void;
    printDiagnoseLog(level: LogLevel, tag: string, msg: string, e: Error | null): void;
    getPubKey(): string;
    getLogPaths(): Array<string>;
}
