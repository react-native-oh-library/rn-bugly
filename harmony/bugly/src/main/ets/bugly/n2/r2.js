import { i2 } from "../f/m/n";
import hiAppEvent from "@ohos.hiviewdfx.hiAppEvent";
import { l2 } from "../f/i/q";
import { Constants } from "../f/u/v";
export class g18 {
    constructor() {
    }
    static getInstance() {
        if (!g18.instance) {
            g18.instance = new g18();
        }
        return g18.instance;
    }
    async h13() {
        try {
            let params = {
                "bugly_launch_id": i2.getInstance().a3
            };
            await this.v13(params);
        }
        catch (e) {
            l2.error(`failed to set link id to app event.`);
            l2.error(e);
        }
    }
    async w13(b21) {
        try {
            let params = {
                "bugly_custom_files": b21
            };
            await this.v13(params);
        }
        catch (e) {
            l2.error(`failed to set custom file path Array to app event.`);
            l2.error(e);
        }
    }
    async i13() {
        try {
            let a21 = JSON.stringify({
                "user_id": i2.getInstance().userId,
                "start_time": i2.getInstance().appLaunchTime,
                "sdk_version": i2.getInstance().getSdkVersion(),
                "app_version": i2.getInstance().appVersion,
                "build_num": i2.getInstance().buildNum,
                "app_channel": i2.getInstance().appChannel
            });
            let params = {
                "bugly_info": a21
            };
            await this.v13(params);
        }
        catch (e) {
            l2.error(`failed to set link user id to app event.`);
            l2.error(e);
        }
    }
    b13(y20, eventInfo) {
        try {
            let z20 = JSON.parse(eventInfo.params[Constants.m3]);
            if (z20) {
                y20.uid = z20["user_id"];
                y20.appLaunchTime = z20["start_time"];
                y20.sdkVersion = z20["sdk_version"];
                y20.appVersion = z20["app_version"];
                y20.buildNum = z20["build_num"];
                y20.appChannel = z20["app_channel"];
            }
        }
        catch (e) {
            l2.error(`failed to get common info from app event`);
            l2.error(e);
        }
    }
    async v13(params) {
        await hiAppEvent.setEventParam(params, hiAppEvent.domain.OS, hiAppEvent.event.APP_CRASH);
        await hiAppEvent.setEventParam(params, hiAppEvent.domain.OS, hiAppEvent.event.APP_FREEZE);
    }
}
