//判断是否是手机端浏览器
function isMobile() {
    // let ua = window.navigator.userAgent,
    //     app = window.navigator.appVersion;
    // if(!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
    //     if (ua.match(/MicroMessenger/i) == 'MicroMessenger') {
    //         return true
    //     }
    //     return true;
    // } else if(ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1) {
    //     if (ua.match(/MicroMessenger/i) == 'MicroMessenger') {
    //         return true
    //     }
    //     return true
    // }else{
    //     return false;
    // }


    let ua = window.navigator.userAgent;
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    // document.writeln("您的浏览设备为：");
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        if (ua.match(/MicroMessenger/i) == 'MicroMessenger') {
                    return true
                }
        return true; //手机端
    } else {
        return false;//pc端
    }

}
