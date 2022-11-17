<template>
    <Hero>
        <template #title>Home</template>
        <template #content>
            <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
            </p>
        </template>
        <template #action>
            <!-- <button aria-label="get-started" class="btn btn-primary">Get Started</button> -->
            <NuxtLink to="/about" aria-label="get-started" class="btn btn-primary">Get Started</NuxtLink>

        </template>
    </Hero>
</template>
<script setup>
definePageMeta({
    key: route => route.fullPath,
    name: 'home'
})

// all your favourites, fully typed
useHead({
    title: 'Home',
    titleTemplate: (title) => `${title} | NuxTri`,
    meta: [
        { name: 'description', content: 'home' },
        { name: 'keywords', content: 'home' },
    ],
})

</script>