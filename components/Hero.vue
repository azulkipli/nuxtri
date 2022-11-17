<template>
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
            <div class="sm:max-w-sm md:max-w-md">
                <h1 class="text-5xl font-bold">
                    <slot name="title" />
                </h1>
                <slot name="content" />
                <slot name="action" />
            </div>
        </div>
    </div>
</template>