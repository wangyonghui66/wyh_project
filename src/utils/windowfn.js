/**
 * nativeFn H5调客户端的方法，客户端会通过type值判定例如
 * nativeFn({type:ocr_live})  跳原生ocr和live
 *
 */

// 是客户端调用的方法，将data挂在nativedata上，H5就可以获取到了

export function nativeFn(data) {
  // alert('调用客户端的');
  if (navigator.userAgent.includes('Android')) {
    console.log('是安卓')
    jsBridge && jsBridge.XYFWebViewFunctionBridge(data.type)
  } else {
    console.log('是IOS')
    if (window.webkit) {
      window.webkit.messageHandlers.XYFWebViewFunctionBridge.postMessage(data)
    } else {
      jsBridge && jsBridge.XYFWebViewFunctionBridge(data)
    }
  }
}
