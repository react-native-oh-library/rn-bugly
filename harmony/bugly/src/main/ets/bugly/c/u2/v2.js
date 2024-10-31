import { f21 } from "../x2/y2";
import { q21 } from "../c3/d3";
import { r21 } from "../y/e3";
import { s21 } from "../y/f3";
import { t21 } from "../i/g3";
import { l21 } from "../i/b3";
import { h4 } from "../i/x";
import * as c21 from 'libbuglydiag.so';
import { LogLevel } from "../d/LogLevel";
export function h14(url, body, appId, j22, k22) {
    l21.info(f21.w14, "[Napi Call] do http post request.");
    return new r21(url, body, appId, j22, k22).upload();
}
export function i14(url, path, fileName, g22, h22, i22) {
    l21.info(f21.w14, "[Napi Call] do http put request.");
    return new s21(url, path, fileName, g22, h22, i22).upload();
}
export function j14(e22) {
    l21.info(f21.w14, "[Napi Call] load local data.");
    let f22 = new Array();
    for (const key of e22) {
        let value = q21.getInstance().getString(key, "");
        f22.push(value);
    }
    return f22;
}
export function k14(b22, c22) {
    l21.info(f21.w14, "[Napi Call] save data to local.");
    if (b22.length != c22.length) {
        l21.error(f21.w14, "Failed to save data to local, keys array length not equal to values array.");
        return;
    }
    for (let d22 = 0; d22 < b22.length; d22++) {
        q21.getInstance().putSync(b22[d22], c22[d22]);
    }
    q21.getInstance().commit();
}
export function o14(a22) {
    l21.info(f21.w14, "[Napi Call] remove local data.");
    for (const key of a22) {
        q21.getInstance().remove(key);
    }
}
export function p14(text, key) {
    l21.info(f21.w14, "[Napi Call] do hmac sha1 in arkTs.");
    return t21.y14(t21.z14(text, key, 'SHA1'));
}
export function zipFile(fileList, w21, x21) {
    l21.info(f21.w14, "[Napi Call] zip files in arkTs.");
    h4.a5(fileList, w21).then((result) => {
        if (result) {
            c21.zipCallback(fileList.length, x21);
        }
    }).catch((error) => {
        l21.error(f21.w14, `Failed to zip file, ${error.message}`);
    });
}
export function q14(data, len) {
    l21.info(f21.w14, "[Napi Call] do md5 in arkTs.");
    let u21 = t21.a15("MD5", data);
    if (!u21) {
        return "";
    }
    let v21 = t21.y14(u21);
    return v21;
}
export function setLogLevel(level, endTime) {
    l21.info(f21.w14, `[Napi Call] Set log level, level: ${level}, end timd: ${endTime}.`);
    f21.getInstance().loggerAdapter?.setColorLevel(level);
}
export function r14() {
    l21.info(f21.w14, `[Napi Call] Reset log color level.`);
    f21.getInstance().loggerAdapter?.setColorLevel(LogLevel.LEVEL_ALL);
}
export function s14(isSuccess) {
    l21.info(f21.w14, `[Napi Call] Do upload files arkts callback, upload status: ${isSuccess}`);
    if (isSuccess) {
        f21.getInstance().logUploadListener?.onSuccess();
    }
    else {
        f21.getInstance().logUploadListener?.onFailure();
    }
}
