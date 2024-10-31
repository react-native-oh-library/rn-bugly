import fs from '@ohos.file.fs';
import zlib from "@ohos.zlib";
import { l21 } from "./b3";
import { f21 } from "../x2/y2";
export class h4 {
    static h12(filePath) {
        if (!fs.accessSync(filePath)) {
            return 0;
        }
        let stat = fs.statSync(filePath);
        return stat.size;
    }
    static z4(path) {
        return fs.accessSync(path);
    }
    static g11(filePath) {
        if (!h4.z4(filePath)) {
            return null;
        }
        let file = fs.openSync(filePath, fs.OpenMode.READ_WRITE);
        let stat = fs.statSync(file.fd);
        let buf = new ArrayBuffer(stat.size);
        fs.readSync(file.fd, buf);
        fs.closeSync(file);
        return buf;
    }
    static async a5(inFiles, outFile) {
        if (!inFiles || inFiles.length == 0) {
            return false;
        }
        let options = {
            level: zlib.CompressLevel.COMPRESS_LEVEL_DEFAULT_COMPRESSION,
            memLevel: zlib.MemLevel.MEM_LEVEL_DEFAULT,
            strategy: zlib.CompressStrategy.COMPRESS_STRATEGY_DEFAULT_STRATEGY
        };
        try {
            await zlib.compressFiles(inFiles, outFile, options);
            return true;
        }
        catch (e) {
            l21.error(f21.w14, `failed to zip multi files.`);
            l21.error(f21.w14, e.message);
            return false;
        }
    }
}
