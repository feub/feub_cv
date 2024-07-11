<script setup>
const props = defineProps({
    isShowing: Boolean
});
</script>

<template>
    <div>
        <button @click="$emit('showPart')"
            :class="props.isShowing ? 'bg-feub-primary text-white' : 'bg-feub-toned-down'"
            class="flex  items-center gap-2 hover:bg-gray-200 hover:text-feub-primary font-medium text-feub-primary rounded-md p-2">
            <span>
                <slot name="icon"></slot>
            </span>
            <span class="text-sm">
                <slot></slot>
            </span>
        </button>
    </div>
</template>