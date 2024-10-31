export class TDDiagBuilder {
    constructor() {
        this.appId = "";
        this.appKey = "";
        this.appVersion = "";
        this.platform = -1;
        this.xgTrafficQuota = 500 * 1024 * 1024;
    }
}
TDDiagBuilder.PLATFORM_OA = 0;
TDDiagBuilder.PLATFORM_PRO = 3;
