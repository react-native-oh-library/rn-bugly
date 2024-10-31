import { t } from "./e";
export class u extends t {
    constructor() {
        super(...arguments);
        this.type = -1;
        this.a1 = "";
        this.b1 = "";
        this.filePath = "";
        this.token = "";
    }
    c1() {
        return JSON.stringify({
            type: this.type,
            a1: this.a1,
            b1: this.b1,
            filePath: this.filePath,
            token: this.token
        });
    }
}
u.d1 = 0;
