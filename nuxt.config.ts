// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  telemetry: false,
  ssr: false,
  experimental: {
    payloadExtraction: false
  },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      titleTemplate: ` NuxTri`,
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'NuxtJS 3 TailwindCSS Starter.' },
        { name: 'keywords', content: 'nuxt, tailwind, css' }
      ],
    }
  },
})
