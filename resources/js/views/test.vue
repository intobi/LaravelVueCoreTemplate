<template>
    <div v-if="$can('write', 'superadmin')">
       SuperAdmin
    </div>
</template>

<script>
    export default {
        created() {
            console.log(123);
        }
    }
</script>

<style scoped>
</style>
