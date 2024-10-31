import { t } from "../g/e";
import { u28 } from "./cache/z1";
import { v6 } from "./l1/m1";
import { f14 } from "./e2/f2";
import { v28 } from "./b2";
export declare class j2 {
    static instance: j2;
    p10: u28;
    a10: f14;
    q10?: v28;
    private constructor();
    static getInstance(): j2;
    w2(j14: t): void;
    saveData(data: v6): Promise<number>;
    c6(): void;
    r10(data: v6, status: number): void;
    s10(listener: v28): void;
}
