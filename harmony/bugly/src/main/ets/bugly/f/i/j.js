import HashMap from "@ohos.util.HashMap";
import util from "@ohos.util";
export class g1 {
    static m1(map) {
        const object = {};
        if (map) {
            map.forEach((value, key) => {
                object[key] = value;
            });
        }
        return object;
    }
    static n5(object) {
        if (!object) {
            return null;
        }
        const map = new HashMap();
        for (const key of Object.keys(object)) {
            map.set(key, object[key]);
        }
        return map;
    }
    static a11(value) {
        let g16 = new util.TextEncoder();
        let dest = g16.encodeInto(value);
        return dest;
    }
}
