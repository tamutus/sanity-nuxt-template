<template>
  <div>
    <PortableText :content="post" />
  </div>
</template>

<script setup lang="ts">
  const { id } = useRoute().params;
  const query = groq`*[_type == "post" && slug.current==$id]{...}`;
  const { data } = await useSanityQuery(query, { id });
  const post = data;

  //data later
</script>
