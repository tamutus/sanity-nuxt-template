<template>
  <li class="mx-2 font-bold">- {{ children[0].text }}</li>
</template>

<script setup lang="ts">
  const props = defineProps<{
    children: Span[];
  }>();
</script>

<style scoped></style>
