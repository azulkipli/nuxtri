<template>
    <div class="hero min-h-screen" style="background-image: url(https://placeimg.com/1000/800/nature);">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">Meet Us</h1>
                <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    key: route => route.fullPath,
    name: 'about'
})

// all your favourites, fully typed
useHead({
    title: 'About',
    titleTemplate: (title) => `${title} | NuxTri`,
    meta: [
        { name: 'description', content: 'about' },
        { name: 'keywords', content: 'about' },
    ],
})

</script>