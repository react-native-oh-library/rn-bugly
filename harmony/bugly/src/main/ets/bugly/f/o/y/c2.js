import { l2 } from "../../i/q";
import { v6 } from "../l1/m1";
import { l14 } from "./g2";
import { j2 } from "../p";
import http from '@ohos.net.http';
import { r3 } from "../../u/w";
import { g1 } from "../../i/j";
import { q5 } from "../../d1/e1";
import { n14 } from "./h2";
import { n10 } from "../l1/s1";
import { j4 } from "../../a1/b1";
import { h4 } from "../../i/x";
export class d14 extends l14 {
    constructor(url, e15, sync, listener) {
        super();
        this.t10 = "27182818284590452353602874713526";
        this.url = url;
        this.u10 = e15;
        this.sync = sync;
        this.listener = listener;
    }
    v10() {
        return '\r\n';
    }
    w10(fileName) {
        return `Content-Disposition: form-data; name="_file"; filename="${fileName}"\r\n`;
    }
    x10() {
        return `Content-Disposition: form-data; name="_json"\r\n`;
    }
    y10(d15) {
        const buffer = [];
        buffer.push("--");
        buffer.push(this.t10);
        if (d15) {
            buffer.push("--\r\n");
        }
        else {
            buffer.push("\r\n");
        }
        return buffer.join('');
    }
    async z10(b15) {
        let c15 = g1.a11(this.u10.params);
        return await n14.c11(c15, b15);
    }
    async d11(x14) {
        let buffer = [];
        if (this.u10.p9 && this.u10.p9.length > 0) {
            for (const a15 of this.u10.p9) {
                buffer.push(g1.a11(this.y10(false)));
                buffer.push(g1.a11(this.w10(a15.fileName)));
                buffer.push(g1.a11(this.v10()));
                buffer.push(g1.a11(a15.data));
                buffer.push(g1.a11(this.v10()));
            }
        }
        else if (this.u10.w6 == v6.m8 && this.u10.q9
            && this.u10.q9.length > 0) {
            for (const z14 of this.u10.q9) {
                buffer.push(g1.a11(this.y10(false)));
                buffer.push(g1.a11(this.w10(h4.e11(z14.c10, true))));
                buffer.push(g1.a11(this.v10()));
                buffer.push(this.f11(z14.c10));
                buffer.push(g1.a11(this.v10()));
            }
        }
        buffer.push(g1.a11(this.y10(false)));
        buffer.push(g1.a11(this.x10()));
        buffer.push(g1.a11(this.v10()));
        buffer.push(await this.z10(x14));
        buffer.push(g1.a11(this.v10()));
        buffer.push(g1.a11(this.y10(true)));
        let totalLength = 0;
        for (const arr of buffer) {
            totalLength += arr.length;
        }
        const y14 = new Uint8Array(totalLength);
        let offset = 0;
        for (const arr of buffer) {
            y14.set(arr, offset);
            offset += arr.length;
        }
        return y14.buffer;
    }
    f11(path) {
        let data = new Uint8Array();
        if (!h4.z4(path)) {
            return data;
        }
        let w14 = h4.g11(path);
        if (w14) {
            data = new Uint8Array(w14);
        }
        return data;
    }
    h11(v14) {
        let header = {
            "Content-Type": `multipart/form-data;boundary=${this.t10}`,
            "Content-Encoding": "encrypt",
            "X-ENCRYPTION-KEY": v14,
            "X-ENCRYPTION-VERSION": n14.VERSION
        };
        return header;
    }
    i11(result) {
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
        this.u10.q9.forEach((u14) => {
            h4.o5(u14.c10);
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
            this.u10.q9.forEach((s14) => {
                if (s14.type == n10.t8) {
                    j4.getInstance().b5(s14.c10, this.u10.recordId, this.u10.eventName);
                }
            });
        }
    }
    async upload() {
        try {
            let o14 = n14.s11();
            let p14 = http.createHttp();
            p14.request(this.url, {
                method: http.RequestMethod.POST,
                header: this.h11(o14),
                extraData: await this.d11(o14),
                expectDataType: http.HttpDataType.STRING
            }, (err, response) => {
                if (!err) {
                    l2.info(`upload url: ${this.url}`);
                    l2.info(`response result: ${response.result}`);
                    if (response.responseCode == r3.x3) {
                        l2.info(`upload Success, upload event: ${this.u10.eventName}, record id: ${this.u10.recordId}.`);
                        this.i11(true);
                    }
                    else {
                        l2.info(`upload failed, upload event: ${this.u10.eventName}, record id: ${this.u10.recordId}.`);
                        this.i11(false);
                    }
                }
                else {
                    l2.error(`file upload error: ${JSON.stringify(err)}`);
                    this.i11(false);
                }
                p14.destroy();
            });
        }
        catch (e) {
            l2.error(`file upload failed, msg: ${e.message}, stack: ${e.stack}`);
        }
    }
}
