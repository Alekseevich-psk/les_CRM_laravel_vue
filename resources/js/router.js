import vueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(vueRouter);

import Index from "./views/Index";
import Blade from "./views/Blade";
import Chart from "./views/Chart";

const routes = [
    {
        path: "/",
        component: Index,
        title: 'Hello'
    },
    {
        path: "/blade-vue",
        component: Blade,
        title: 'blade-vue'
    },
    {
        path: "/chart",
        component: Chart,
        title: 'Chart.js'
    }
];

export default new vueRouter({
    mode: "history",
    routes
});