<script setup>
import ContactCardItem from '@/components/Sidebar/ContactCardItem.vue';
import { EnvelopeIcon, PhoneIcon, CursorArrowRippleIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <div class="bg-white dark:bg-feub-secondary-dark rounded-xl p-3">
        <h2 class="font-bold text-xl mb-4 dark:text-white">Contact</h2>
        <div class="space-y-4">
            <ContactCardItem>
                <template #default>
                    <EnvelopeIcon class="size-6 text-feub-primary" />
                </template>
                <template #top>
                    fabien@feub.net
                </template>
                <template #bottom>
                    Email
                </template>
            </ContactCardItem>
            <ContactCardItem>
                <template #default>
                    <PhoneIcon class="size-6 text-feub-primary" />
                </template>
                <template #top>
                    +33 789 468 222
                </template>
                <template #bottom>
                    Téléphone
                </template>
            </ContactCardItem>
            <ContactCardItem>
                <template #default>
                    <CursorArrowRippleIcon class="size-6 text-feub-primary" />
                </template>
                <template #top>
                    <a href="https://fabienamann.me" title="fabienamann.me">fabienamann.me</a>
                </template>
                <template #bottom>
                    Website
                </template>
            </ContactCardItem>
            <ContactCardItem>
                <template #default>
                    <PhoneIcon class="size-6 text-feub-primary" />
                </template>
                <template #top>
                    3883 rte de Gérardmer<br>
                    88230 Plainfaing
                </template>
                <template #bottom>
                    Adresse
                </template>
            </ContactCardItem>
        </div>
    </div>
</template>