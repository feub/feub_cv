<script setup>
const props = defineProps({
    isShowing: Boolean
});
</script>

<template>
    <div>
        <button @click="$emit('showPart')"
            :class="props.isShowing ? 'ring-feub-secondary ring-2 ring-offset-2 ring-offset-feub-secondary bg-feub-primary text-white dark:bg-feub-primary-dark hover:bg-feub-primary-dark/50' : 'bg-feub-primary text-feub-toned-down hover:bg-feub-secondary'"
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