// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/sanity", "@nuxtjs/google-fonts"],
  app: {
    head: {
      meta: [
        {
          name: "author",
          content: "Ahmed Zaher, Lavra Tamutus",
        },
        {
          name: "description",
          content: "Homepage of HarrSoft Studio Web Development",
        },
        {
          name: "keywords",
          content:
            "web,design,fullstack,developer,node,express,vue,nuxt,nuxt3,nodejs,backend,frontend,programmer,studio",
        },
      ],
    },
    pageTransition: {
      name: "page",
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    injectPosition: "first",
    viewer: true,
  },
  sanity: {
    name: "default",
    title: process.env.NUXT_SANITY_TITLE,
    projectId: process.env.NUXT_SANITY_PID,
    dataset: process.env.NUXT_SANITY_DATASET,
  },
});
