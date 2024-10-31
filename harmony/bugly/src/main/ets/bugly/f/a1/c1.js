import { l2 } from "../i/q";
import { h4 } from "../i/x";
import { i2 } from "../m/n";
import { g1 } from "../i/j";
import fs from '@ohos.file.fs';
export class e5 {
    constructor() {
    }
    static getInstance() {
        if (!e5.instance) {
            e5.instance = new e5();
        }
        return e5.instance;
    }
    f5() {
        try {
            const filesDir = i2.getInstance().context?.filesDir;
            if (!filesDir) {
                l2.error(`failed to write user data to local file, can not get files dir!`);
                return;
            }
            const k5 = filesDir + "/" + e5.g5;
            if (h4.z4(k5)) {
                h4.u4(k5, e5.h5);
            }
        }
        catch (e) {
            l2.error(`failed to delete over limit user data files.`);
            l2.error(e);
        }
    }
    i5() {
        try {
            const filesDir = i2.getInstance().context?.filesDir;
            if (!filesDir) {
                l2.error(`failed to write user data to local file, can not get files dir!`);
                return;
            }
            const i5 = filesDir + "/" + e5.g5;
            const fileName = e5.j5 + i2.getInstance().a3 + '.txt';
            if (!fs.accessSync(i5)) {
                fs.mkdirSync(i5);
            }
            let j5 = g1.m1(i2.getInstance().b2);
            h4.k5(i2.getInstance().context, JSON.stringify(j5), false, i5, fileName);
        }
        catch (e) {
            l2.error(`failed to write user data to local file.`);
            l2.error(e);
        }
    }
    l5(f5) {
        const filesDir = i2.getInstance().context?.filesDir;
        if (!filesDir) {
            return null;
        }
        const g5 = filesDir + "/" + e5.g5 + "/" + e5.j5 + f5 + '.txt';
        let userData = null;
        try {
            if (h4.z4(g5)) {
                const h5 = h4.m5(g5);
                if (h5 && h5.length != 0) {
                    userData = g1.n5(JSON.parse(h5));
                }
                h4.o5(g5);
            }
            else {
                l2.info('user data file can not access.');
            }
            return userData;
        }
        catch (e) {
            l2.error(`failed to get user data.`);
            l2.error(e);
            return null;
        }
    }
}
e5.p5 = "C03_";
e5.g5 = "bugly_user_data";
e5.j5 = "kv_";
e5.h5 = 10;
