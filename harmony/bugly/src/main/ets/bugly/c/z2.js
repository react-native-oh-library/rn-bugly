import * as c21 from 'libbuglydiag.so';
import * as d21 from "./u2/v2";
import { e21 } from "./u2/w2";
import { f21 } from "./x2/y2";
import fs from '@ohos.file.fs';
export class g21 {
    constructor() {
    }
    static getInstance() {
        if (!g21.instance) {
            g21.instance = new g21();
        }
        return g21.instance;
    }
    x13() {
        this.y13();
        let params = this.z13();
        c21.initDiagnose(params);
    }
    z13() {
        let i21 = this.a14();
        let j21 = f21.getInstance();
        let params = new e21();
        params.appId = j21.appId;
        params.appKey = j21.appKey;
        params.pubKey = j21.loggerAdapter.getPubKey();
        params.logPaths = j21.loggerAdapter.getLogPaths();
        params.appBundleId = j21.appBundleId;
        params.appVersion = j21.appVersion;
        params.sdkVersion = f21.b14;
        params.deviceId = j21.deviceId;
        params.model = j21.model;
        params.osVersion = j21.osVersion;
        params.brand = j21.brand;
        params.logUploadPersistDir = i21;
        params.uploadPeriodLimit = j21.uploadPeriodLimit;
        params.uploadPeriod = j21.uploadPeriod;
        params.totalTrafficQuota = j21.totalTrafficQuota;
        params.xgTrafficQuota = j21.xgTrafficQuota;
        if (j21.c14) {
            params.whiteTags = j21.c14;
        }
        params.hostType = j21.hostType;
        return params;
    }
    a14() {
        const h21 = f21.getInstance().context?.filesDir + "/" + f21.g14;
        if (!fs.accessSync(h21)) {
            fs.mkdirSync(h21);
        }
        return h21;
    }
    y13() {
        c21.registerHttpPost(d21.h14);
        c21.registerHttpPut(d21.i14);
        c21.registerLocalDataLoad(d21.j14);
        c21.registerSaveDataToLocal(d21.k14);
        c21.registerRemoveLocalData(d21.o14);
        c21.registerHmacSha1(d21.p14);
        c21.registerZipFile(d21.zipFile);
        c21.registerDoMd5(d21.q14);
        c21.registerSetLogLevel(d21.setLogLevel);
        c21.registerResetLogColorLevel(d21.r14);
        c21.registerUploadFilesArkTsCallBack(d21.s14);
    }
}
