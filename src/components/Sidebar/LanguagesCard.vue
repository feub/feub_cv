<script setup>
import { ref } from 'vue';

const langs = ref([]);

langs.value = [{
    name: 'Français',
    skill: 'width: 100%'
},
{
    name: 'Anglais',
    skill: 'width: 75%'
},
{
    name: 'Italien',
    skill: 'width: 15%'
}];
</script>

<template>
    <div class="bg-white dark:bg-feub-secondary-dark rounded-xl p-3">
        <h2 class="font-bold text-xl mb-4 dark:text-white">Languages</h2>
        <div class="flex flex-col flex-wrap">
            <span v-for="lang in langs" :key="lang.name"
                class="rounded mr-2 mb-2 text-sm text-feub-primary dark:text-gray-300">
                {{ lang.name }}
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div class="bg-feub-primary h-2.5 rounded-full" :style="lang.skill"></div>
                </div>

            </span>
        </div>
    </div>
</template>