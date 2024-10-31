import { q5 } from "../../d1/e1";
import { l2 } from "../../i/q";
import { v6 } from "../l1/m1";
import { j2 } from "../p";
import { l14 } from "./g2";
import http from '@ohos.net.http';
import { r3 } from "../../u/w";
import { n14 } from "./h2";
import { g1 } from "../../i/j";
import { n10 } from "../l1/s1";
import { j4 } from "../../a1/b1";
import { h4 } from "../../i/x";
export class e14 extends l14 {
    constructor(url, q15, sync, listener) {
        super();
        this.url = url;
        this.u10 = q15;
        this.sync = sync;
        this.listener = listener;
    }
    async d11(n15) {
        let o15 = g1.a11(this.u10.params);
        let p15 = await n14.c11(o15, n15);
        return p15.buffer;
    }
    h11(m15) {
        let header = {
            "Content-Type": 'application/json',
            "Content-Encoding": "encrypt",
            "X-ENCRYPTION-KEY": m15,
            "X-ENCRYPTION-VERSION": n14.VERSION
        };
        return header;
    }
    t11(result) {
        if (this.u10.w6 == v6.y8 || this.u10.w6 == v6.v8) {
            if (result) {
                this.j11();
            }
            else {
                this.k11();
            }
        }
        else if (this.u10.w6 == v6.m8) {
            if (result) {
                this.l11();
            }
        }
    }
    l11() {
        this.u10.q9.forEach((l15) => {
            h4.o5(l15.c10);
        });
    }
    j11() {
        if (!this.sync) {
            j2.getInstance().r10(this.u10, q5.s5);
        }
        if (this.u10.w6 == v6.y8) {
            this.n11();
        }
        this.listener?.q11();
    }
    k11() {
        if (this.sync) {
            j2.getInstance().saveData(this.u10);
        }
        else {
            j2.getInstance().r10(this.u10, q5.t5);
        }
        this.listener?.r11();
    }
    n11() {
        if (this.u10.q9 && this.u10.q9.length > 0) {
            this.u10.q9.forEach((j15) => {
                if (j15.type == n10.t8) {
                    j4.getInstance().b5(j15.c10, this.u10.recordId, this.u10.eventName);
                }
            });
        }
    }
    async upload() {
        try {
            let f15 = n14.s11();
            let g15 = http.createHttp();
            g15.request(this.url, {
                method: http.RequestMethod.POST,
                header: this.h11(f15),
                extraData: await this.d11(f15),
                expectDataType: http.HttpDataType.STRING
            }, (err, response) => {
                if (!err) {
                    l2.info(`upload url: ${this.url}`);
                    l2.info(`response result: ${response.result}`);
                    if (response.responseCode == r3.x3) {
                        l2.info(`upload Success, upload event: ${this.u10.eventName}, record id: ${this.u10.recordId}.`);
                        this.t11(true);
                    }
                    else {
                        l2.info(`upload failed, upload event: ${this.u10.eventName}, record id: ${this.u10.recordId}.`);
                        this.t11(false);
                    }
                }
                else {
                    l2.error(`json upload error: ${JSON.stringify(err)}`);
                    this.t11(false);
                }
                g15.destroy();
            });
        }
        catch (e) {
            l2.error(`json upload faileed, code: ${e.message}}`);
        }
    }
}
