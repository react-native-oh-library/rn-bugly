/**
 * MIT License
 *
 * Copyright (C) 2024 Huawei Device Co., Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { TurboModule, TurboModuleContext } from '@rnoh/react-native-openharmony/ts';
import { Bugly, BuglyBuilder, } from './bugly/Bugly';

export class RNBuglyModule extends TurboModule {
  static NAME = "RNBuglyModule"
  private builder;

  constructor(ctx: TurboModuleContext) {
    super(ctx)
    this.builder = new BuglyBuilder();
  }

  init(appId: string, appKey: string) {
    this.builder.appId = appId;
    this.builder.appKey = appKey;
    this.builder.platform = BuglyBuilder.PLATFORM_PRO;
    Bugly.init(this.ctx.uiAbilityContext, this.builder);
  }

  setUserId(userId: string) {
    this.builder.userId = userId;
  }

  setDeviceID(deviceId: string) {
    this.builder.deviceId = deviceId;
  }

  setDeviceModel(deviceModel: string) {
    this.builder.deviceModel = deviceModel;
  }

  setAppVersion(version: string) {
    this.builder.appVersion = version;
  }

  setAppChannel(appChannel: string) {
    this.builder.appChannel = appChannel;
  }

  putUserData(userKey: string, userValue: string) {
    Bugly.putUserData(userKey, userValue);
  }

  postException(params: { category?: number, errorType?: string, errorMsg: string, stack?: string, extraInfo?: { [key: string]: string } }) {
    Bugly.postError(new Error("category:" + params.category + ",errorType:" + params.errorType + ",errorMsg:" +
    params.errorMsg + ",stack:" + params.stack +
      ",extraInfo:" + params.extraInfo));
  }

  testCrash(crashType: number) {
    Bugly.testCrash(crashType)
  }
}