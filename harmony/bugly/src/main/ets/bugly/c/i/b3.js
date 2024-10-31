import hilog from '@ohos.hilog';
import { LogLevel } from "../d/LogLevel";
export class l21 {
    static setLogAdapter(m23) {
        l21.f15 = m23;
    }
    static debug(tag, msg) {
        l21.f15 ? l21.f15.printDiagnoseLog(LogLevel.LEVEL_DEBUG, tag, msg, null)
            : hilog.debug(l21.g15, tag, l21.h15, msg);
    }
    static info(tag, msg) {
        l21.f15 ? l21.f15.printDiagnoseLog(LogLevel.LEVEL_INFO, tag, msg, null)
            : hilog.info(l21.g15, tag, l21.h15, msg);
    }
    static warn(tag, msg) {
        l21.f15 ? l21.f15.printDiagnoseLog(LogLevel.LEVEL_ERROR, tag, msg, null)
            : hilog.warn(l21.g15, tag, l21.h15, msg);
    }
    static error(tag, msg) {
        l21.f15 ? l21.f15.printDiagnoseLog(LogLevel.LEVEL_ERROR, tag, msg, null)
            : hilog.error(l21.g15, tag, l21.h15, msg);
    }
}
l21.f15 = null;
l21.g15 = 0x0000;
l21.h15 = '%{public}s';
