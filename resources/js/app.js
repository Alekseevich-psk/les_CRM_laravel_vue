require('uikit');

import Vue from 'vue';
import router from "./router";

import axios from 'axios';
Vue.prototype.axios = axios;

import HeaderComponent from './components/HeaderComponent.vue'

new Vue({
    el: '#app',
    router,
    components: {
        HeaderComponent
    }
})