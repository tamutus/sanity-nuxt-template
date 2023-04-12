<template>
  <div class="mb-20 mx-auto w-auto ml-10">
    <SanityContent :blocks="content[0].body" :serializers="serializers" />
  </div>
</template>

<script lang="ts">
  import Image from '~/components/BlockTextSerializers/Image.vue';
  import ListItem from '~/components/BlockTextSerializers/ListItem.vue';
  import { h } from 'vue';

  export default {
    props: ['content'],
    setup(props) {
      const blockContent = props.content;
      const blocks = [blockContent];
      const serializers = {
        types: {
          image: Image,
        },
        marks: {
          link: h('a', {
            class: 'underline decoration-black hover:decoration-primary',
            rel: 'noreferrer noopener',
          }),
        },
        styles: {
          h1: h('h1', {
            class: 'py-10 text-5xl font-black ',
          }),
          h2: h('h2', {
            class: 'py-10 text-4xl font-bold',
          }),
          h3: h('h3', {
            class: 'py-10 text-3xl font-bold',
          }),
          h4: h('h4', {
            class: 'py-10 text-2xl font-bold',
          }),
          normal: h('p', {
            class: 'py-2 text-l font-normal',
          }),
          blockquote: h('blockquote', {
            class: 'my-5 border-l-4 border-l-primary py-5 pl-5',
          }),
        },
        listItem: ListItem,
      };
      return { blocks, serializers };
    },
  };
</script>

<style scoped>
  ul {
    list-style-position: outside;
    list-style-type: disc;
    @apply ml-5;
  }
</style>
