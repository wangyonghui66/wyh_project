import {
  appAndH5
} from '@/utils/request';
// 新埋点事件，2019-5-5后用这个，
import store from '@/store';

function getReportParams(data) {
  data.event_time = new Date().getTime();
  const from = localStorage.getItem('REPORT_FROM');
  if (from) {
    data.from = from;
  }
  let postData = {
    data: [data],
  };
  postData.data = JSON.stringify(postData.data);
  if (store.state.flyloans.utm_source) {
    postData.utm_source = store.state.flyloans.utm_source;
  } else if (data.utm_source) {
    postData.utm_source = data.utm_source;
  } else {
    if (location.search.includes('utm_source=')) {
      if (location.search.split('utm_source=')[1].split('&')[0]) {
        postData.utm_source = location.search.split('utm_source=')[1].split('&')[0];
      }
    }
  }
  return postData;
}


// 现金贷埋点
export function newEventData(data) {
  return appAndH5.post('/reporting/event', getReportParams(data));
}