<template>
  <div id="app-layout">
    <header class="header bg-white p-4 flex items-center px-12 sticky">
      <nav class="flex justify-between items-between w-screen">
        <NuxtLink to="/" class="font-bold">Home</NuxtLink>
        <div class="flex gap-4 self-start">
          <NuxtLink class="font-bold" to="/about">About</NuxtLink>
          <NuxtLink class="font-bold" to="/posts">Posts</NuxtLink>
        </div>
      </nav>
    </header>
    <div class="container p-4">
      <slot />
    </div>
    <footer>
      <ImageLogo logoClass="h-48 mx-8" alignment="right">
        <div>
          <p>Website created by</p>
          <p>HarrSoft Studio.</p>
          <div id="boring-links">
            <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
            <NuxtLink to="/tos">Terms of Service</NuxtLink>
          </div>
        </div>
      </ImageLogo>
    </footer>
  </div>
</template>

<style scoped>
/* #boring-links > * {
  margin-left: 1rem;
  margin-right: 1rem;
} */

.router-link-exact-active {
  @apply text-primary;
}
</style>
