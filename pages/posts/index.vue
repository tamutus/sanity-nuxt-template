<template>
  <div>
    <h1 class="text-4xl my-3 font-bold">Posts</h1>
  </div>
  <div class="grid sm:grid-cols-4 md:grid-cols-2 grid-col-1 gap-5">
    <div v-for="p in posts?.posts" class="mb-[10vh]">
      <NuxtLink
        class="font-bold text-2xl underline hover:decoration-primary hover:text-primary"
        :to="`posts/${p.slug.current}`"
        >{{ p.title }}</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
  const query = groq`{ "posts": *[_type == "post"]{title, slug} }`;
  const { data: posts } = await useSanityQuery(query);
</script>

<style scoped></style>
