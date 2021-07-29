import Vue from 'vue';

// 将分转为元
Vue.filter('format', function(value) {
  if (!value) return '';
  return (value = value / 100);
});

Vue.filter('percent', function(value) {
  if (!value) return '';
  return accMul(value, 100);
});

function accMul(arg1, arg2) {
  let m = 0,
    s1 = arg1.toString(),
    s2 = arg2.toString();
  try {
    m += s1.split('.')[1].length;
  } catch (e) {}
  try {
    m += s2.split('.')[1].length;
  } catch (e) {}
  return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m);
}
