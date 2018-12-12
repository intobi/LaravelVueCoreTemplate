import VueRouter from 'vue-router';


export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: require('./views/layout'),

            children: [
                {
                    path: '/',
                    component: require('./views/index'),
                    name: 'index',
                },
                {
                    path: '/test',
                    component: require('./views/test'),
                    name: 'test',
                    meta: {
                        resource: 'test'
                    },
                },
                {
                    path: '/superadmin',
                    component: require('./views/superadmin'),
                    name: 'superadmin',
                    meta: {
                        resource: 'superadmin'
                    }
                },
            ]
        },
        {
            path: '/test2',
            component: require('./views/test'),
            name: 'test2',
            meta: {
                resource: 'test'
            },
        }
    ],
});
