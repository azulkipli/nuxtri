// https://v3.nuxtjs.org/api/configuration/nuxt.config

import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  telemetry: false,
  typescript: {
    shim: false
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
  ssr: false,
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      titleTemplate: '%s NuxTri',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'NuxtJS 3 TailwindCSS Starter.' },
        { name: 'keywords', content: 'nuxt, tailwind, css' }
      ],
    }
  }
})


