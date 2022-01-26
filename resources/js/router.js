import vueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(vueRouter);

import Index from "./views/Index";
import Blade from "./views/Blade";

const routes = [
    {
        path: "/",
        component: Index
    },
    {
        path: "/blade-vue",
        component: Blade
    }
];

export default new vueRouter({
    mode: "history",
    routes
});