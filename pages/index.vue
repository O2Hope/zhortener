<template>
    <div class="flex flex-1 flex-col items-center w-full gap-6">
        <Shortener />
        <LatestLinks />
    </div>
</template>

<script setup>

const {data} = await useFetch('https://jsonplaceholder.typicode.com/todos/1')
console.log(data)
</script>

<style scoped>
</style>