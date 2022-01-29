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
        title: 'Главная'
    },
    {
        path: "/blade-vue",
        component: Blade,
        title: 'blade-vue'
    },
    {
        path: "/chart",
        component: Chart,
        title: 'Графики'
    }
];

export default new vueRouter({
    mode: "history",
    routes
});