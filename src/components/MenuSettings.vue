<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon, EllipsisHorizontalIcon, MoonIcon, LanguageIcon } from '@heroicons/vue/20/solid'
</script>

<template>
    <div class="absolute top-1 right-1 text-right">
        <Menu as="div" class="relative inline-block text-left">
            <div>
                <MenuButton
                    class="inline-flex w-full justify-center rounded-lg bg-gray-100 px-0.5  text-gray-5400 focus:outline-none dark:bg-night-700 dark:text-night-200 dark:hover:bg-night-600">
                    <EllipsisHorizontalIcon class="h-5 w-5 text-violet-200 hover:text-violet-100" aria-hidden="true" />
                </MenuButton>
            </div>

            <transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <MenuItems
                    class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div class="px-1 py-1">
                        <MenuItem v-slot="{ active }">
                        <button :class="[
                            active ? 'bg-feub-toned-down text-white' : 'text-gray-900',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]">
                            <MoonIcon :active="active" class="mr-2 h-5 w-5 text-feub-primary" aria-hidden="true" />
                            Dark mode
                        </button>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                        <button :class="[
                            active ? 'bg-feub-toned-down text-white' : 'text-gray-900',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]">
                            <LanguageIcon :active="active" class="mr-2 h-5 w-5 text-feub-primary" aria-hidden="true" />
                            Language
                        </button>
                        </MenuItem>
                    </div>
                </MenuItems>
            </transition>
        </Menu>
    </div>
</template>