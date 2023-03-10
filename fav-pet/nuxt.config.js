export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  build: {
    transpile: ['@heroicons/vue']
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'profile',
        path: '/profile/:id',
        component: resolve(__dirname, '/pages/profile/[id].vue')
      })
    }
  },
  runtimeConfig: {
    // auth token
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,

    // cloudinary
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
  }
})



  
