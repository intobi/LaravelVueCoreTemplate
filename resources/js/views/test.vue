<template>

    <div v-if="$can('write', 'superadmin')">
       Test: SuperAdmin
    </div>
</template>

<script>
    export default {
        created() {
        }
    }
</script>

<style scoped>
</style>
