// require('./bootstrap');

require('uikit');

import Vue from 'vue'

import TestComponent from './components/TestComponent.vue'

new Vue({
    el: '#app',
    components: {
        TestComponent
        // TestComponent: () => import('./components/TestComponent.vue'),
    }
})