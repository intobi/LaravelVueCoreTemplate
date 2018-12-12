import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import axios from 'axios';
import { abilitiesPlugin } from '@casl/vue';
import { AbilityBuilder } from '@casl/ability'
let ability = AbilityBuilder.define(can => {
    can('read', 'all');
    can('write', 'superadmin');
});

window.Vue = Vue;
window._ = require('lodash');
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';



try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');
    require('bootstrap');
} catch (e) {}
let token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}



Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(abilitiesPlugin, ability);
