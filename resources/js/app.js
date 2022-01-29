// require('./bootstrap');

require('uikit');

import Vue from 'vue';
import router from "./router";

import axios from 'axios';
Vue.prototype.axios = axios;

// import TestComponent from './components/TestComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'

new Vue({
    el: '#app',
    router,
    components: {
        HeaderComponent
    }
})