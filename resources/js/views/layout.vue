<template>
    <div>
        <can I="read" a="test">
            <div v-for="route in routes">
                <router-link :to="{name: route.name}"> {{ route.name }}  </router-link>
                <router-link :to="{name: route.name}"> {{ route.name }}  </router-link>
            </div>
            <br><br>
        </can>
        <router-view/>
    </div>
</template>

<script>
    export default {
        created() {
        },
        computed: {
            routes: function() {
                return this.allRoutes(this.$router.options.routes);
            }
        },
        methods: {
            allRoutes($routes) {
                let routes = [];

                _.each($routes, (value) => {
                    if (value.children == null)
                        routes = _.union(routes, [{
                            path: value.path,
                            name: value.name
                        }]);
                    else {
                        routes = _.union(routes, this.allRoutes(value.children));
                    }
                });

                return routes;
            }
        }
    }
</script>

<style scoped>

</style>
