<script setup>
import { CalendarIcon } from '@heroicons/vue/24/outline'

const jobs = [
    {
        name: 'IDHOUSSE (e-commerce)',
        desc: "<ul class='list-disc ml-6'><li>Administration de 2 sites e-commerce Magento, puis Prestashop</li><li>Développement outils métier</li><li>Gestion du catalogue sur une quinzaine de market places (gestionnaire de flux Shopping Feed)</li></ul>",
        role: 'Développeur Web',
        imageUrl:
            '/images/logo-decoratie.png',
        period: '2015-2024',
    },
    {
        name: 'expat.com (Île Maurice)',
        desc: "<ul class='list-disc ml-6'><li>Création et développement du module Événements</li><li>Développements PHP divers</li></ul>",
        role: 'Développeur Full Stack',
        imageUrl:
            '/images/logo-expat.png',
        period: '2014-2015',
    },
    {
        name: 'Services on Demand (Italie)',
        desc: "<ul class='list-disc ml-6'><li>Développement PHP outils métier de la finance</li><li>Administration système Linux et Windows</li></ul>",
        role: 'Développeur Full Stack | Sysadmin',
        imageUrl:
            '/images/logo-exelentia.png',
        period: '2010-2014',
    },
    {
        name: 'Ville de Remiremont',
        desc: "<ul class='list-disc ml-6'><li>Création du premier site internet de la ville en 1999</li><li>Administration système Linux et Windows</li><li>Développement ASP puis PHP</li><li>Support utilisateurs</li></ul>",
        role: 'Développeur Full Stack | Sysadmin',
        imageUrl:
            '/images/logo-remiremont.png',
        period: '1999-2010',
    },
    {
        name: 'Service Militaire 10ème BCS (Djibouti)',
        desc: "<ul class='list-disc ml-6'><li>Création et administration d’une base de données Microsoft Access de gestion du personnel militaire.</li></ul>",
        role: 'Développement Microsoft Access | Bureautique',
        imageUrl:
            '/images/logo-10bcs.png',
        period: '1999',
    },
]
</script>

<template>
    <div class="bg-white dark:bg-feub-secondary-dark rounded-xl p-6">
        <h2 class="font-bold text-xl mb-4 dark:text-white">Expérience professionnelle</h2>
        <ul role="list" class="divide-y divide-gray-100 dark:divide-feub-primary-dark">
            <li v-for="job in jobs" :key="job.email" class="flex justify-between gap-x-6 py-5">
                <div class="flex items-start min-w-0 gap-x-4">
                    <img class="h-12 w-12 flex-none rounded-full bg-gray-50" :src="job.imageUrl" alt="" />
                    <div class="w-full sm:flex">
                        <div class="min-w-0 flex items-start">
                            <p class="text-sm font-semibold leading-6 text-gray-500 dark:text-white">{{ job.name }}</p>
                            <p class="mt-1 text-sm leading-5 text-gray-500 dark:text-gray-300">
                                <span v-html="job.desc"></span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p class="text-sm leading-6 text-gray-900 dark:text-white">{{ job.role }}</p>
                    <div v-if="job.period" class="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-300">
                        <div class="flex items-center gap-2">
                            <CalendarIcon class="size-4" /> {{ job.period }}
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
