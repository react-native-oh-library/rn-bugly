import { LogLevel } from './LogLevel';
export interface LoggerAdapter {
    setColorLevel(level: LogLevel): void;
    printDiagnoseLog(level: LogLevel, tag: string, msg: string, e: Error | null): void;
    getPubKey(): string;
    getLogPaths(): Array<string>;
}
