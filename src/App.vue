<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <RouterView @toggleDark="toggleDark" :isDark="isDark" />
</template>

<style scoped></style>
