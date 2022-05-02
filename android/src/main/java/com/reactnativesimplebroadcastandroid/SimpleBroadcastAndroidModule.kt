package com.reactnativesimplebroadcastandroid

import android.content.Intent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class SimpleBroadcastAndroidModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
      return "SimpleBroadcastAndroid"
    }

    @ReactMethod
    fun doBroadcast(action: String) {
      val intent = Intent()
      intent.action = action
      reactApplicationContext.sendBroadcast(intent)
    }

}
