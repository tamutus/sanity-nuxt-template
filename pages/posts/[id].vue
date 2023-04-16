<template>
  <div class="md:max-w-[60%]">
    <h1 class="font-black text-xl">{{ post[0].title }}</h1>
    <PortableText :content="post" />
  </div>
</template>

<script setup lang="ts">
  const { id } = useRoute().params;
  const query = groq`*[_type == "post" && slug.current==$id]{...}`;
  const { data } = useSanityQuery(query, { id });
  const post = data;

  //data later
</script>
