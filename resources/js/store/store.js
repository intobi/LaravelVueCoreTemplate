import Vuex from 'vuex'

import storagePlugin from './plugins/storage';
import user from './modules/user';



export default  new Vuex.Store({
    plugins: [
        storagePlugin({
            storedKeys: ['user']
        })
    ],
    state: {
        test: false,
    },
    getters: {},
    mutations: {
        test(context, value) {
            context.test = value;
        },
    },
    actions: {
        settest({ commit }, value) {
            commit('test', value);
        }
    },
    modules: {
        user
    }
});
