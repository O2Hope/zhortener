<template>
    <div>
        <h1>Url Details: {{ id }}</h1>
    </div>
</template>

<script setup>
const {id} = useRoute().params
</script>

<style scoped>
</style>