<template>
    <div class="container px-6">
        <Counter />
    </div>
</template>
<script setup>
definePageMeta({
    key: route => route.fullPath,
    name: 'counter'
})

// all your favourites, fully typed
useHead({
    title: 'Counter',
    titleTemplate: (title) => `${title} | NuxTri`,
    meta: [
        { name: 'description', content: 'counter' },
        { name: 'keywords', content: 'counter' },
    ],
})

</script>