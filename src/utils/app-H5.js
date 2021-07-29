// app-api 的接口
import axios from 'axios';
import { isHttps } from '.';
const flyloansMap = {
  prod: 'https://app-api.xinyongfei.cn', // 生产域名
  test: 'http://test-app-api.xinyongfei.cn', // 测试域名
  local: 'http://test-app-api.xinyongfei.cn',
};
let appBaseURL = '';
if (location.origin.includes('https') && !(location.origin.includes('test'))) {
  appBaseURL = flyloansMap['prod'];
} else if (location.origin.includes('localhost')) {
  appBaseURL = flyloansMap['local'];
} else {
  appBaseURL = flyloansMap['test'];
}

export const appAndH5 = axios.create({
  baseURL: appBaseURL,
  headers: { 'App-Name': 'lqqx', Os: 'ios', 'Version-code': 40000, 'Source-Type': 'wap' },
  timeout: 10000,
});
// console.dir(appAndH5);
// console.dir(appAndH5.head);

appAndH5.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    // window.tokenFromNative = 'f860599f6168d16aed1cb93166ec1c8a';
    let token = sessionStorage.getItem('token');
    if (window.tokenFromNative && window.tokenFromNative != 'undefined') {
      config.headers.Token = window.tokenFromNative;
    } else if (token) {
      config.headers.Token = token;
    }

    // console.log('--------------config.headers-----------------', config.headers);
    let REPORTTOKEN = localStorage.getItem('REPORT_TOKEN');
    let REPORTAPP = localStorage.getItem('REPORT_APP');
    if (REPORTTOKEN) {
      config.headers.Token = REPORTTOKEN;
    }
    if (REPORTAPP) {
      config.headers['App-Name'] = REPORTAPP;
    }
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
appAndH5.interceptors.response.use(
  response => {
    const responseData = response.data;
    return responseData;
  },
  error => Promise.reject(error)
);
