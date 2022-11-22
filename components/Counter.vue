<script setup>
const counter = useState('counter', () => Math.round(Math.random() * 10))
</script>

<template>
  <div class="p-2">
    <div class="p-1">Counter: {{ counter }}</div>
    <button class="px-3 border mx-1" @click="counter++">
      +
    </button>
    <button class="px-3 border mx-1" @click="counter--">
      -
    </button>
  </div>
</template>
