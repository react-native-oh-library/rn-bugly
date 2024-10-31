import { t21 } from "./g3";
import fs from '@ohos.file.fs';
export class g1 {
    static e15(context, pubKey) {
        if (pubKey == "") {
            return;
        }
        let i23 = t21.a15("MD5", pubKey);
        if (!i23) {
            return;
        }
        let j23 = t21.y14(i23);
        let k23 = context.filesDir + "/tdoslog_pubkey_hash.txt";
        let l23 = fs.openSync(k23, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE | fs.OpenMode.TRUNC);
        fs.writeSync(l23.fd, j23);
        fs.close(l23);
    }
}
