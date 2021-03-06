import vueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(vueRouter);

import Index from "./views/Index";
import Blade from "./views/Blade";
import Chart from "./views/Chart";
import Currency from "./views/Currency";

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
        path: "/chart-line",
        component: Chart,
        title: 'Chart-line'
    },
    {
        path: "/Currency",
        component: Currency,
        title: 'Currency'
    }
];

export default new vueRouter({
    mode: "history",
    routes
});