import axios from 'axios';
import {
  getCurrentEnv
} from './env';
import {
  hostsMap
} from './index';
import {
  getQueryString,
  terminalFn
} from './index';

var getUrlParams = function (name) {
  let currToken = '';
  if(getQueryString(name)){
    sessionStorage.setItem(name,getQueryString(name));
  }
  currToken = getQueryString(name) || sessionStorage.getItem(name);
  return currToken;
};

export {
  appAndH5
}
from './app-H5';
const request = axios.create({
  headers: {
    'app-name': getUrlParams('app_name') || 'lqqx',
    'content-type': 'application/json',
  },
  timeout: 10000,
  withCredentials: true,
});
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    if (window.tokenFromNative && window.tokenFromNative != 'undefined') {
      config.headers.Token = window.tokenFromNative;
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
request.interceptors.response.use(
  response => {
    const responseData = response.data;
    return responseData;
  },
  error => Promise.reject(error)
);
export default request;


