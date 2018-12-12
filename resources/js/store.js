import Vuex from 'vuex'

export default  new Vuex.Store({

    plugins: [],
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
        },
    },
    modules: {}
});
