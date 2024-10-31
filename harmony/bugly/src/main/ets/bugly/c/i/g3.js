import cryptoFramework from "@ohos.security.cryptoFramework";
import buffer from "@ohos.buffer";
import { l21 } from "./b3";
import { f21 } from "../x2/y2";
export class t21 {
    static z14(c23, key, algName) {
        if (c23.length == 0 || key.length == 0) {
            l21.error(f21.w14, `Failed to do hmac, plain text or key length is 0.`);
            return new Uint8Array();
        }
        let d23 = new Uint8Array(buffer.from(key, 'utf-8').buffer);
        let e23 = { data: d23 };
        let f23 = cryptoFramework.createSymKeyGenerator('HMAC');
        let g23 = f23.convertKeySync(e23);
        let mac = cryptoFramework.createMac(algName);
        mac.initSync(g23);
        mac.updateSync({ data: new Uint8Array(buffer.from(c23, 'utf-8').buffer) });
        let h23 = mac.doFinalSync();
        return h23.data;
    }
    static a15(algName, message) {
        try {
            let md = cryptoFramework.createMd(algName);
            if (typeof message === "string") {
                md.updateSync({ data: new Uint8Array(buffer.from(message, 'utf-8').buffer) });
            }
            else {
                md.updateSync({ data: new Uint8Array(message) });
            }
            let b23 = md.digestSync();
            if (b23) {
                return b23.data;
            }
        }
        catch (e) {
            l21.error(f21.w14, `Failed to do md, ${e.name}, ${e.message}\n ${e.stack}`);
        }
        return null;
    }
    static y14(array) {
        return Array.from(array)
            .map(a23 => a23.toString(16).padStart(2, '0'))
            .join('');
    }
}
