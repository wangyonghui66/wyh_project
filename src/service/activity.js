import reaquest from '@/utils/request';

export async function getWxAuthUrl(share_id) {
  return reaquest.get(`/api/qr/get-wxurl?share_id=${share_id}`);
}

export async function getOpenId(code, share_id) {
  return reaquest.get(`/api/qr/get-openid?code=${code}&share_id=${share_id}`);
}

export async function getShareQr(openId) {
  return reaquest.get(`/api/qr/share-code?openId=${openId}`);
}

// 获取随机文案
export async function getRandomText(openId) {
  return reaquest.get(`/api/qr/rand?openId=${openId}`);
}

// 获取头像
export async function getWxAvatar(openId) {
  return reaquest.get(`/api/qr/get-img?openId=${openId}`);
}

// 发送验证码
// export async function sendVerifyCode(mobile) {
//   return reaquest.post('/api/user/send-verification-code', { mobile });
// }

// 验证验证码
export async function confirmCode(params) {
  return reaquest.post('/api/user/confirm-v-code', params);
}

// 发送验证码
export async function sendVerifyCode(mobile) {
  return reaquest.post('/api/user/send-v-code', {
    mobile
  });
}

// 是否命中风控白名单
export async function isRejected(params) {
  return reaquest.post('/api/user/check-high-risk', params);
}

// 新老客
export async function checkUser(mobile) {
  return reaquest.post('/api/user/check-user', {
    mobile
  });
}

// 验证验证码
// export async function confirmCode(params) {
//   return reaquest.post('/api/user/confirm-v-code', params);
// }

// 落地页-发送验证码
export async function sendVerificationCode(mobile) {
  return reaquest.post('/api/user/send-verification-code', mobile);
}
// 落地页-验证验证码
export async function confirmVerificationCode1(params) {
  return reaquest.post('/api/user/confirm-verification-code1', params);
}
// 验证验证码
export async function confirmCouponCode(params) {
  return reaquest.post('/api/user/confirm-verification-user-gift', params);
}
// 同步三要素
export async function applyLine(params) {
  return reaquest.post('/api/credit/apply-line', params);
}
// 同步三要素 2
export async function fxdOcrHelp(params) {
  return reaquest.post('/api/credit/fxd-ocr-help', params);
}
// 给后端authinfo
export async function baseInfo(params) {
  return reaquest.post('/api/user/base-info', params);
}

// 拒就赔活动-拆红包
export async function getRedPacket(params) {
  return reaquest.post('/api/jjp/get-red-packet', params);
}

// 拒就赔活动-拆红包
export async function getRedOpenId({
  code
}) {
  return reaquest.get(`/api/jjp/get-openid?code=${code}`);
}

export async function getRedWxurl() {
  return reaquest.get(`/api/jjp/get-wxurl`);
}
// 获取身份证初始信息
export async function ocrIdCardCreate(params) {
  return reaquest.get('/api/activation/ocr-id-card-create', params);
}
// 上传身份证照片
export async function ocrIdCardUpload(params) {
  return reaquest.post('/api/activation/ocr-id-card-upload', params);
}
//sdk新老用户礼包
export async function getGiftBagData(params) {
  return reaquest.post(`/api/sdk/list`, params);
}
//sdk新老用户礼包-一键领取
export async function goReceive(params) {
  return reaquest.post(`/api/sdk/receive`, params);
}

// sdk新老用户礼包-发送验证码
export async function sdkSendVerifyCode(mobile) {
  return reaquest.post('/api/sdk/send-code', {
    mobile,
  });
}
// sdk新老用户礼包-验证验证码
export async function sdkComfirmCode(mobile) {
  return reaquest.post('/api/sdk/check-code', mobile);
}

// sdk新老用户礼包-特价机票
export async function sdkFlights(params) {
  return reaquest.post('/api/sdk/flights', params);
}

// 幸运盒子接口

//盒子首页
export function luckyIndex(param) {
  // param = qs.stringify(param);
  return reaquest.post(`/api/activity/luckybox-index`, param);
}

// 获取活动ID
export function getActivityID(param) {
  // param = qs.stringify(param);
  return reaquest.post(`/api/activity/get-current-activity`, param);
}

// 中奖结果
export function luckyResult(param) {
  // param = qs.stringify(param);
  return reaquest.post(`/api/activity/luckybox-prizeresult`, param);
}

// 中奖列表
export function luckyPrizeList(param) {
  // param = qs.stringify(param);
  return reaquest.post(`/api/activity/luckybox-prizelist`, param);
}

//活动次数列表
export function luckyActivityCount(param) {
  // param = qs.stringify(param);
  return reaquest.post(`/api/activity/luckybox-activityList`, param);
}

// 我的彩票
export function mylottery(param) {
  // param = qs.stringify(param);
  return reaquest.post(`/api/activity/luckybox-mylottery`, param);
}

// 获取奖品地址
export function getAddress(param) {
  return reaquest.post('/api/activity/get-my-lottery-address', param);
}

// 填写地址
export function luckyAddress(param) {
  // param = qs.stringify(param);
  return reaquest.post(`/api/activity/luckybox-lottery-address`, param);
}

// 获取分享链接
export function shareUrl(param) {
  return reaquest.post('/api/activity/get-user-invitation-code', param);
}

export function getSessionToken(param) {
  return reaquest.post('/api/get-token', param);
}
