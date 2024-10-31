import cryptoFramework from '@ohos.security.cryptoFramework';
import util from '@ohos.util';
import buffer from '@ohos.buffer';
export class n14 {
    static s11() {
        let key = util.generateRandomUUID();
        if (key) {
            key = key.replace(/-/g, "");
            return key;
        }
        return "";
    }
    static async c11(requestData, key) {
        let a16 = { data: requestData };
        let b16 = await n14.v11(key);
        let c16 = await n14.w11(b16);
        let iv = b16.slice(0, n14.x11);
        let d16 = n14.y11(iv);
        let e16 = cryptoFramework.createCipher('AES256|CBC|PKCS5');
        await e16.init(cryptoFramework.CryptoMode.ENCRYPT_MODE, c16, d16);
        let f16 = await e16.doFinal(a16);
        return f16.data;
    }
    static async v11(key) {
        let md = cryptoFramework.createMd('SHA256');
        await md.update({ data: new Uint8Array(buffer.from(key, 'utf-8').buffer) });
        let z15 = await md.digest();
        return Promise.resolve(z15.data);
    }
    static y11(iv) {
        let x15 = { data: iv };
        let y15 = {
            algName: "IvParamsSpec",
            iv: x15
        };
        return y15;
    }
    static async w11(t15) {
        let u15 = { data: t15 };
        let v15 = cryptoFramework.createSymKeyGenerator('AES256');
        let w15 = await v15.convertKey(u15);
        return w15;
    }
}
n14.VERSION = "v1";
n14.x11 = 16;
