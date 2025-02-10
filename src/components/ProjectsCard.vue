<script setup>
import { CalendarIcon } from '@heroicons/vue/24/outline';

const projects_recent = [
    {
        name: 'ClubCompta - Application de Gestion de Budget Associatif',
        description: "Ce projet, sur lequel j'ai eu le plaisir de collaborer avec une équipe talentueuse, a été réalisé dans le cadre de ma formation en Conception et Développement d’Applications à la Wild Code School. Notre objectif était de créer une interface intuitive répondant aux besoins spécifiques des associations, afin de faciliter leur gestion financière.",
        technos: 'application en micro-services, Docker, TypeScript, Apollo Server/GraphQL, Express.js, React, Slim Framework (PHP), Nodemailer, Redis',
        logoUrl: '/images/logo-clubcompta.svg',
        imageUrl: '/images/clubcompta.jpg',
        githubLink: 'https://github.com/WildCodeSchool-CDA-FT-2024-09/JS-CDA-Projet-2-Team-D'
    },
    {
        name: 'In My Pantry',
        description: "Projet personnel très récent en React Native de gestion de garde-manger/frigo/buanderie, pour ne plus jamais être à court de vos aliments et produits préférés ! ",
        technos: 'React Native (with Expo), SQLite',
        logoUrl: '/images/in-my-pantry-logo.png',
        imageUrl: '/images/in-my-pantry-screenshot2.jpg',
        githubLink: 'https://github.com/feub/in-my-pantry'
    },
    {
        name: 'Ce site CV',
        description: "Il s'agit tout bonnement de ce site. Son code est disponible sur GitHub (lien ci-dessous). Il s'agit d'un site statique en Vue.js + Tailwind, facilement personnalisable, avec mode clair/sombre 🌞 🌚",
        technos: 'Vue 3, Tailwind',
        logoUrl: '/images/fabien_amann_li.jpg',
        imageUrl: '/images/feub-cv.png',
        githubLink: 'https://github.com/feub/feub_cv'
    },
    // {
    //     name: 'Weather React',
    //     description: "Un petit site de météo responsive en React.",
    //     technos: 'React, Tailwind, OW',
    //     logoUrl: '/images/fabien_amann_li.jpg',
    //     imageUrl: '/images/feub-cv.png',
    //     githubLink: 'https://github.com/feub/weather-react'
    // },
];

const projects_older = [
    {
        name: 'Les Douces Nuits de Maé - E-commerce',
        description: "Gestion et développements d'outils internes pour 2 sites E-commerce sous Magento, puis Prestashop.",
        technos: 'Magento, Prestashop, PHP',
        logoUrl: '/images/logo-ldndm.png',
        imageUrl: '/images/ldndm.png',
        siteLink: 'https://www.lesdoucesnuitsdemae.com/'
    },
{
        name: 'Expat.com',
        description: "Conception et développement du module Événements. Développements PHP divers. Une expérience fascinante pour un site leader mondial dans son domaine, avec plusieurs millions d'utilisateurs et un fort trafic.",
        technos: 'PHP, MySQL',
        logoUrl: '/images/expat-logo.webp',
        imageUrl: '/images/expat.png',
        siteLink: 'https://www.expat.com/'
    },
];
</script>

<template>
    <div class="bg-white dark:bg-feub-secondary-dark rounded-xl p-6 mt-6">
        <h2 class="font-bold text-xl mb-4 dark:text-white">Portfolio</h2>
        <h3 class="font-bold mb-4 dark:text-white">Projets récents</h3>
        <ul role="list" class="divide-y divide-gray-100 dark:divide-feub-primary-dark">
            <li v-for="item in projects_recent" :key="item.email" class="flex justify-between gap-x-6 py-5">
                <div class="flex min-w-0 gap-x-4">
                    <img class="h-12 w-12 flex-none rounded bg-gray-50" :src="item.logoUrl" alt="" />
                    <div class="min-w-0 flex-auto">
                        <p class="text-sm font-semibold leading-6 text-gray-500 dark:text-white">{{ item.name }}</p>
                        <p class="mt-2 mb-2 text-sm leading-5 text-gray-500 dark:text-gray-300">
                            <span class="font-bold">Technologies</span> : <span class="italic" v-html="item.technos"></span>
                        </p>
                        <p class="mt-2 mb-2 text-sm leading-5 text-gray-500 dark:text-gray-300">
                            <span v-html="item.description"></span>
                        </p>
                        <img class="flex-none rounded bg-gray-50 mb-2" :src="item.imageUrl" alt="" />
                        <a class="text-feub-primary dark:text-white font-medium" :href="item.githubLink" target="_blank" title="Lien GitHub">Lien GitHub du projet</a>
                    </div>
                </div>
            </li>
        </ul>
        <h3 class="font-bold mb-4 dark:text-white divide-y divide-gray-100 dark:divide-feub-primary-dark">Projets et sites plus anciens</h3>
        <ul role="list" class="divide-y divide-gray-100 dark:divide-feub-primary-dark">
            <li v-for="item in projects_older" :key="item.email" class="flex justify-between gap-x-6 py-5">
                <div class="flex min-w-0 gap-x-4">
                    <img class="h-12 w-12 flex-none rounded bg-gray-50" :src="item.logoUrl" alt="" />
                    <div class="min-w-0 flex-auto">
                        <p class="text-sm font-semibold leading-6 text-gray-500 dark:text-white">{{ item.name }}</p>
                        <p class="mt-2 mb-2 text-sm leading-5 text-gray-500 dark:text-gray-300">
                            <span class="font-bold">Technologies</span> : <span class="italic" v-html="item.technos"></span>
                        </p>
                        <p class="mt-2 mb-2 text-sm leading-5 text-gray-500 dark:text-gray-300">
                            <span v-html="item.description"></span>
                        </p>
                        <img class="flex-none rounded bg-gray-50 mb-2" :src="item.imageUrl" alt="" />
                        <a class="text-feub-primary dark:text-white font-medium" :href="item.siteLink" target="_blank" title="Lien vers le site">Lien vers le site</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
