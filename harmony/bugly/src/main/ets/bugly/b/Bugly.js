import { BuglyBuilder } from './BuglyBuilder';
import { s17 } from "../n2/l2";
import { Constants } from "../f/u/v";
import { i2 } from "../f/m/n";
import { l2 } from "../f/i/q";
import { w5 } from "../f/d1/i1";
import systemDateTime from "@ohos.systemDateTime";
import { m2 } from "../f/s/t";
import { testCppCrash } from 'libbuglynative.so';
import { r19 } from "../n2/s2";
import { e5 } from "../f/a1/c1";
import { g18 } from "../n2/r2";
import { r3 } from "../f/u/w";
import { s19 } from "../n2/t2";
export class Bugly {
    static async init(context, builder) {
        if (!context) {
            l2.error(`[init] Failed to init ${Constants.e3}, context is null or undefined!`);
            return;
        }
        if (!builder) {
            l2.error(`[init] Failed to init ${Constants.e3}, builder is null or undefined!`);
            return;
        }
        if (!builder.appId || !builder.appKey) {
            l2.error(`[init] Failed to init ${Constants.e3}, appId or appKey is null or undefined!`);
            return;
        }
        if (builder.platform) {
            if (builder.platform == BuglyBuilder.PLATFORM_OA) {
                r3.v3 = r3.s3;
            }
            else if (builder.platform == BuglyBuilder.PLATFORM_PRO) {
                r3.v3 = r3.t3;
            }
            else {
                l2.error(`[init] Failed to init ${Constants.e3}, you must point valid bugly upload platform!`);
                return;
            }
        }
        else {
            l2.error(`[init] Failed to init ${Constants.e3}, you must point bugly upload platform!`);
            return;
        }
        let v23 = i2.getInstance();
        v23.context = context.getApplicationContext();
        l2.i12 = builder.debugMode;
        l2.info("--------------------------------------------------------------------------------------------");
        l2.info(`[init] Bugly ${builder.platform} ${v23.getSdkVersion()} 初始化` + ` -- Bugly ${builder.platform} ${v23.getSdkVersion()} is starting init.`);
        l2.info(`[init] Bugly 上报域名: ${r3.v3}` + ` -- Bugly upload domain: ${r3.v3}`);
        l2.info("[init] 使用前请确认Bugly版本" + " -- Please check Bugly version before start.");
        l2.info("[init] Bugly debug模式开启" + " -- Bugly running in debug model.");
        l2.info("[init] Bugly debug模式将输出详细SDK Log -- More detailed log of Bugly SDK will be output in debug model.");
        l2.info("--------------------------------------------------------------------------------------------");
        Bugly.i15(v23, builder);
        v23.y7();
        await w5.getInstance().x5(builder.initDelay);
        setTimeout(() => {
            m2.getInstance().n2();
        }, builder.initDelay);
        await s17.getInstance().init(builder.initDelay);
        Bugly.j15 = true;
        l2.info(`[init] init ${Constants.e3} success.`);
    }
    static updateDeviceId(deviceId) {
        if (!Bugly.j15) {
            l2.error(`failed to update device id, please init bugly first!`);
            return;
        }
        if (Bugly.k15(deviceId)) {
            i2.getInstance().deviceId = deviceId;
        }
    }
    static async updateUserId(userId) {
        if (!Bugly.j15) {
            l2.error(`failed to update user id, please init bugly first!`);
            return;
        }
        if (Bugly.k15(userId)) {
            i2.getInstance().userId = userId;
            await g18.getInstance().i13();
        }
    }
    static updateDeviceModel(deviceModel) {
        if (!Bugly.j15) {
            l2.error(`failed to update device model, please init bugly first!`);
            return;
        }
        if (Bugly.k15(deviceModel)) {
            i2.getInstance().deviceModel = deviceModel;
        }
    }
    static postError(e) {
        if (!Bugly.j15) {
            l2.error(`failed to post error, please init bugly first!`);
            return;
        }
        try {
            e;
            r19.getInstance().handleError(e.name, e.message, e.stack ? e.stack : "", false);
        }
        catch (e) {
            l2.error(`failed to post error, ${e}`);
        }
    }
    static postCustomError(name, message, stack, u23 = false, context) {
        r19.getInstance().handleError(name, message, stack, u23, context);
    }
    static postCrashRelatedError(name, message, stack) {
        if (!Bugly.j15) {
            l2.error(`failed to post crash related error, please init bugly first!`);
            return;
        }
        if (Bugly.l15(name) && Bugly.l15(message) && Bugly.l15(stack)) {
            r19.getInstance().u13(name, message, stack);
        }
        else {
            l2.error(`failed to post crash related error, name or message or stack is empty!`);
        }
    }
    static putUserData(key, value) {
        if (!Bugly.j15) {
            l2.error(`failed to put user data, please init bugly first!`);
            return;
        }
        if (Bugly.k15(key) && Bugly.k15(value)) {
            let userData = i2.getInstance().b2;
            if (userData) {
                userData.set(key, value);
                e5.getInstance().i5();
                l2.info(`put custom user data, key: ${key}, value: ${value}`);
            }
            else {
                l2.error(`failed to put user data, map is null or undefined.`);
            }
        }
        else {
            l2.error(`failed to put user data, key or value is null or undefined.`);
        }
    }
    static removeUserData(key) {
        if (!Bugly.j15) {
            l2.error(`failed to remove user data, please init bugly first!`);
            return;
        }
        if (Bugly.k15(key)) {
            let userData = i2.getInstance().b2;
            if (userData) {
                userData.remove(key);
                e5.getInstance().i5();
                l2.info(`remove custom user data, key:${key}`);
            }
            else {
                l2.error(`failed to remove user data, map is null or undefined.`);
            }
        }
        else {
            l2.error(`failed to remove user data, key is null or undefined.`);
        }
    }
    static clearUserData() {
        if (!Bugly.j15) {
            l2.error(`failed to clear user data, please init bugly first!`);
            return;
        }
        let userData = i2.getInstance().b2;
        if (userData) {
            userData.clear();
            e5.getInstance().i5();
            l2.info(`clear all custom user data`);
        }
        else {
            l2.error(`failed to clear user data, map is null or undefined.`);
        }
    }
    static async setCustomFilePaths(t23) {
        if (!Bugly.j15) {
            l2.error(`failed to set custom file paths, please init bugly first!`);
            return;
        }
        await g18.getInstance().w13(t23);
        l2.info(`set custom file paths: ${t23.toString()}`);
    }
    static testCrash(q23) {
        switch (q23) {
            case Bugly.JS_CRASH:
                let r23 = ['0', '1'];
                console.info(r23[3].toString());
                break;
            case Bugly.CPP_CRASH:
                testCppCrash();
                break;
            case Bugly.APP_FREEZE:
                setTimeout(() => {
                    let index = 0;
                    while (true) {
                        index++;
                        index = index % 2;
                    }
                }, 1000);
                break;
            default:
                l2.warn(`Failed to test crash, crash type ${q23} is undefined.`);
        }
    }
    static setLogAdapter(p23) {
        if (!p23) {
            return;
        }
        l2.j12 = p23;
    }
    static setDeleteFaultLogFileAfterUpload(o23) {
        if (!Bugly.j15) {
            l2.error(`failed to set delete fault log file status, please init bugly first!`);
            return;
        }
        i2.getInstance().x7 = o23;
        l2.info(`set delete fault log file after upload: ${o23}`);
    }
    static k15(obj) {
        return obj != null && obj != undefined;
    }
    static l15(value) {
        return value != null && value != undefined && value != '';
    }
    static i15(n23, builder) {
        n23.appId = builder.appId;
        n23.appKey = builder.appKey;
        n23.debugMode = builder.debugMode;
        n23.appLaunchTime = Math.floor(systemDateTime.getTime() / 1000);
        if (Bugly.l15(builder.appVersion)) {
            n23.appVersion = builder.appVersion;
        }
        if (Bugly.l15(builder.buildNum)) {
            n23.buildNum = builder.buildNum;
        }
        if (Bugly.l15(builder.appChannel)) {
            n23.appChannel = builder.appChannel;
        }
        if (Bugly.l15(builder.deviceId)) {
            n23.deviceId = builder.deviceId;
        }
        if (Bugly.l15(builder.userId)) {
            n23.userId = builder.userId;
        }
        if (Bugly.l15(builder.deviceModel)) {
            n23.deviceModel = builder.deviceModel;
        }
        if (builder.crashListener) {
            s19.getInstance().crashListener = builder.crashListener;
        }
        s19.getInstance().j13 = builder.enableJsCrashProtect;
    }
}
Bugly.JS_CRASH = 0;
Bugly.CPP_CRASH = 1;
Bugly.APP_FREEZE = 2;
Bugly.j15 = false;
