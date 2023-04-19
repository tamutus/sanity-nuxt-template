<template>
  <div class="illustrated-content" :style="layoutStyle">
    <div class="image-container">
      <NuxtLink
        v-if="logoSource === '/harrsoft_studio_logo.png'"
        to="/"
        title="Home page"
        ><img
          :src="logoSource"
          alt="An orange sun accompanied by the words 'HarrSoft Studio'"
          :class="`logo ${logoClass}`"
        />
      </NuxtLink>
      <img v-else :src="logoSource" :class="`logo ${logoClass}`" />
    </div>

    <slot class="content"></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  logoClass: {
    type: String,
    default: "small",
  },
  alignment: {
    type: String,
    default: "left",
  },
  logoSource: {
    type: String,
    default: "/harrsoft_studio_logo.png",
  },
});
const layoutStyle = computed(() => {
  if (props.alignment === "right") {
    return {
      "flex-flow": "row-reverse wrap-reverse",
    };
  } else if (props.alignment === "bottom") {
    return {
      "flex-flow": "column-reverse nowrap",
    };
  } else if (props.alignment === "top") {
    return {
      "flex-flow": "column nowrap",
    };
  }
});
</script>

<style scoped>
.illustrated-content {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  max-width: 100%;
}
.content {
  flex: 1 1 65%;
}
.image-container {
  flex: 0 0 20%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.logo {
  max-height: 80vh;
  max-width: 100%;
  object-fit: contain;
}

@media screen and (max-height: 280px) {
  img {
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
</style>
