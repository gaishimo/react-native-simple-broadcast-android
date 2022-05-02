#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(SimpleBroadcastAndroid, NSObject)

RCT_EXTERN_METHOD(doBroadcast:(NSString *)action)

@end
