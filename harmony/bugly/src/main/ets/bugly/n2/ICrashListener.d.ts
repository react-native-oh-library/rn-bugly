export interface ICrashListener {
    onCrash(crashType: string, crashName: string, crashMsg: string, crashStack: string): void;
}
