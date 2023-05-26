<template>
  <NuxtLink :to="`/products/${posts.id}`">
    <div
      class="text-center grid place-content-center rounded-2xl shadow-md max-w-[90vw] w-[500px] h-[500px]"
    >
      <p class="max-w-[70%] m-auto line-clamp-2">
        {{ posts }}
      </p>
    </div>
  </NuxtLink>
  <div></div>
</template>

<script setup lang="ts">
const props = defineProps(["posts"]);
</script>

<style scoped>
.thumb {
  max-height: 330px;
  min-height: 230px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
