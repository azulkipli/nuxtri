<template>
    <div id="nuxtrinavbtm" class="btm-nav ">
        <button aria-label="btn-home" :class="activeClass('home')" @click="goTo('/')">
            <IconsHome class="w-8 h-8" />
            <span class="btm-nav-label">Home</span>
        </button>
        <button aria-label="btn-info" :class="activeClass('about')" @click="goTo('/about')">
            <IconsInfo class="w-8 h-8 icon" :class="activeClass('about')" />
            <span class="btm-nav-label">About</span>
        </button>
        <button aria-label="btn-statics" :class="activeClass('contact')" @click="goTo('/contact')">
            <IconsEmail class="w-8 h-8"/>
            <span class="btm-nav-label">Contact</span>
        </button>
    </div>
</template>
<script setup>
const router = useRouter()
const route = useRoute()
// const active = useState('active')

const goTo = (path) => {
    router.push(path)
}

const activeClass = (name) => {
    if (name === route.name)
        return 'active'
    else return ''
}

</script>
<style scoped>
#nuxtrinavbtm {
    height: auto;
    @apply py-2;
}

#nuxtrinavbtm>*:where(.active) {
    @apply border-t-[2px] border-t-transparent
}

#nuxtrinavbtm .active .icon {
    @apply text-primary
}

#nuxtrinavbtm .active .btm-nav-label {
    @apply text-primary
}

</style>