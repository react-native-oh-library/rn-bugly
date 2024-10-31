import deviceInfo from '@ohos.deviceInfo';
export class DeviceInfo {
    static d3() {
        return deviceInfo.manufacture;
    }
    static c3() {
        return deviceInfo.brand;
    }
    static b3() {
        return deviceInfo.osFullName;
    }
}
