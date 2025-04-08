<script setup>
import { ref } from 'vue';
import { CalendarIcon } from '@heroicons/vue/24/outline';

// Reactive state for the modal
const isModalOpen = ref(false);
const selectedImage = ref(null);

const openModal = (image) => {
  selectedImage.value = image;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedImage.value = null;
};

const projects_recent = [
    {
        name: 'ClubCompta - Application de Gestion de Budget Associatif',
        description: "Ce projet, sur lequel j'ai eu le plaisir de collaborer avec une équipe talentueuse, a été réalisé dans le cadre de ma formation en Conception et Développement d’Applications à la Wild Code School. Notre objectif était de créer une interface intuitive répondant aux besoins spécifiques des associations, afin de faciliter leur gestion financière.",
        technos: 'application en micro-services, Docker, TypeScript, Apollo Server/GraphQL, Express.js, React, Slim Framework (PHP), Nodemailer, Redis',
        logoUrl: '/images/logo-clubcompta.svg',
        images: '/images/clubcompta.jpg',
        githubLink: 'https://github.com/WildCodeSchool-CDA-FT-2024-09/JS-CDA-Projet-2-Team-D'
    },
    {
        name: 'LibTrack (API)',
        description: "Projet personnel d'une API (Symfony) de gestion de collection musicale sur supports physiques (CD, vinyles, etc.) avec un client mobile (React Native) qui permet notamment de scanner les codes barre des supports physiques pour une recherche (API MusicBrainz) et un ajout rapide.",
        technos: 'Symfony 7, MySQL',
        logoUrl: '/images/libtrack-native-logo.png',
        images: '/images/libtrack-sy.png',
        githubLink: 'https://github.com/feub/libtrack-sy'
    },
    {
        name: 'LibTrack Scanner (client mobile)',
        description: "Projet personnel d'une API (Symfony) de gestion de collection musicale sur supports physiques (CD, vinyles, etc.) avec un client mobile (React Native) qui permet notamment de scanner les codes barre des supports physiques pour une recherche (API MusicBrainz) et un ajout rapide.",
        technos: 'React Native (with Expo)',
        logoUrl: '/images/libtrack-native-logo.png',
        images: [
            '/images/libtrack-native-releases.jpg',
            '/images/libtrack-native-scan.jpg',
            '/images/libtrack-native-scanning.jpg',
            '/images/libtrack-native-scan-results.jpg',
            ],
        githubLink: 'https://github.com/feub/libtrack-react-native'
    },
    // {
    //     name: 'In My Pantry',
    //     description: "Projet personnel React Native de gestion de garde-manger/frigo/buanderie, pour ne plus jamais être à court de vos aliments et produits préférés ! ",
    //     technos: 'React Native (with Expo), SQLite',
    //     logoUrl: '/images/in-my-pantry-logo.png',
    //     images: '/images/in-my-pantry-screenshot2.jpg',
    //     githubLink: 'https://github.com/feub/in-my-pantry'
    // },
    {
        name: 'Ce site CV',
        description: "Il s'agit tout bonnement de ce site. Son code est disponible sur GitHub (lien ci-dessous). Il s'agit d'un site statique en Vue.js + Tailwind, facilement personnalisable, avec mode clair/sombre 🌞 🌚",
        technos: 'Vue 3, Tailwind',
        logoUrl: '/images/fabien_amann_li.jpg',
        images: '/images/feub-cv.png',
        githubLink: 'https://github.com/feub/feub_cv'
    },
    // {
    //     name: 'Weather React',
    //     description: "Un petit site de météo responsive en React.",
    //     technos: 'React, Tailwind, OW',
    //     logoUrl: '/images/fabien_amann_li.jpg',
    //     images: '/images/feub-cv.png',
    //     githubLink: 'https://github.com/feub/weather-react'
    // },
];

const projects_older = [
    {
        name: 'Les Douces Nuits de Maé - E-commerce',
        description: "Gestion et développements d'outils internes pour 2 sites E-commerce sous Magento, puis Prestashop.",
        technos: 'Magento, Prestashop, PHP',
        logoUrl: '/images/logo-ldndm.png',
        images: '/images/ldndm.png',
        siteLink: 'https://www.lesdoucesnuitsdemae.com/'
    },
{
        name: 'Expat.com',
        description: "Conception et développement du module Événements. Développements PHP divers. Une expérience fascinante pour un site leader mondial dans son domaine, avec plusieurs millions d'utilisateurs et un fort trafic.",
        technos: 'PHP, MySQL',
        logoUrl: '/images/expat-logo.webp',
        images: '/images/expat.png',
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
                        <div v-if="Array.isArray(item.images)" class="flex flex-wrap gap-2">
                            <img
                                v-for="(image, index) in item.images"
                                :key="index"
                                class="w-24 h-24 flex-none rounded bg-gray-50 mb-2 object-cover" :src="image"
                                alt=""
                                @click="openModal(image)"
                            />
                        </div>
                        <img v-else class="w-24 h-24 flex-none rounded bg-gray-50 mb-2 object-cover" :src="item.images" alt="" @click="openModal(item.images)" />
                        <a class="text-feub-primary dark:text-white font-medium" :href="item.githubLink" target="_blank" title="Lien GitHub">Lien GitHub du projet</a>
                    </div>
                </div>
            </li>
        </ul>
        <h3 class="font-bold mb-4 dark:text-white divide-y divide-gray-100 dark:divide-feub-primary-dark">Projets plus anciens</h3>
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
                        <div v-if="Array.isArray(item.images)" class="flex flex-wrap gap-2">
                            <img
                                v-for="(image, index) in item.image"
                                :key="index"
                                class="w-24 h-24 flex-none rounded bg-gray-50 mb-2 object-cover" :src="image"
                                alt=""
                                @click="openModal(image)" />
                        </div>
                        <img v-else  class="w-24 h-24 flex-none rounded bg-gray-50 mb-2 object-cover" :src="item.images" alt="" @click="openModal(item.images)" />
                        <a class="text-feub-primary dark:text-white font-medium" :href="item.siteLink" target="_blank" title="Lien vers le site">Lien vers le site</a>
                    </div>
                </div>
            </li>
        </ul>

        <!-- Modal -->
        <div
        v-if="isModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        @click.self="closeModal"
        >
        <div class="bg-white dark:bg-gray-800 rounded-lg p-4 max-w-3xl w-full">
            <button
            class="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white"
            @click="closeModal"
            >
            ✕
            </button>
            <img :src="selectedImage" alt="Full Image" class="w-full h-auto rounded" />
        </div>
        </div>

    </div>
</template>
