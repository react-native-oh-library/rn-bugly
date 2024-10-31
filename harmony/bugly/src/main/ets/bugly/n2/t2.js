import * as y19 from 'libbuglynative.so';
import errorManager from "@ohos.app.ability.errorManager";
import process from '@ohos.process';
import { l2 } from "../f/i/q";
import t17 from "./m2";
export class s19 {
    constructor() {
        this.j13 = false;
    }
    static getInstance() {
        if (!s19.instance) {
            s19.instance = new s19();
        }
        return s19.instance;
    }
    k12() {
        if (this.crashListener || this.j13) {
            this.k13();
        }
        if (this.crashListener) {
            y19.initBuglyNativeHandler();
            y19.registerCppCrashArkTsCallBack(x19);
            this.l13();
        }
    }
    k13() {
        let a20 = {
            onUnhandledException(errorMsg) {
            },
            onException(b20) {
                let stack = typeof (b20.stack) === 'string' ? b20.stack : "";
                s19.getInstance().crashListener?.onCrash(s19.JS_CRASH, b20.name, b20.message, stack);
                if (!s19.getInstance().j13) {
                    let c20 = new process.ProcessManager();
                    c20.exit(0);
                }
            }
        };
        try {
            errorManager.on('error', a20);
        }
        catch (error) {
            l2.error("failed to init bugly ArkTs handler.");
            l2.error(error);
        }
    }
    l13() {
    }
}
s19.JS_CRASH = "JsCrash";
s19.CPP_CRASH = "CppCrash";
s19.APP_FREEZE = "AppFreeze";
export function x19(z19) {
    l2.info(`do cpp crash callback in arkTs, signal number: ${z19}.`);
    s19.getInstance().crashListener?.onCrash(s19.CPP_CRASH, t17.q12(z19), '', '');
}
