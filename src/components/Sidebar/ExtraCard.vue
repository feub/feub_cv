<script setup>
import { ref } from 'vue';

const hobbies = ref([
    'Photo', 'Vidéo', 'Trail', 'Nature', 'Environnement', 'Ecologie', 'Musculation', 'Yoga', 'Méditation', 'Lecture', 'Cinéma', 'Musique', 'Art'
]);
</script>

<template>
    <div class="bg-white rounded-xl p-3">
        <h2 class="font-bold text-xl mb-4">Extra-professionnel</h2>
        <div class="flex flex-wrap">
            <span v-for="items in hobbies" :key="items"
                class="rounded bg-feub-toned-down px-2 py-1 mr-2 mb-2 text-xs text-feub-primary hover:bg-feub-primary hover:text-white">
                {{ items }}
            </span>
        </div>
    </div>
</template>