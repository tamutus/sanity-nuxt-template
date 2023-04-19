<template>
  <div class="relative mx-auto m-3 w-[full]">
    <SanityImage
      class="sm:max-w-[20vw] max-w-[50vw] object-cover"
      :asset-id="asset._ref"
      auto="format"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  asset: Reference;
}>();
</script>

<style scoped></style>
