<script setup>
import { ref } from 'vue';

const hardSkills = ref([
    'Javascript', 'TypeScript', 'Node', 'Express', 'GraphQL', 'Apollo Server', 'React', 'GIT', 'Docker', 'VS Code', 'PHP', 'Laravel', 'Symfony', 'SQL', 'NoSQL', 'React Native', 'Vue 3', 'HTML', 'CSS', 'Wordpess', 'Prestashop', 'Magento', 'Tailwind CSS', 'Bootstrap', 'Linux', 'Nginx', 'Apache', 'Few more things...'
]);
</script>

<template>
    <div class="bg-white dark:bg-feub-secondary-dark rounded-xl p-3">
        <h2 class="font-bold text-xl mb-4 dark:text-white">Compétences</h2>
        <div class="flex flex-wrap">
            <span v-for="items in hardSkills" :key="items"
                class="rounded bg-feub-primary px-2 py-1 mr-2 mb-2 text-xs cursor-default text-white hover:bg-feub-secondary">
                {{ items }}
            </span>
        </div>
    </div>
</template>