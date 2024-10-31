import { TDDiagBuilder } from './TDDiagBuilder';
import { TDDiagUploadParams } from './TDDiagUploadParams';
export declare class TDDiag {
    private static j15;
    static init(context: Context, builder: TDDiagBuilder): void;
    static setGuid(z23: string): void;
    static uploadLogFiles(params: TDDiagUploadParams): void;
    static syncConfig(y23: boolean): void;
    private static m15;
    private static l15;
}
