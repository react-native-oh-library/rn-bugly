import systemDateTime from '@ohos.systemDateTime';
export class v6 {
    constructor(w13, x13, appId = '', userId = '', deviceId = '', y13 = '', appVersion = '', z13 = '', eventName = '', params = '', a14 = [], b14 = [], createTime = systemDateTime.getTime()) {
        this.w6 = w13;
        this.recordId = x13;
        this.appId = appId;
        this.userId = userId;
        this.deviceId = deviceId;
        this.buildId = y13;
        this.appVersion = appVersion;
        this.sdkVersion = z13;
        this.eventName = eventName;
        this.params = params;
        this.p9 = a14;
        this.q9 = b14;
        this.createTime = createTime;
    }
    a9(v13) {
        if (v13) {
            this.p9.push(v13);
        }
    }
    u8(zipFile) {
        if (zipFile) {
            this.q9.push(zipFile);
        }
    }
}
v6.y8 = 0;
v6.v8 = 1;
v6.m8 = 2;
