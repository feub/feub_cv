<script setup>
import ContactCardItem from '@/components/Sidebar/ContactCardItem.vue';
import { ArrowDownOnSquareIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <div class="bg-white dark:bg-feub-secondary-dark rounded-xl p-3">
        <h2 class="font-bold text-xl mb-4 dark:text-white">Télécharger CV</h2>
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <div class="flex gap-3">
                    <ArrowDownOnSquareIcon class="size-6 text-feub-primary" />
                    <div class="text-sm">
                        <div class="text-feub-primary dark:text-white font-medium">
                            <a href="/docs/CV_Fabien_Amann_2024.pdf" target="_blank">Cliquer ici</a>
                        </div>
                        <div class="text-gray-400">
                            PDF
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>