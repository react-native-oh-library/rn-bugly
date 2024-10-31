import fs from '@ohos.file.fs';
import i16 from '@ohos.zlib';
import systemDateTime from '@ohos.systemDateTime';
import { l2 } from "./q";
import zlib from "@ohos.zlib";
import HashMap from "@ohos.util.HashMap";
export class h4 {
    static z11(context, dir) {
        if (dir.length == 0) {
            return context.filesDir;
        }
        let path = `${context.filesDir}/${dir}`;
        h4.r4(path);
        return path;
    }
    static a12(context, dir) {
        if (dir.length == 0) {
            return context.cacheDir;
        }
        let path = `${context.cacheDir}/${dir}`;
        h4.r4(path);
        return path;
    }
    static b12(context, dir) {
        if (dir.length == 0) {
            return context.tempDir;
        }
        let path = `${context.tempDir}/${dir}`;
        h4.r4(path);
        return path;
    }
    static c12(context, dir) {
        if (dir.length == 0) {
            return context.distributedFilesDir;
        }
        let path = `${context.distributedFilesDir}/${dir}`;
        h4.r4(path);
        return path;
    }
    static z4(path) {
        return fs.accessSync(path);
    }
    static r4(path) {
        let q17 = h4.z4(path);
        if (!q17) {
            fs.mkdirSync(path);
        }
    }
    static k5(context, content, append, path, fileName) {
        l2.debug(`saveToFile : ${content}`);
        if (path === undefined || path.length === 0) {
            path = h4.z11(context, "");
        }
        if (fileName === undefined || fileName.length === 0) {
            fileName = systemDateTime.getTime() + ".txt";
        }
        let filePath = `${path}/${fileName}`;
        l2.debug(`filePath: ${filePath}`);
        let file;
        if (h4.z4(filePath) && append) {
            file = fs.openSync(filePath, fs.OpenMode.READ_WRITE | fs.OpenMode.APPEND);
        }
        else {
            file = fs.openSync(filePath, fs.OpenMode.READ_WRITE | fs.OpenMode.CREATE | fs.OpenMode.TRUNC);
        }
        fs.writeSync(file.fd, content);
        fs.closeSync(file);
        return filePath;
    }
    static e11(path, m17) {
        let n17 = path.split("/");
        let o17 = n17[n17.length - 1];
        if (m17) {
            return o17;
        }
        let p17 = o17.split(".");
        if (p17.length !== 0) {
            return p17[0];
        }
        return "";
    }
    static d12(path) {
        let k17 = path.split("/");
        let l17 = k17[k17.length - 1];
        return l17;
    }
    static e12(path) {
        let h17 = path.split("/");
        let i17 = h17[h17.length - 1];
        let j17 = i17.split(".");
        if (j17.length > 1) {
            return j17[1];
        }
        return "";
    }
    static o5(path) {
        if (fs.accessSync(path)) {
            let stat = fs.statSync(path);
            if (stat.isFile()) {
                fs.unlinkSync(path);
                return;
            }
            let files = fs.listFileSync(path);
            files?.forEach(file => {
                h4.o5(file);
            });
            fs.rmdirSync(path);
        }
    }
    static f12(files) {
        files.forEach(file => {
            h4.o5(file);
        });
    }
    static async g12(input, e17) {
        let options = {
            level: i16.CompressLevel.COMPRESS_LEVEL_DEFAULT_COMPRESSION,
            memLevel: i16.MemLevel.MEM_LEVEL_DEFAULT,
            strategy: i16.CompressStrategy.COMPRESS_STRATEGY_DEFAULT_STRATEGY
        };
        try {
            await i16.compressFile(input, e17, options);
            return true;
        }
        catch (err) {
            l2.error(`compress failed.., code: ${err.code}, msg: ${err.message}`);
            return false;
        }
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
            l2.error(`failed to zip multi files.`);
            l2.error(e);
            return false;
        }
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
    static h12(filePath) {
        if (!h4.z4(filePath)) {
            return 0;
        }
        let stat = fs.statSync(filePath);
        return stat.size;
    }
    static s4(dir, y16) {
        if (!h4.z4(dir)) {
            l2.warn(`path not exist, can not delete expired files.`);
            return;
        }
        let isDirectory = fs.statSync(dir).isDirectory();
        if (!isDirectory) {
            l2.warn(`path is not dir, can not delete expired files`);
            return;
        }
        let z16 = {
            recursion: false,
            listNum: 0
        };
        let a17 = fs.listFileSync(dir, z16);
        for (let b17 = 0; b17 < a17.length; b17++) {
            const filePath = dir + "/" + a17[b17];
            const c17 = fs.statSync(filePath);
            const d17 = c17.mtime;
            const currentTime = Math.floor(systemDateTime.getTime() / 1000);
            if (currentTime - d17 > y16) {
                h4.o5(filePath);
            }
        }
    }
    static m5(filePath) {
        if (!fs.accessSync(filePath)) {
            return null;
        }
        let x16 = {
            encoding: 'utf-8'
        };
        let stat = fs.statSync(filePath);
        x16.length = stat.size;
        let str = fs.readTextSync(filePath, x16);
        return str;
    }
    static u4(j16, limit) {
        let k16 = fs.statSync(j16).isDirectory();
        if (!k16) {
            l2.warn(`path is not dir, can not delete over limit files.`);
            return;
        }
        let l16 = {
            recursion: false,
            listNum: 0
        };
        const m16 = new HashMap();
        let n16 = fs.listFileSync(j16, l16);
        if (n16.length <= limit) {
            return;
        }
        for (let u16 = 0; u16 < n16.length; u16++) {
            const filePath = j16 + "/" + n16[u16];
            const v16 = fs.statSync(filePath);
            const w16 = v16.mtime;
            m16.set(filePath, w16);
        }
        const o16 = Array.from(m16)
            .sort((a, b) => b[1] - a[1])
            .map((t16) => t16[0]);
        const p16 = o16.slice(limit);
        p16.forEach((fileName) => {
            if (h4.z4(fileName)) {
                h4.o5(fileName);
            }
        });
    }
}
