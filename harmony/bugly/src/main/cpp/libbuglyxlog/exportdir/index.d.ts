export const logWrite2: (logInstancePtr: number, level: number, tag: string, filename: string, funcName: string, line: number, pid: number, tid: number, mainTid: number, log: string) => void;
export const getLogLevel: (logInstancePtr: number) => number;
export const setLogLevel: (logInstancePtr: number,level:number) => void;
export const setAppenderMode: (logInstancePtr: number, mode: number) => void;
export const newXlogInstance: (xlogConfig: Object) => number;
export const getXlogInstance: (namePrefix: string) => number;
export const releaseXlogInstance: (namePrefix: string) => void;
export const setConsoleLogOpen: (logInstancePtr: number, isOpen: boolean) => void;
export const appenderOpen: (xlogConfig: Object) => number;
export const appenderClose: () => void;
export const appenderFlush: (logInstancePtr: number, isSync: boolean) => void;
export const setMaxFileSize: (logInstancePtr: number, maxSize: number) => void;
export const setMaxAliveTime: (logInstancePtr: number, maxTime: number) => void;

