import { l14 } from "./g2";
import http from '@ohos.net.http';
import { l21 } from "../i/b3";
import { t21 } from "../i/g3";
import { f21 } from "../x2/y2";
import * as c21 from 'libbuglydiag.so';
export class r21 extends l14 {
    constructor(url, body, appId, o22, p22) {
        super();
        this.b15 = -1;
        this.url = url;
        this.body = body;
        this.appId = appId;
        this.appKey = o22;
        this.b15 = p22;
    }
    h11() {
        let header = {
            "Content-Type": 'application/json; charset=utf-8;',
            "AppID": this.appId,
            "Signature": t21.y14(t21.z14(this.body, this.appKey, 'SHA256'))
        };
        return header;
    }
    upload() {
        try {
            let l22 = http.createHttp();
            l22.request(this.url, {
                method: http.RequestMethod.POST,
                header: this.h11(),
                extraData: this.body,
                expectDataType: http.HttpDataType.STRING
            }, (err, response) => {
                if (!err) {
                    l21.info(f21.w14, `[Post] upload url: ${this.url}`);
                    l21.info(f21.w14, `[Post] upload response: ${response.result}`);
                    if (this.b15 != -1) {
                        let n22 = response.result.toString();
                        c21.requestCallback(response.responseCode, n22, this.b15);
                    }
                }
                else {
                    l21.error(f21.w14, `[Post] upload failed, ${JSON.stringify(err)}`);
                }
            });
        }
        catch (e) {
            l21.error(f21.w14, `[Post] upload failed, ${e.name} ${e.message}\n${e.stack}`);
            return false;
        }
        return true;
    }
}
