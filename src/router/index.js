import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// https://webpack.js.org/guides/dependency-management/
const mergeModulesRouters = () => {
  const modulesFiles = require.context('./modules', true, /\.js$/);
  return modulesFiles
    .keys()
    .reduce((routers, moudlePath) => [...routers, ...modulesFiles(moudlePath).default], []);
};

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: mergeModulesRouters(),
});
