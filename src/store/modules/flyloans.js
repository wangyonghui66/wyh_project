export default {
  namespaced: true,
  state: {
    utm_source: '',
    loading_target: true,
    loan_no: '',
    borrowApplayInfo: {},
    repayment_pay_id: '',
  },
  actions: {
    setUtmSource(context, data) {
      context.commit('setUtmSourceFn', data);
    },
    setLoadingTarget(context, data) {
      context.commit('setLoadingTargetFn', data);
    },
    setLoanNo(context, data) {
      context.commit('setLoanNoFn', data);
    },
    setRepaymentId(context, data) {
      context.commit('setRepaymentIdFn', data);
    },
  },
  mutations: {
    setUtmSourceFn(state, data) {
      state.utm_source = data;
    },
    setLoadingTargetFn(state, data) {
      state.loading_target = data;
    },
    setLoanNoFn(state, data) {
      state.loan_no = data;
    },
    setApplyInfo(state, payload) {
      state.borrowApplayInfo = payload;
    },
    setRepaymentIdFn(state, data) {
      state.repayment_pay_id = data;
    },
  },
};
