import m10 from '@ohos.data.preferences';
import { i2 } from "../m/n";
import { l2 } from "../i/q";
import { Constants } from "../u/v";
export class w9 {
    constructor() {
        this.g8 = `${Constants.e3}_preference`;
        if (i2.getInstance().context) {
            this.h8 = m10.getPreferencesSync(i2.getInstance().context, { name: this.g8 });
        }
    }
    static getInstance() {
        if (!w9.instance) {
            w9.instance = new w9();
        }
        return w9.instance;
    }
    putSync(key, value) {
        try {
            this.h8?.putSync(key, value);
        }
        catch (err) {
            l2.warn(err);
        }
        return w9.instance;
    }
    getNumber(key, defaultValue) {
        try {
            return this.h8?.getSync(key, defaultValue);
        }
        catch (err) {
            l2.warn(err);
        }
        return defaultValue;
    }
    i8(key, defaultValue) {
        try {
            return this.h8?.getSync(key, defaultValue);
        }
        catch (err) {
            l2.warn(err);
        }
        return defaultValue;
    }
    getStringArray(key, defaultValue) {
        try {
            return this.h8?.getSync(key, defaultValue);
        }
        catch (err) {
            l2.warn(err);
        }
        return defaultValue;
    }
    getString(key, defaultValue) {
        try {
            return this.h8?.getSync(key, defaultValue);
        }
        catch (err) {
            l2.warn(err);
        }
        return defaultValue;
    }
    getBoolean(key, defaultValue) {
        try {
            return this.h8?.getSync(key, defaultValue);
        }
        catch (err) {
            l2.warn(err);
        }
        return defaultValue;
    }
    remove(key) {
        try {
            this.h8?.delete(key);
        }
        catch (err) {
            l2.warn(err);
        }
        return w9.instance;
    }
    commit() {
        this.h8?.flush();
    }
}
