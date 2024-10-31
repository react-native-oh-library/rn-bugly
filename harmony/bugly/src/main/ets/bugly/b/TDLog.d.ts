import { TDLogBuilder } from './TDLogBuilder';
import { LoggerAdapter } from "../c/d/LoggerAdapter";
import { ILogInstance } from "../h3/ILogInstance";
export declare class TDLog {
    private static j15;
    static readonly p15: string;
    static init(builder: TDLogBuilder): void;
    static getTDLogAdapter(): LoggerAdapter | null;
    static flushLog(): void;
    static closeLog(): void;
    static getLogLevel(): number;
    static setLogLevel(level: number): void;
    static f(tag: string, message: string): void;
    static e(tag: string, message: string): void;
    static w(tag: string, message: string): void;
    static i(tag: string, message: string): void;
    static d(tag: string, message: string): void;
    static v(tag: string, message: string): void;
    static printErrStackTrace(tag: string, error: Error, message: string): void;
    static openSubLogInstance(level: number, mode: number, d24: string, namePrefix: string): ILogInstance;
    static closeSubLogInstance(namePrefix: string): void;
    static getSubLogInstance(namePrefix: string): ILogInstance | null;
}
