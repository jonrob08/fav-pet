<template>
    <header class=" dark:bg-teal-500 text-white sticky top 0 z-10">
        <section class="max-w-4xl mx-auto p-4 flex justify-between items-center">
    <nuxt-link to="/" class="text-3xl font-medium transition duration-500 scale-150 md:hover:scale-110">
      <img class="h-8 w-auto ml-10" src="../assets/img/logo-h.svg" />
    </nuxt-link>
            <div>
                <button id="mobile-open-button" class="text-3xl sm:hidden focus:outline-none">
                    &#9776
                </button>
                <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <nuxt-link to="/support"
                        class="transition duration-500 hover:scale-110 ml-8 whitespace-nowrap text-base font-medium text-black dark:text-white-100 hover:text-gray-900">
                        Support
                    </nuxt-link>
                    <nuxt-link v-if="!user" to="/login"
                        class="transition duration-500 hover:scale-110 whitespace-nowrap text-base ml-8 font-medium text-black dark:text-white-100 hover:text-gray-900">
                        Sign
                        in
                    </nuxt-link>

                    <User v-if="user" :user="user" />


                    <nuxt-link v-if="!user" to="/register"
                        class="transition duration-500 hover:scale-110 ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                        Sign up
                    </nuxt-link>
                </div>
            </div>
        </section>
    </header>
</template>

<script setup>

</script>