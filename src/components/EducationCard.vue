<script setup>
import { CalendarIcon } from '@heroicons/vue/24/outline'

const edu = [
    {
        name: 'DUT I.S.I. (Informatique et Systèmes Industriels)',
        school: "Université H. Poincaré Nancy I, St-Dié (88)",
        imageUrl:
            '/images/logo-iutsdie.png',
        period: '1995-1997',
    },
    {
        name: 'Baccalauréat Scientifique (Bac E)',
        school: "Lycée André Malraux, Remiremont (88)",
        imageUrl:
            '/images/logo-malraux.png',
        period: '1990-1995',
    },
]
</script>

<template>
    <div class="bg-white dark:bg-feub-secondary-dark rounded-xl p-6">
        <h2 class="font-bold text-xl mb-4 dark:text-white">Education</h2>
        <ul role="list" class="divide-y divide-gray-100 dark:divide-feub-primary-dark">
            <li v-for="item in edu" :key="item.email" class="flex justify-between gap-x-6 py-5">
                <div class="flex min-w-0 gap-x-4">
                    <img class="h-12 w-12 flex-none rounded-full bg-gray-50" :src="item.imageUrl" alt="" />
                    <div class="min-w-0 flex-auto">
                        <p class="text-sm font-semibold leading-6 text-gray-500 dark:text-white">{{ item.name }}</p>
                        <p class="mt-1 text-sm leading-5 text-gray-500 dark:text-gray-300">
                            <span v-html="item.school"></span>
                        </p>
                    </div>
                </div>
                <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p class=" flex gap-1 items-center text-sm leading-6 text-gray-500 dark:text-gray-300">
                        <CalendarIcon class="size-4" /> {{ item.period }}
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>
