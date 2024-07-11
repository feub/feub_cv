<script setup>
import TopBanner from '@/components/TopBanner.vue';
import ContactCard from '@/components/Sidebar/ContactCard.vue';
import DownloadCvCard from '@/components/Sidebar/DownloadCvCard.vue';
import HardSkillsCard from '@/components/Sidebar/HardSkillsCard.vue';
import ExtraCard from '@/components/Sidebar/ExtraCard.vue';
import LanguagesCard from '@/components/Sidebar/LanguagesCard.vue';
import ExperienceCard from '@/components/ExperienceCard.vue';
import EducationCard from '@/components/EducationCard.vue';
import AboutCard from '@/components/AboutCard.vue';
import ButtonWithIcon from '@/components/ButtonWithIcon.vue';
import { BriefcaseIcon, MoonIcon, SunIcon, AcademicCapIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';

defineEmits(['toggleDark']);
const props = defineProps({
  isDark: Boolean
});

const openToWork = ref(true);

const showExp = ref(true);
const showEdu = ref(false);

function onClickExp() {
  showExp.value = true;
  showEdu.value = false;
}

function onClickEdu() {
  showExp.value = false;
  showEdu.value = true;
}
</script>

<template>
  <!-- Banner -->
  <TopBanner :openToWork="openToWork" />

  <div class="container mx-auto max-w-6xl">
    <div class="grid sm:grid lg:grid-cols-3 gap-5 m-5">
      <!-- Sidebar -->
      <aside class="space-y-4">
        <div class="relative flex items-start justify-between bg-white dark:bg-feub-secondary-dark rounded-xl p-3">
          <div class="flex items-start gap-3">
            <img class="size-16 rounded-full" src="/images/fabien_amann_li.jpg" alt="Fabien Amann" />
            <div>
              <h1 class="font-bold text-2xl text-feub-primary dark:text-white">Fabien Amann</h1>
              <p class="text-gray-700 dark:text-gray-300">Développeur Web Full Stack</p>
            </div>
            <button class="absolute top-3 right-1">
              <MoonIcon v-if="!props.isDark" @click="$emit('toggleDark')" class="mr-2 h-5 w-5 text-feub-primary"
                aria-hidden="true" />
              <SunIcon v-if="props.isDark" @click="$emit('toggleDark')" class="mr-2 h-5 w-5 text-feub-toned-down"
                aria-hidden="true" />
            </button>
          </div>
        </div>
        <ContactCard />
        <DownloadCvCard />
        <HardSkillsCard />
        <LanguagesCard />
        <ExtraCard />
      </aside>

      <!-- Main -->
      <main class="col-span-2">
        <div class="space-y-4">
          <AboutCard />
          <div class="bg-white dark:bg-feub-secondary-dark rounded-xl p-6">
            <div class="flex justify-start gap-4">
              <ButtonWithIcon @showPart="onClickExp" :isShowing="showExp" :class="showExp ? 'text-white' : 'text-feub-primary'">
                <template #icon>
                  <BriefcaseIcon class="size-5" />
                </template>
                <template #default>
                  Experience professionnel
                </template>
              </ButtonWithIcon>
              <ButtonWithIcon @showPart="onClickEdu" :isShowing="showEdu" :class="showEdu ? 'text-white' : 'text-feub-primary'">
                <template #icon>
                  <AcademicCapIcon class="size-5" />
                </template>
                <template #default>
                  Education
                </template>
              </ButtonWithIcon>
            </div>
          </div>
          <ExperienceCard v-if="showExp" />
          <EducationCard v-if="showEdu" />
        </div>
      </main>
    </div>

    <!-- Footer -->
    <footer class="static bottom-0 m-5 p-3 bg-white dark:bg-feub-secondary-dark text-feub-toned-down dark:text-gray-400 rounded-xl text-sm font-medium">
      <div class="flex justify-between items-center">
        <div>Ce site est développé en Vue 3 + Tailwind CSS</div>
        <div>2024</div>
      </div>
    </footer>
  </div>
</template>
