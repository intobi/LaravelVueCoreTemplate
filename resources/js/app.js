import './bootstrap';
import router from './router';
import store from './store/store';

import { abilitiesPlugin, Can  } from '@casl/vue';
import { AbilityBuilder } from '@casl/ability'
let abilities = AbilityBuilder.define(can => {
    can('read', 'guest');
    can('read', 'test');
    can(['read', 'write'], 'superadmin');
});
Vue.use(abilitiesPlugin, abilities);
Vue.component('Can', Can);

router.beforeEach((to, from, next) => {
    let canNavigate  = to.matched.every(route => {
        if (route.meta.resource != null)
            return abilities.can(route.meta.action || 'read', route.meta.resource);
        return true
    });

    if (!canNavigate) {
        return next('/')
    }

    next()
});


const app = new Vue({
    el: '#app',
    router,
    store
});
