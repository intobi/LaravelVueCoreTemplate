import VueRouter from 'vue-router';


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: require('./views/index'),
            name: 'index',
        },
        {
            path: '/test',
            component: require('./views/test'),
            name: 'test',
        },
        {
            path: '/superadmin',
            component: require('./views/superadmin'),
            name: 'superadmin',
            meta: {
                resource: 'Superadmin'
            }
        },
    ],
});
