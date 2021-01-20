import Vue from 'vue'
import App from './App.vue'
import router from './router'

import zingchart from 'zingchart/es6';
import zingchartVue from 'zingchart-vue';

zingchart.DEV.DEBOUNCESPEED = 50;

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Font Awesome

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// To avoid importing individual icons, whole library was imported
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue Breadcrumbs
import VueBreadcrumbs from 'vue-2-breadcrumbs';
Vue.use(VueBreadcrumbs);

// Vue sidebar manu must be global

import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
Vue.use(VueSidebarMenu)

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.component('zingchart', zingchartVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
