<script setup>
const props = defineProps({
    isShowing: Boolean
});
</script>

<template>
    <div>
        <button @click="$emit('showPart')"
            :class="props.isShowing ? 'ring-2 ring-offset-2 ring-offset-slate-50 ring-feub-toned-down  bg-feub-primary hover:bg-feub-primary/90 text-white dark:ring-offset-feub-secondary-dark' : 'bg-feub-toned-down text-white hover:bg-feub-secondary/50 dark:bg-feub-primary-dark'"
            class="flex items-center gap-2 font-medium rounded-md p-2">
            <span>
                <slot name="icon"></slot>
            </span>
            <span class="text-sm">
                <slot></slot>
            </span>
        </button>
    </div>
</template>