import { o1 } from "../f/g/l";
import u17 from "./o2";
import z17 from "./p2";
import { j2 } from "../f/o/p";
import { r19 } from "./s2";
import { g18 } from "./r2";
import { i2 } from "../f/m/n";
import { h4 } from "../f/i/x";
import { l2 } from "../f/i/q";
import { s19 } from "./t2";
export class s17 {
    constructor() {
    }
    static getInstance() {
        if (!s17.instance) {
            s17.instance = new s17();
        }
        return s17.instance;
    }
    f13(v19) {
        if (i2.getInstance().x7 && v19.a2 && v19.a2.length > 0) {
            try {
                for (const w19 of v19.a2) {
                    h4.o5(w19);
                }
            }
            catch (e) {
                l2.error("failed to delete fault log file after upload.");
                l2.error(e);
            }
        }
    }
    async init(delayTime) {
        await g18.getInstance().h13();
        await g18.getInstance().i13();
        setTimeout(() => {
            u17.k12();
            z17.k12();
            r19.getInstance().k12();
        }, delayTime);
        s19.getInstance().k12();
    }
    o12(t19) {
        if (!t19) {
            return;
        }
        j2.getInstance().w2(t19);
        if (t19.type != o1.g2) {
            this.f13(t19);
        }
    }
}
