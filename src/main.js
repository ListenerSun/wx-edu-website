// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入 vant 组件
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant';
import { Tabbar, TabbarItem } from 'vant';

// 引入 axios 组件
import axios from 'axios'
import * as HttpUtils from './utils/HttpUtils'

// 定义 vant 相关
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Vant);
Vue.use(Lazyload);
Vue.config.productionTip = false

// 定义全局 axios
Vue.prototype.HTTP = HttpUtils
//全局注册，使用方法为:this.$axios
Vue.prototype.$axios = axios
// 后端请求地址
Vue.prototype.HOME = 'http://localhost:9300'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
