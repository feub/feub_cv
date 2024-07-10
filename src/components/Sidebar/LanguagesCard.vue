<script setup>
import { ref } from 'vue';

const langs = ref([
    'fr',
    'en',
    'it'
]);
</script>

<template>
    <div class="bg-white rounded-xl p-3">
        <h2 class="font-bold text-xl mb-4">Languages</h2>
        <div class="flex flex-wrap">
            <span v-for="lang in langs" :key="lang"
                class="rounded bg-feub-toned-down px-2 py-1 mr-2 mb-2 text-xs text-feub-primary hover:bg-feub-primary hover:text-white">
                {{ lang }}
            </span>
        </div>
    </div>
</template>