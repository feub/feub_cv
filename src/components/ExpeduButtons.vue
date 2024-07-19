<script setup>
import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/vue/24/outline';
import ButtonWithIcon from '@/components/ButtonWithIcon.vue';

const props = defineProps({
    showEdu: Boolean,
    showExp: Boolean,
});
</script>

<template>
    <div class="bg-white dark:bg-feub-secondary-dark rounded-xl p-6">
        <div class="flex justify-start gap-4">
            <ButtonWithIcon @click="$emit('onClickExp')" :isShowing="showExp"
                :class="showExp ? 'text-white' : 'text-feub-primary'">
                <template #icon>
                    <BriefcaseIcon class="size-5" />
                </template>
                <template #default>
                    Experience
                </template>
            </ButtonWithIcon>
            <ButtonWithIcon @click="$emit('onClickEdu')" :isShowing="showEdu"
                :class="showEdu ? 'text-white' : 'text-feub-primary'">
                <template #icon>
                    <AcademicCapIcon class="size-5" />
                </template>
                <template #default>
                    Education
                </template>
            </ButtonWithIcon>
        </div>
    </div>
</template>