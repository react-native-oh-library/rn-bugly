import { w9 } from "../n1/o1";
import { x9 } from "../n1/p1";
import util from '@ohos.util';
import bundleManager from '@ohos.bundle.bundleManager';
import { l2 } from "../i/q";
import { m2 } from "../s/t";
import appManager from '@ohos.app.ability.appManager';
import HashMap from "@ohos.util.HashMap";
import { e5 } from "../a1/c1";
import { j4 } from "../a1/b1";
import { y9 } from "./q1";
import z9 from "../../a";
export class i2 {
    constructor() {
        this.appId = "";
        this.appKey = "";
        this.appName = "";
        this.e1 = "";
        this.userId = "";
        this.deviceId = "";
        this.deviceModel = 'unknown';
        this.appVersion = "";
        this.buildNum = "0";
        this.appChannel = "";
        this.appLaunchTime = -1;
        this.debugMode = false;
        this.v7 = -1;
        this.processName = "unknown";
        this.w7 = true;
        this.b2 = new HashMap();
        this.a3 = util.generateRandomUUID();
        this.x7 = true;
    }
    static getInstance() {
        if (!i2.instance) {
            i2.instance = new i2();
        }
        return i2.instance;
    }
    y7() {
        try {
            let i10 = bundleManager.getBundleInfoForSelfSync(bundleManager.BundleFlag.GET_BUNDLE_INFO_DEFAULT);
            if (i10) {
                this.appName = i10.name;
                this.e1 = i10.name;
                this.appVersion = this.appVersion.length == 0 ? this.z7(i10) : this.appVersion;
            }
            else {
                l2.warn("failed to get bundle info, bundle info is null.");
            }
        }
        catch (e) {
            l2.error(e);
        }
        this.a8();
        this.getProcessInfo();
        e5.getInstance().f5();
        j4.getInstance().l4();
        y9.getInstance().b8();
    }
    getSdkVersion() {
        return i2.c8;
    }
    z2() {
        if (this.deviceId && this.deviceId != "") {
            return this.deviceId;
        }
        const f10 = w9.getInstance();
        const g10 = f10.getString(x9.d8, "");
        if (g10 != "") {
            return g10;
        }
        const h10 = util.generateRandomUUID();
        f10.putSync(x9.d8, h10);
        f10.commit();
        return h10;
    }
    z7(d10) {
        let appVersion = "";
        if (!d10) {
            return appVersion;
        }
        appVersion = d10.versionName.toString();
        const e10 = appVersion.split('.').length - 1;
        if (e10 < 3) {
            appVersion += '.' + d10.versionCode.toString();
        }
        l2.info(`get app version from bundle info, version: ${appVersion}`);
        return appVersion;
    }
    a8() {
        let a10 = {
            onAbilityCreate(ability) { },
            onWindowStageCreate(ability, windowStage) { },
            onWindowStageActive(ability, windowStage) { },
            onWindowStageInactive(ability, windowStage) { },
            onWindowStageDestroy(ability, windowStage) { },
            onAbilityDestroy(ability) { },
            onAbilityForeground(ability) {
                if (!i2.getInstance().w7) {
                    m2.getInstance().s2();
                }
                i2.getInstance().w7 = true;
            },
            onAbilityBackground(ability) {
                i2.getInstance().w7 = false;
            },
            onAbilityContinue(ability) { }
        };
        try {
            let b10 = this.context.getApplicationContext();
            let c10 = b10.on('abilityLifecycle', a10);
            l2.info(`register ability lifecycle success, id: ${c10}`);
        }
        catch (e) {
            l2.error(`failed to register ability lifecycle, ${e}`);
        }
    }
    async getProcessInfo() {
        try {
            const data = await appManager.getRunningProcessInformation();
            if (!data) {
                l2.warn(`getRunningProcessInformation fail, process information data is null`);
            }
            else {
                l2.info(`getRunningProcessInformation success`);
                this.v7 = data['pid'] ? data['pid'] : -1;
                this.processName = data['processName'] ? data['processName'] : "unknown";
            }
        }
        catch (e) {
            l2.warn(`getRunningProcessInformation fail`);
            l2.warn(e);
        }
    }
}
i2.c8 = z9.j;
