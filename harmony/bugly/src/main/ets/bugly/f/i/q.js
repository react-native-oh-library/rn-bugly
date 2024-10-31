import { r17 } from "./i2/j2";
export class l2 {
    static debug(arg) {
        if (!l2.i12) {
            return;
        }
        l2.j12.debug(arg);
    }
    static info(arg) {
        if (!l2.i12) {
            return;
        }
        l2.j12.info(arg);
    }
    static warn(arg) {
        if (arg instanceof Error) {
            l2.j12.warn(arg.name);
            l2.j12.warn(arg.message);
            if (arg.stack) {
                l2.j12.warn(arg.stack);
            }
        }
        else {
            l2.j12.warn(arg);
        }
    }
    static error(arg) {
        if (arg instanceof Error) {
            l2.j12.error(arg.name);
            l2.j12.error(arg.message);
            if (arg.stack) {
                l2.j12.error(arg.stack);
            }
        }
        else {
            l2.j12.error(arg);
        }
    }
    static fatal(arg) {
        if (arg instanceof Error) {
            l2.j12.fatal(arg.name);
            l2.j12.fatal(arg.message);
            if (arg.stack) {
                l2.j12.fatal(arg.stack);
            }
        }
        else {
            l2.j12.fatal(arg);
        }
    }
}
l2.i12 = false;
l2.j12 = new r17();
