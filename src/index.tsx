import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-simple-broadcast-android' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const SimpleBroadcastAndroid = NativeModules.SimpleBroadcastAndroid
  ? NativeModules.SimpleBroadcastAndroid
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function doBroadcast(action: string) {
  return SimpleBroadcastAndroid.doBroadcast(action);
}
