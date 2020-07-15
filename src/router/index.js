import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

var routesCtx = require.context('.', false, /\.router.js$/);
console.log(routesCtx); 
/* 
  ƒ webpackContext(req) { // req,应该是require("./template/" + name + ".ejs")函数中的表达式
    return __webpack_require__(webpackContextResolve(req));
  }
*/

/* var configs = routesCtx.keys().map((filename) => {
  console.log(filename); //'./1.router.js'
  return routesCtx(filename);
}) */
// 或者

var configs = routesCtx.keys().map(routesCtx)

var combine = [];
configs.forEach((config) => {
  combine = combine.concat(config.default || config);
})
// 去重
var temp = {};
combine = combine.reduce((prev, next) => {
  if (!temp[next.path]) {
    temp[next.path] = true;
    prev.push(next);
  }
  return prev;
}, []);

console.log(combine);

export default new Router({
  mode: 'history', // 这个对预渲染是必须的，否则几个页面一样
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    ...combine,
  ]
})
