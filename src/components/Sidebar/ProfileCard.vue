<script setup>
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
    isDark: Boolean
});
</script>

<template>
    <div class="relative flex items-start justify-between bg-white dark:bg-feub-secondary-dark rounded-xl p-3">
        <div class="flex items-start gap-3">
            <img class="size-16 rounded-full" src="/images/fabien_amann_li.jpg" alt="Fabien Amann" />
            <div>
                <h1 class="font-bold text-2xl text-feub-primary dark:text-white">Fabien Amann</h1>
                <p class="text-gray-700 dark:text-gray-300">Développeur Web Full Stack</p>
            </div>
            <button class="absolute top-3 right-1">
                <MoonIcon v-if="!props.isDark" @click="$emit('toggleDark')" class="mr-2 h-5 w-5 text-feub-primary"
                    aria-hidden="true" />
                <SunIcon v-if="props.isDark" @click="$emit('toggleDark')" class="mr-2 h-5 w-5 text-feub-toned-down"
                    aria-hidden="true" />
            </button>
        </div>
    </div>
</template>