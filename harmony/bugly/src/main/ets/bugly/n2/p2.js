import hiAppEvent from '@ohos.hiviewdfx.hiAppEvent';
import { l2 } from "../f/i/q";
import { o1 } from "../f/g/l";
import { s17 } from "./l2";
import t17 from "./m2";
import HashMap from "@ohos.util.HashMap";
import { Constants } from "../f/u/v";
class z17 {
    constructor() {
    }
    k12() {
        hiAppEvent.addWatcher({
            name: `bugly_freeze_watcher`,
            appEventFilters: [{
                    domain: hiAppEvent.domain.OS,
                    names: [hiAppEvent.event.APP_FREEZE]
                }],
            onReceive: (domain, d18) => {
                l2.info(`freeze event received! domain: ${domain}`);
                for (const e18 of d18) {
                    l2.info(`event group Name: ${e18.name}`);
                    for (const eventInfo of e18.appEventInfos) {
                        let f18 = this.l12(eventInfo);
                        t17.n12(f18);
                        s17.getInstance().o12(f18);
                    }
                }
            }
        });
    }
    l12(eventInfo) {
        if (!eventInfo) {
            return null;
        }
        let a18 = new o1();
        try {
            a18.type = o1.h2;
            a18.typeName = Constants.j3;
            t17.p12(a18, eventInfo);
            a18.exceptionName = eventInfo.params['exception']['name'];
            a18.exceptionMsg = eventInfo.params['exception']['message'];
            let b18 = eventInfo.params['event_handler'];
            let c18 = eventInfo.params['peer_binder'];
            a18.l1 = new HashMap();
            a18.l1.set('event_handler', b18.join('\n'));
            a18.l1.set('peer_binder', c18.join('\n'));
            a18.l1.set('event_handler_size_3s', eventInfo.params['event_handler_size_3s']);
            a18.l1.set('event_handler_size_6s', eventInfo.params['event_handler_size_6s']);
            a18.t1 = t17.x12(eventInfo.params['pid'], eventInfo.params['threads']);
            a18.u1 = true;
            a18.d2 = t17.s12(eventInfo.params['threads']);
            a18.rss = eventInfo.params['memory']['rss'] ? eventInfo.params['memory']['rss'] * 1000 : -1;
            a18.vss = eventInfo.params['memory']['vss'] ? eventInfo.params['memory']['vss'] * 1000 : -1;
            a18.pss = eventInfo.params['memory']['pss'] ? eventInfo.params['memory']['pss'] * 1000 : -1;
            a18.v1 = eventInfo.params['memory']['sys_avail_mem'] ? eventInfo.params['memory']['sys_avail_mem'] * 1000 : -1;
            a18.z1 = eventInfo.params['memory']['sys_free_mem'] ? eventInfo.params['memory']['sys_free_mem'] * 1000 : -1;
            a18.w1 = eventInfo.params['memory']['sys_total_mem'] ? eventInfo.params['memory']['sys_total_mem'] * 1000 : -1;
            t17.t12(a18, eventInfo);
            t17.u12(a18, eventInfo);
            t17.v12(a18, eventInfo);
        }
        catch (e) {
            l2.error(e);
        }
        return a18;
    }
}
export default new z17();
