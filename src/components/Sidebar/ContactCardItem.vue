<script setup>

</script>

<template>
    <div class="flex items-center justify-between">
        <div class="flex gap-3">
            <slot name="default"></slot>
            <div class="text-feub-secondary text-sm">
                <div class="text-feub-primary font-medium">
                    <slot name="top"></slot>
                </div>
                <div class="text-gray-400">
                    <slot name="bottom"></slot>
                </div>
            </div>
        </div>
    </div>
</template>