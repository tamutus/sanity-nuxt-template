<template>
  <div>
    <div>
      <h1 class="text-4xl my-3 font-bold">Posts</h1>
    </div>
    <div class="grid sm:grid-cols-4 md:grid-cols-2 grid-col-1 gap-5">
      <div v-for="p in posts" class="mb-[10vh]">
        <NuxtLink
          class="font-bold text-2xl underline hover:decoration-primary hover:text-primary"
          :to="`posts/${p.slug?.current}`"
          >{{ p.title }}</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { z } from "zod";
import { slugZ } from "~/utils/zod";

const trimmedPostZ = z.object({
  title: z.string().nullable(),
  slug: slugZ,
});
const postsZ = z.array(trimmedPostZ);

type Posts = z.infer<typeof postsZ>;

const posts: Ref<Posts> = ref([]);

const query = groq`*[_type == "post"]{title, slug}`;
const { data: postsResponse } = await useSanityQuery(query);
posts.value = postsZ.parse(postsResponse.value);
</script>

<style scoped></style>
