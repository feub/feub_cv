<script setup>
import TopBanner from '@/components/TopBanner.vue';
import ContactCard from '@/components/Sidebar/ContactCard.vue';
import DownloadCvCard from '@/components/Sidebar/DownloadCvCard.vue';
import HardSkillsCard from '@/components/Sidebar/HardSkillsCard.vue';
import ExtraCard from '@/components/Sidebar/ExtraCard.vue';
import LanguagesCard from '@/components/Sidebar/LanguagesCard.vue';
import { ref } from 'vue';

const openToWork = ref(true);
</script>

<template>
  <TopBanner :openToWork="openToWork" />
  <div class="container mx-auto max-w-6xl">
    <div class="grid sm:grid lg:grid-cols-3 gap-5 m-5">
      <div class="space-y-4">
        <div class="flex items-start justify-between bg-white rounded-xl p-3">
          <div class="flex items-start gap-3">
            <img class="size-16 rounded-full" src="/fabien_amann_li.jpg" alt="Fabien Amann" />
            <div>
              <h1 class="font-bold text-2xl text-feub-primary">Fabien Amann</h1>
              <p class="text-gray-700">Développeur Web Full Stack</p>
            </div>
          </div>
        </div>
        <ContactCard />
        <DownloadCvCard />
        <HardSkillsCard />
        <LanguagesCard />
        <ExtraCard />
      </div>

      <div class="col-span-2">
        <div class="bg-white rounded-xl p-6">
          <h2></h2>
          <p>
            Fort de plus de 25 ans d'expérience en
            tant que développeur web full stack, j'ai
            façonné des solutions digitales pour
            diverses industries en France comme à
            l'étranger, avec une expertise dans le
            domaine du e-commerce.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
