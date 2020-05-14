module.exports.install = function(Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    // 逻辑...
    console.log('myGlobalMethod')
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind(el, binding, vnode, oldVnode) {
      // 逻辑...
    }
  })

  // 3. 注入组件
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
    console.log('myMethod')
  }

  // 5. 自动注册全局组件
  var componentsCtx = require.context('../components', true, /\.vue$/);
  componentsCtx.keys().forEach((filename) => {
    const componentConfig = componentsCtx(filename);
    let componentName = filename.replace(/(\.\/|\.\w+$)/g, '');
        componentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
    console.log(componentName);

    Vue.component(componentName, componentConfig.default || componentConfig);
  });
}