import router from './';

router.beforeEach((to, from, next) => {
  next();
});

router.afterEach(route => {
  if (route.meta.title) {
    document.title = route.meta.title;
  }
});
