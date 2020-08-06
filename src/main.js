import Vue from 'vue'
import VueI18n from 'vue-i18n';
import App from './App'
import router from './router'
import './utils/flexible'
Vue.config.productionTip = false
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'zh_CN', // 将要切换的语言，可以通过url拼的参数获取，用户行为select选择获取，本地manifest配置获取等，根据场景动态获取
  messages: {
    'zh_CN': require('@/assets/languages/chs.json'),  // 本地资源文件，我这里配2个语言，中文&英文，src下根据个人情况放置
    'en_US': require('@/assets/languages/en.json')
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  render: h => h(App)
})
