<template>
  <header class="header bg-white p-4 flex items-center w-screen px-12">
    <nav class="flex justify-between items-between w-screen">
      <NuxtLink to="/" class="font-bold">Home</NuxtLink>
      <div class="flex gap-4 self-start">
        <NuxtLink class="font-bold" to="/about">About</NuxtLink>
        <NuxtLink class="font-bold" to="/posts">Posts</NuxtLink>
      </div>
    </nav>
  </header>
  <div class="container p-4 min-w-screen">
    <slot />
  </div>
</template>

<style scoped>
  .router-link-exact-active {
    @apply text-primary;
  }
</style>
