export class BuglyBuilder {
    constructor() {
        this.appId = '';
        this.appKey = '';
        this.appVersion = '';
        this.buildNum = '';
        this.appChannel = '';
        this.deviceId = '';
        this.userId = '';
        this.deviceModel = '';
        this.debugMode = true;
        this.initDelay = 0;
        this.platform = null;
        this.crashListener = null;
        this.enableJsCrashProtect = false;
    }
}
BuglyBuilder.PLATFORM_OA = "OA";
BuglyBuilder.PLATFORM_PRO = "PRO";
