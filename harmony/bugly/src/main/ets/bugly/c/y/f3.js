import { f21 } from "../x2/y2";
import { l21 } from "../i/b3";
import { l14 } from "./g2";
import http from '@ohos.net.http';
import * as c21 from 'libbuglydiag.so';
import { h4 } from "../i/x";
export class s21 extends l14 {
    constructor(url, path, fileName, w22, x22, y22) {
        super();
        this.url = url;
        this.path = path;
        this.fileName = fileName;
        this.c15 = w22;
        this.d15 = x22;
        this.b15 = y22;
    }
    h11() {
        const header = {};
        const u22 = this.c15.length;
        for (let v22 = 0; v22 < u22; v22++) {
            const key = this.c15[v22];
            const value = this.d15[v22];
            header[key] = value;
        }
        header["Content-Type"] = "application/octet-stream";
        let fileSize = h4.h12(this.path);
        header["Content-Length"] = fileSize.toString();
        return header;
    }
    d11() {
        let data = new Uint8Array();
        if (!h4.z4(this.path)) {
            return data;
        }
        let t22 = h4.g11(this.path);
        return t22;
    }
    upload() {
        try {
            let q22 = http.createHttp();
            q22.request(this.url, {
                method: http.RequestMethod.PUT,
                header: this.h11(),
                extraData: this.d11(),
                expectDataType: http.HttpDataType.STRING
            }, (err, response) => {
                if (!err) {
                    l21.info(f21.w14, `[Put] upload url: ${this.url}`);
                    if (this.b15 != -1) {
                        let s22 = response.result.toString();
                        c21.requestCallback(response.responseCode, s22, this.b15);
                    }
                }
                else {
                    l21.error(f21.w14, `[Put] upload failed, ${JSON.stringify(err)}`);
                }
            });
        }
        catch (e) {
            l21.error(f21.w14, `[Put] upload failed, ${e.name} ${e.message}\n${e.stack}`);
            return false;
        }
        return true;
    }
}
