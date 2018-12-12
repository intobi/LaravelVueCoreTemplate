import './bootstrap';
import router from './router';


import { abilitiesPlugin } from '@casl/vue';
import { AbilityBuilder } from '@casl/ability'
let abilities = AbilityBuilder.define(can => {
    can('read', 'guest');
    can('read', 'test');
    can(['read', 'write'], 'superadmin');
});
Vue.use(abilitiesPlugin, abilities);

router.beforeEach((to, from, next) => {
    let canNavigate = true;
    if (to.meta.resource != null)
        canNavigate = to.matched.some(route => {
            return abilities.can(route.meta.action || 'read', route.meta.resource)
        });

    if (!canNavigate) {
        return next('/')
    }

    next()
});


const app = new Vue({
    el: '#app',
    router,
});
