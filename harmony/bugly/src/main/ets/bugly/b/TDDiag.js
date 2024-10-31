import { TDDiagBuilder } from './TDDiagBuilder';
import { g21 } from "../c/z2";
import { l21 } from "../c/i/b3";
import { f21 } from "../c/x2/y2";
import * as c21 from 'libbuglydiag.so';
export class TDDiag {
    static init(context, builder) {
        if (TDDiag.j15) {
            l21.error(f21.w14, "[Diagnose Init] TDDiag has already initted!");
            return;
        }
        if (!TDDiag.l15(builder.appId) || !TDDiag.l15(builder.appKey)) {
            l21.error(f21.w14, "[Diagnose Init] Failed to init TDDiag, appId or appKey is empty!");
            return;
        }
        if (builder.platform != TDDiagBuilder.PLATFORM_OA && builder.platform != TDDiagBuilder.PLATFORM_PRO) {
            l21.error(f21.w14, "[Diagnose Init] Failed to init TDDiag, you must point a valid platform!.");
            return;
        }
        if (!builder.loggerAdapter) {
            l21.error(f21.w14, "[Diagnose Init] Failed to init TDDiag, you must set logger adapter!.");
            return;
        }
        let a24 = f21.getInstance();
        a24.context = context.getApplicationContext();
        a24.loggerAdapter = builder.loggerAdapter;
        l21.setLogAdapter(builder.loggerAdapter);
        a24.logUploadListener = builder.logUploadListener;
        TDDiag.m15(a24, builder);
        g21.getInstance().x13();
        a24.v14();
        TDDiag.j15 = true;
        l21.info(f21.w14, "[Diagnose Init] Init Bugly TDDiag success!");
    }
    static setGuid(z23) {
        if (!TDDiag.j15) {
            l21.error(f21.w14, `Failed to set guid, please init TDDiag first.`);
            return;
        }
        if (TDDiag.l15(z23)) {
            f21.getInstance().setGuid(z23);
            l21.info(f21.w14, `Success to set guid: ${z23}`);
        }
        else {
            l21.error(f21.w14, `Failed to set guid, guid is empty.`);
        }
    }
    static uploadLogFiles(params) {
        if (!TDDiag.j15) {
            l21.error(f21.w14, `Failed to upload log files, please init TDDiag first.`);
            return;
        }
        if (!params.files || params.files.length == 0) {
            l21.error(f21.w14, "Failed to upload log files, log path is null or empty.");
            return;
        }
        l21.info(f21.w14, `Try to upload log files.`);
        c21.uploadFiles(params);
    }
    static syncConfig(y23) {
        if (!TDDiag.j15) {
            l21.error(f21.w14, `Failed to sync config, please init TDDiag first.`);
            return;
        }
        l21.info(f21.w14, `Try to sync config.`);
        c21.syncConfig(y23);
    }
    static m15(x23, builder) {
        x23.appId = builder.appId;
        x23.appKey = builder.appKey;
        x23.hostType = builder.platform;
        if (builder.xgTrafficQuota < 0) {
            x23.xgTrafficQuota = builder.xgTrafficQuota;
        }
        else if (builder.xgTrafficQuota > x23.totalTrafficQuota) {
            x23.xgTrafficQuota = x23.totalTrafficQuota;
        }
        else {
            x23.xgTrafficQuota = builder.xgTrafficQuota;
        }
        x23.c14 = builder.initiativeUploadWhiteListTags;
        if (TDDiag.l15(builder.appVersion)) {
            x23.appVersion = builder.appVersion;
        }
    }
    static l15(value) {
        return value != null && value != undefined && value != '';
    }
}
TDDiag.j15 = false;
