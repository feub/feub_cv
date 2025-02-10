<script setup>
import { CalendarIcon } from '@heroicons/vue/24/outline'

const jobs = [
    {
        name: 'IDHOUSSE (e-commerce)',
        location: 'France',
        desc: "<ul class='list-disc ml-6'><li>Administration de 2 sites e-commerce Magento, puis Prestashop</li><li>Développement outils métier</li><li>Gestion du catalogue sur une quinzaine de market places (gestionnaire de flux Shopping Feed)</li></ul>",
        role: 'Développeur Web',
        imageUrl:
            '/images/logo-decoratie.png',
        period: '2015-2024',
    },
    {
        name: 'expat.com',
        location: 'Île Maurice',
        desc: "<ul class='list-disc ml-6'><li>Conception et développement du module Événements</li><li>Développements PHP divers</li></ul>",
        role: 'Développeur Full Stack',
        imageUrl:
            '/images/logo-expat.png',
        period: '2014-2015',
    },
    {
        name: 'Services on Demand',
        location: 'Italie',
        desc: "<ul class='list-disc ml-6'><li>Développement PHP outils métier de la finance</li><li>Administration système Linux et Windows</li></ul>",
        role: 'Développeur Full Stack | Sysadmin',
        imageUrl:
            '/images/logo-exelentia.png',
        period: '2010-2014',
    },
    {
        name: 'Ville de Remiremont',
        location: 'France',
        desc: "<ul class='list-disc ml-6'><li>Création du premier site internet de la ville en 1999</li><li>Administration système Linux et Windows</li><li>Développement ASP puis PHP</li><li>Support utilisateurs</li></ul>",
        role: 'Développeur Full Stack | Sysadmin',
        imageUrl:
            '/images/logo-remiremont.png',
        period: '1999-2010',
    },
    {
        name: 'Service Militaire 10ème BCS',
        location: 'Djibouti',
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
            <li v-for="job in jobs" :key="job.name">

                <div class="flex items-start mb-5">
                    <img class="h-12 w-12 shrink-0 flex-none rounded-full bg-gray-50" :src="job.imageUrl"
                        alt="{{ job.name }}" />
                    <div class="ml-3 w-full space-y-1">
                        <div class="justify-between sm:flex">
                            <div class="space-y- 1">
                                <p class="text-sm font-semibold leading-6 text-feub-primary dark:text-white">{{ job.name
                                    }}
                                </p>
                                <div class="space-y-1 sm:flex sm:space-x-5">
                                    <p class="text-gray-600 dark:text-gray-400">{{ job.location }}</p>
                                </div>
                            </div>
                            <div class="flex items-start justify-between space-y-1 sm:block sm:text-right">
                                <div
                                    class="order-last inline-flex items-center rounded-lg bg-primary-500/20 py-1 text-sm font-medium text-gray-600 dark:text-gray-300">
                                    <CalendarIcon class="size-4 shrink-0 mr-1 invisible md:visible" />
                                    <span>{{ job.period }}</span>
                                </div>
                                <div
                                    class="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300">
                                    <span v-html="job.role"></span>
                                </div>
                            </div>
                        </div>
                        <div class="text-sm text-gray-600 dark:text-gray-300" v-html="job.desc"></div>
                    </div>
                </div>

            </li>
        </ul>
    </div>
</template>
