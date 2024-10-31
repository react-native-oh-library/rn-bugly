import { n6 } from "./f1/j1";
export declare class w5 {
    private static readonly a6;
    private static readonly m6;
    private static y5;
    private static instance;
    private context;
    private tables;
    private store;
    private constructor();
    static getInstance(): w5;
    x5(a6: number): Promise<void>;
    insert(table: n6): Promise<number>;
    query(table: n6): Promise<Array<object>>;
    d6(table: n6): Promise<boolean>;
    g6(table: n6, z5: string, status: number): Promise<boolean>;
    private z5;
    private b6;
    private l6;
    private k6;
}
