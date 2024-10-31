import { ICrashListener } from './ICrashListener';
export declare class s19 {
    static readonly JS_CRASH = "JsCrash";
    static readonly CPP_CRASH = "CppCrash";
    static readonly APP_FREEZE = "AppFreeze";
    crashListener?: ICrashListener;
    j13: boolean;
    private static instance;
    private constructor();
    static getInstance(): s19;
    k12(): void;
    private k13;
    private l13;
}
export declare function x19(z19: number): void;
