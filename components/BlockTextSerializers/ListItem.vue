<template>
  <li class="m-2 font-semibold" v-for="c in children">{{ c.text }}</li>
</template>

<script setup lang="ts">
  const props = defineProps<{
    children: Span[];
  }>();
</script>

<style scoped></style>
