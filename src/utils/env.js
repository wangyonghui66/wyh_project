/*
 * @Author: Oishi
 * @Date: 2019-01-16 18:53:37
 * @Last Modified by: Oishi
 * @Last Modified time: 2019-01-17 10:40:35
 */

import { isHttps } from './';

/**
 * 生产环境为https 没有test字段
 * 测试环境为 http/https 含有test字段
 */
export function getCurrentEnv() {
  const currentHost = window.location.href;
  if (isHttps(currentHost) && !currentHost.includes('test')) {
    return 'prod';
  }
  if (currentHost.includes('test')) {
    return 'test';
  }
  return 'local';
}

export default {
  getCurrentEnv,
};
