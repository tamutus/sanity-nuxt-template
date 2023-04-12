<template>
  <div>
    <h1 class="text-xl my-3 font-bold">Posts</h1>
  </div>
  <div class="grid sm:grid-cols-4 md:grid-cols-2 grid-col-1 gap-5 w-screen">
    <div class="mb-[10vh]">{{ posts }}</div>
  </div>
</template>

<script setup lang="ts">
  import PortableText from '~/components/PortableText.vue';

  const query = groq`{ "posts": *[_type == "post"] }`;
  const { data: posts } = useLazySanityQuery(query);

  //meta
  definePageMeta({
    layout: 'posts',
  });
</script>

<style scoped></style>
