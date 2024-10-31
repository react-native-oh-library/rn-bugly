
import { TurboModuleRegistry, TurboModule } from 'react-native';

export interface Spec extends TurboModule {

  init: (appId: string, appKey: string) => void;
  setUserId: (userId: string) => void;
  setDeviceID: (deviceID: string) => void;
  setDeviceModel: (deviceModel: string) => void;
  setAppVersion: (version: string) => void;
  setAppChannel: (appChannel: string) => void;
  putUserData: (userKey: string, userValue: string) => void;
  postException: (params: { category?: number, errorType?: string, errorMsg: string, stack?: string, extraInfo?: { [key: string]: string } }) => void;
  testCrash: (crashType: number) => void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('RNBuglyModule');