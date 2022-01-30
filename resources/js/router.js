import vueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(vueRouter);

import Index from "./views/Index";
import Blade from "./views/Blade";
import Chart from "./views/Chart";
import Cb from "./views/CB";

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
        path: "/chart-cb",
        component: Cb,
        title: 'Chart-CB'
    }
];

export default new vueRouter({
    mode: "history",
    routes
});