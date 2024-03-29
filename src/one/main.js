import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import mixins from './mixins';
import 'oneapi/axios';
import 'onecss/base/base.less';
import 'onecss/base/element_theme.scss';
import $ from 'jquery';
Vue.mixin(mixins);
Vue.config.productionTip = false;
//注册element-ui组件
import {
    Button,
} from 'element-ui';

const components = [
    Button,
];
for (let k of components) {
    Vue.use(k);
}
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
