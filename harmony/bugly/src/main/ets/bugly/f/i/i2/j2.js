import hilog from '@ohos.hilog';
import { Constants } from "../../u/v";
export class r17 {
    debug(arg) {
        hilog.debug(r17.domain, r17.tag, r17.format, arg);
    }
    info(arg) {
        hilog.info(r17.domain, r17.tag, r17.format, arg);
    }
    warn(arg) {
        hilog.warn(r17.domain, r17.tag, r17.format, arg);
    }
    error(arg) {
        hilog.error(r17.domain, r17.tag, r17.format, arg);
    }
    fatal(arg) {
        hilog.fatal(r17.domain, r17.tag, r17.format, arg);
    }
}
r17.domain = 0x0000;
r17.tag = `${Constants.e3}`;
r17.format = '%{public}s';
