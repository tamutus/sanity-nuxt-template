<template>
  <div class="md:max-w-[60%]">
    <h1 class="font-black text-xl">{{ post?.title }}</h1>
    <PortableText v-if="post" :content="post" />
  </div>
</template>

<script setup lang="ts">
import { PostZ } from "~/utils/zod";

const post: Ref<PostZ | null> = ref(null);

const { slug } = useRoute().params;
const query = groq`*[_type == "post" && slug.current == $slug]{..., author->}[0]`;

const { data } = await useSanityQuery(query, { slug });
console.log(data.value);
post.value = postZ.passthrough().parse(data.value);

//data later
</script>
