export default (options) => (store) => {
    if (localStorage.state) {
        const storedState = JSON.parse(localStorage.state);
        store.replaceState(Object.assign(store.state, storedState));
    }

    return store.subscribe((mutation, state) => {
        const newState = options.storedKeys.reduce((map, key) => {
            map[key] = state[key];
            return map;
        }, {});

        localStorage.state = JSON.stringify(newState);
    })
};
