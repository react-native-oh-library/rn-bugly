import { o1 } from "../f/g/l";
import { l2 } from "../f/i/q";
import hiAppEvent from '@ohos.hiviewdfx.hiAppEvent';
import { s17 } from "./l2";
import t17 from "./m2";
class u17 {
    constructor() {
    }
    k12() {
        hiAppEvent.addWatcher({
            name: `bugly_crash_watcher`,
            appEventFilters: [{
                    domain: hiAppEvent.domain.OS,
                    names: [hiAppEvent.event.APP_CRASH]
                }],
            onReceive: (domain, w17) => {
                l2.info(`crash event received! domain: ${domain}`);
                for (const x17 of w17) {
                    l2.info(`event group Name: ${x17.name}`);
                    for (const eventInfo of x17.appEventInfos) {
                        let y17 = this.l12(eventInfo);
                        t17.n12(y17);
                        s17.getInstance().o12(y17);
                    }
                }
            }
        });
    }
    l12(eventInfo) {
        if (!eventInfo) {
            return null;
        }
        let v17 = new o1();
        try {
            v17.typeName = eventInfo.params['crash_type'];
            t17.p12(v17, eventInfo);
            v17.exceptionMsg = eventInfo.params['exception']['message'];
            if (!v17.typeName) {
                return null;
            }
            if (v17.typeName.startsWith('Js')) {
                v17.type = o1.e2;
                v17.exceptionName = eventInfo.params['exception']['name'];
                v17.exceptionStack = eventInfo.params['exception']['stack'] ? eventInfo.params['exception']['stack'] : "";
            }
            else {
                v17.type = o1.f2;
                v17.signo = eventInfo.params['exception']['signal']['signo'];
                v17.code = eventInfo.params['exception']['signal']['code'];
                v17.exceptionName = `${t17.q12(v17.signo)}(${v17.signo},${v17.code})`;
                v17.threadName = eventInfo.params['exception']['thread_name'];
                v17.tid = eventInfo.params['exception']['tid'];
                v17.t1 = t17.r12(eventInfo.params['exception']['frames']);
                v17.u1 = true;
                v17.d2 = t17.s12(eventInfo.params['threads']);
            }
            t17.t12(v17, eventInfo);
            t17.u12(v17, eventInfo);
            t17.v12(v17, eventInfo);
            t17.w12(v17, eventInfo);
        }
        catch (e) {
            l2.error(e);
        }
        return v17;
    }
}
export default new u17();
