<script setup>
import { ref } from 'vue';

const hobbies = ref([
    'Lecture', 'Cinéma', 'Musique', 'Art', 'Musculation', 'Trail', 'Nature', 'Environnement', 'Ecologie', 'Yoga', 'Méditation', 'Photo', 'Vidéo', 
]);
</script>

<template>
    <div class="bg-white dark:bg-feub-secondary-dark rounded-xl p-3">
        <h2 class="font-bold text-xl mb-4 dark:text-white">Extra-professionnel</h2>
        <div class="flex flex-wrap">
            <span v-for="items in hobbies" :key="items"
                class="rounded bg-feub-toned-down px-2 py-1 mr-2 mb-2 text-xs cursor-default text-feub-primary hover:bg-feub-primary hover:text-white">
                {{ items }}
            </span>
        </div>
    </div>
</template>