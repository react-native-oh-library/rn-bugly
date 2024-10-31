import * as c21 from 'libbuglydiag.so';
import z9 from "../../a";
import connection from "@ohos.net.connection";
import { l21 } from "../i/b3";
import { k21 } from "./a3";
export class f21 {
    constructor() {
        this.hostType = 0;
        this.u14 = "";
        this.appId = "";
        this.appKey = "";
        this.appVersion = "";
        this.uploadPeriodLimit = 2;
        this.uploadPeriod = 5 * 60;
        this.totalTrafficQuota = 500 * 1024 * 1024;
        this.xgTrafficQuota = 500 * 1024 * 1024;
        this.appBundleId = "";
        this.model = "";
        this.osVersion = "";
        this.brand = "";
        this.deviceId = "";
    }
    static getInstance() {
        if (!f21.instance) {
            f21.instance = new f21();
        }
        return f21.instance;
    }
    getGuid() {
        return this.u14;
    }
    setGuid(p21) {
        this.u14 = p21;
        c21.setGuid(p21);
    }
    v14() {
        let m21 = connection.createNetConnection();
        m21.register((error) => {
            if (error) {
                l21.error(f21.w14, `register network listener error, ${JSON.stringify(error)}`);
            }
        });
        m21.on('netCapabilitiesChange', (data) => {
            this.x14(data.netCap);
        });
    }
    x14(netCapabilities) {
        let bearerTypes = netCapabilities["bearerTypes"];
        if (bearerTypes.length > 0) {
            let type = bearerTypes[0];
            if (type == connection.NetBearType.BEARER_WIFI) {
                l21.info(f21.w14, "set network type: WIFI.");
                c21.setNetworkType(k21.WIFI);
            }
            else {
                l21.info(f21.w14, "set network type: 4G.");
                c21.setNetworkType(k21.t14);
            }
        }
        else {
            l21.error(f21.w14, "set network type error, bearer type length is 0.");
        }
    }
}
f21.w14 = "Bugly-Diagnose";
f21.b14 = z9.j;
f21.g14 = "TDDiag_Upload_Persist";
