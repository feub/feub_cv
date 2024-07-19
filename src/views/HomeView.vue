<script setup>
import TopBanner from '@/components/TopBanner.vue';
import ProfileCard from '@/components/Sidebar/ProfileCard.vue';
import ContactCard from '@/components/Sidebar/ContactCard.vue';
import DownloadCvCard from '@/components/Sidebar/DownloadCvCard.vue';
import HardSkillsCard from '@/components/Sidebar/HardSkillsCard.vue';
import ExtraCard from '@/components/Sidebar/ExtraCard.vue';
import LanguagesCard from '@/components/Sidebar/LanguagesCard.vue';
import ExperienceCard from '@/components/ExperienceCard.vue';
import EducationCard from '@/components/EducationCard.vue';
import AboutCard from '@/components/AboutCard.vue';
import ExpeduButtons from '@/components/ExpeduButtons.vue';
import TheFooter from '@/components/TheFooter.vue';
import { ref } from 'vue';

const emit = defineEmits(['toggleDark', 'onClickExp', 'onClickEdu']);
const toggleDarkEmit = () => {
  emit('toggleDark')
}

const props = defineProps({
  isDark: Boolean
});

const openToWork = ref(false);

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
    <div class="sm:grid lg:grid-cols-3 gap-5 m-5">
      <!-- Sidebar -->
      <aside class="space-y-5 mb-4">
        <ProfileCard @toggleDark="toggleDarkEmit" />
        <ContactCard />
        <DownloadCvCard />
        <HardSkillsCard />
        <LanguagesCard />
        <ExtraCard />
      </aside>

      <!-- Main -->
      <main class="col-span-2">
        <div class="space-y-5">
          <AboutCard />
          <ExpeduButtons @onClickExp="onClickExp" @onClickEdu="onClickEdu" :showExp="showExp" :showEdu="showEdu" />
          <ExperienceCard v-if="showExp" />
          <EducationCard v-if="showEdu" />
        </div>
      </main>
    </div>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>
