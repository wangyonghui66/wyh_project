
const Home = () => import('@/views/home/index.vue'); //
const NotFound = () => import('@/views/NotFound/index.vue');


let base = [
  {
    path: '/',
    component: Home,
    meta:{
      title: ''
    }
  },
  
  {
    path: '*',
    component: NotFound,
  },
];

export default base;
