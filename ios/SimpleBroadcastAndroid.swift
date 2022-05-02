import Foundation
@objc(SimpleBroadcastAndroid)
class SimpleBroadcastAndroid: NSObject {
    @objc(doBroadcast:)
    func doBroadcast(action: NSString) -> Void {}
}
