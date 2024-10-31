import { i2 } from "./n";
import preferences from "@ohos.data.preferences";
import { l2 } from "../i/q";
import HashMap from "@ohos.util.HashMap";
export class y9 {
    constructor() {
        this.e8 = null;
    }
    static getInstance() {
        if (!y9.instance) {
            y9.instance = new y9();
        }
        return y9.instance;
    }
    b8() {
        try {
            let options = { name: y9.f8 };
            let k10 = preferences.getPreferencesSync(i2.getInstance().context, options);
            let l10 = k10.getAllSync();
            if (!Object.keys(l10) || Object.keys(l10).length == 0) {
                return;
            }
            this.e8 = new HashMap();
            for (const key of Object.keys(l10)) {
                const value = k10.getSync(key, "").toString();
                this.e8.set(key, value);
            }
        }
        catch (e) {
            l2.error(`failed to get all sdk infos.`);
            l2.error(e);
        }
    }
}
y9.f8 = "BuglySdkInfos";
