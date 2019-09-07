import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui';
import axios from 'axios'
import 'mint-ui/lib/style.css'
import './assets/lib/mui/css/mui.min.css'
import './assets/lib/mui/css/icons-extra.css'
Vue.use(Mint);
Vue.config.productionTip = false
Vue.prototype.axios = axios;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')