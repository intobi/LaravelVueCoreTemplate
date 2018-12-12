import {API_ROUTES as API} from "../../constants";


function login(creds) {
    return new Promise((resolve, reject) => {
        axios.post(API.LOGIN, { email: creds.email, password: creds.password })
            .then((response) => {
                return resolve(response.data);
            })
            .catch((error) => {
                return reject(error);
            });
    });
}

export default {
    namespaced: true,
    state: {token: null},
    mutations: {
        set(context, data) {
            context.token = data.token;
        },
        clear(context) {
            context.token = null;
        }
    },
    actions: {
        login({ commit }, creds) {
            login(creds)
                .then((response) => {
                    commit('set', response);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        logout({ commit }) {
            commit('clear');
        }
    },
};
