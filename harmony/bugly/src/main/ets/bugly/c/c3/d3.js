import m10 from '@ohos.data.preferences';
import { f21 } from "../x2/y2";
import { l21 } from "../i/b3";
export class q21 {
    constructor() {
        this.g8 = `bugly_diagnose_preference`;
        if (f21.getInstance().context) {
            this.h8 = m10.getPreferencesSync(f21.getInstance().context, { name: this.g8 });
        }
    }
    static getInstance() {
        if (!q21.instance) {
            q21.instance = new q21();
        }
        return q21.instance;
    }
    putSync(key, value) {
        try {
            this.h8?.putSync(key, value);
        }
        catch (err) {
            l21.error(f21.w14, `Failed to put prefence, ${err.message}`);
        }
        return q21.instance;
    }
    getNumber(key, defaultValue) {
        try {
            return this.h8?.getSync(key, defaultValue);
        }
        catch (err) {
            l21.error(f21.w14, `Failed to get prefence number, ${err.message}`);
        }
        return defaultValue;
    }
    i8(key, defaultValue) {
        try {
            return this.h8?.getSync(key, defaultValue);
        }
        catch (err) {
            l21.error(f21.w14, `Failed to get prefence number array, ${err.message}`);
        }
        return defaultValue;
    }
    getStringArray(key, defaultValue) {
        try {
            return this.h8?.getSync(key, defaultValue);
        }
        catch (err) {
            l21.error(f21.w14, `Failed to get prefence string array, ${err.message}`);
        }
        return defaultValue;
    }
    getString(key, defaultValue) {
        try {
            return this.h8?.getSync(key, defaultValue);
        }
        catch (err) {
            l21.error(f21.w14, `Failed to get prefence string, ${err.message}`);
        }
        return defaultValue;
    }
    getBoolean(key, defaultValue) {
        try {
            return this.h8?.getSync(key, defaultValue);
        }
        catch (err) {
            l21.error(f21.w14, `Failed to get prefence boolean, ${err.message}`);
        }
        return defaultValue;
    }
    remove(key) {
        try {
            this.h8?.delete(key);
        }
        catch (err) {
            l21.error(f21.w14, `Failed to remove prefence, ${err.message}`);
        }
        return q21.instance;
    }
    commit() {
        this.h8?.flush();
    }
}
