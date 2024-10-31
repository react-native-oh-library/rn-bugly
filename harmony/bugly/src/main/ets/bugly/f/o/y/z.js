import { l14 } from "./g2";
import http from "@ohos.net.http";
import { l2 } from "../../i/q";
import { r3 } from "../../u/w";
export class i4 extends l14 {
    constructor(url, data) {
        super();
        this.url = url;
        this.data = data;
    }
    async upload() {
        let r15 = {
            method: http.RequestMethod.POST,
            header: this.u11(),
            extraData: this.data,
            expectDataType: http.HttpDataType.OBJECT
        };
        try {
            let s15 = http.createHttp();
            let result = await s15.request(this.url, r15);
            if (result.responseCode == r3.x3) {
                return result.result;
            }
            else {
                l2.info(`simple request upload failed. response result: ${result.result.toString()}`);
                return null;
            }
        }
        catch (e) {
            l2.error(`failed to do simple request.`);
            l2.error(e);
            return null;
        }
    }
    u11() {
        let header = {
            "Content-Type": 'application/json'
        };
        return header;
    }
}
