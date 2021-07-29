export const hostsMap = {
  prod: 'https://m.xinyongfei.cn', // 生产域名
  test: 'http://test-m.xinyongfei.cn', // test2域名
  local: 'http://test-m.xinyongfei.cn',
};

export default {
  hostsMap,
  isHttps,
  delay,
  isIos,
  isIphoneX,
  getQueryString,
  checkPhone,
  checkCard,
};

export function isHttps(url) {
  let tmp = false;
  if (url.includes('https')) {
    tmp = true;
  }
  return tmp;
}

const delay = ms => new Promise(res => setTimeout(res, ms));

export function isIos() {
  let u = navigator.userAgent;
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
  if (isAndroid) {
    return false;
  } else {
    return true;
  }
}

export function isIphoneX() {
  if (typeof window !== 'undefined' && window) {
    return /iphone/gi.test(window.navigator.userAgent) && window.screen.height >= 812;
  }
  return false;
}

//判断是wap、android还是ios
export function terminalFn() {
  let terminal = 'wap';
  let u = navigator.userAgent;
  if (u.includes('Android') || u.includes('Adr')) {
    terminal = 'android';
  } else if (u.includes('iPhone')) {
    terminal = 'ios';
  }
  return terminal;
}

// 微信环境
export function isWx() {
  var u = navigator.userAgent.toLowerCase();
  if (u.match(/MicroMessenger/i) == 'micromessenger') {
    return true;
  } else {
    return false;
  }
}
export function isIongPhone() {
  if (window.screen.height >= 812) {
    return true;
  }
  return false;
}

//返回路由中指定的字符串
export function getQueryString(name, path) {
  let target = path ? path : window.location.search;
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  let r = target.substr(1).match(reg);
  let value = "";
  if (r != null) {
    value = decodeURI(r[2]);
    if (name === 'utm_source') {
      let valueObj = '';
      try {
        valueObj = JSON.parse(value);
      } catch {
      }
      value = Array.isArray(valueObj) ? valueObj[0] : value;
    }
  }
  return value;
}

export function checkPhone(phone) {
  let reg = /^1[3|4|5|6|7|8|9][0-9]{9}$/,
    isPhone = reg.test(phone);

  return isPhone;
}

//银行卡
export function checkBankCard(userIdNum) {
  var reg = /^([1-9]{1})(\d{14}|\d{15}|\d{17}|\d{18})$/; //  首位不为0 总位数为 15 16 18 19位

  return reg.test(userIdNum);
}

//身份证
export function checkCard(userIdNum) {
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

  return reg.test(userIdNum);
}

export const mergeRoutes = routes => routes.reduce((pre, next) => [...pre, ...next], []);

// 禁止页面滚动
export function stopDefault(el) {
  el.addEventListener(
    'touchmove',
    event => {
      event.preventDefault();
    },
    false
  );
}
// 恢复页面滚动
export function recoverDefault(el) {
  el.removeEventListener(
    'touchmove',
    event => {
      event.preventDefault();
    },
    false
  );
}

export function debounce(func, wait = 380) {
  let timeout = undefined;
  return function (...rest) {
    if (timeout !== undefined) {
      clearTimeout(timeout);
    }
    const context = this;
    const args = rest;
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

export function isInXyfApp() {
  const ua = window.navigator.userAgent;
  const xyfFlags = ['XYF-ANDROID', 'XYF-IOS', 'CW-IOS'];
  const index = xyfFlags.findIndex(ele => ua.indexOf(ele) !== -1);
  return index === -1 ? false : true;
}


//随机取数组某一位
export function randomArr(arr) {

  if (!arr || arr.length === 0) return '';

  return arr[Math.floor((Math.random() * arr.length))]

}

export function currentEnv() {
  const hostUrl = window.location.host;
  if (hostUrl.includes('192.168')) {
    return 'local'
  } else if (hostUrl.includes('test')) {
    return 'test'
  } else {
    return 'prod'
  }
}


export function getRamNumber(len) {
  var result = '';
  for (var i = 0; i < len; i++) {
    result += Math.floor(Math.random() * 10)
  }

  //默认字母小写，手动转大写
  return result;//另toLowerCase()转小写
}