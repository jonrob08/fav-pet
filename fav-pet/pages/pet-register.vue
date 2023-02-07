<template>
    <div class="min-h-screen bg-slate-50 dark:bg-teal-900 dark:text-white">
        <header class=" dark:bg-teal-500 text-white sticky top 0 z-10">
            <section class="max-w-4xl mx-auto p-4 flex justify-between items-center">
                <h1 class="text-3xl font-medium transition duration-500 scale-150 md:hover:scale-110">
                    <img class="h-8" src="../assets/img/logo-h.svg" />
                </h1>
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

        <main class="max-w-4xl mx-auto">
            <section id="hero"
                class="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40">
                <article class="sm:w-1/2">
                    <h2
                        class="max-w-md text-4xl font-bold text-center sm:text-4xl sm:text-left text-slate-900 dark:text-white pt-20">
                        Register <span class="text-amber-500 dark:text-indigo-300">Your Fur Baby!</span>
                    </h2>



                </article>

            </section>
            <section class="p-0 pt-1">
                <div class="container">
                    <img src="../assets/img/afp-logo.png" class="w-full shadow-md">
                </div>
            </section>

            <PetRegForm @onSubmit="handleFormSubmit" />


            <hr class="mx-auto bg-black dark:bg-white w-10/12">
            <hr class="mx-auto bg-black dark:bg-white w-10/12">
            <hr class="mx-auto bg-black dark:bg-white w-10/12">


            <section id="contact" class="p-6 my-12">
                <footer class="text-center py-8">
                    <div class="flex justify-center">
                        <nuxt-link to="#" class="mr-6">
                            <i class="fab fa-instagram text-2xl"></i>
                        </nuxt-link>
                        <nuxt-link to="#">
                            <i class="fab fa-facebook text-2xl"></i>
                        </nuxt-link>
                    </div>
                    <div class="mt-6 flex justify-center">
                        <nuxt-link to="#" class="mr-8">Rules</nuxt-link>
                        <nuxt-link to="#" class="mr-8">Terms</nuxt-link>
                        <nuxt-link to="#" class="mr-8">Privacy</nuxt-link>
                        <nuxt-link to="#" class="mr-8">Disclosures</nuxt-link>
                        <nuxt-link to="#" class="mr-8">Support</nuxt-link>
                        <nuxt-link to="#">Login</nuxt-link>
                    </div>
                    <div class="mt-8 text-sm">
                        General footer stuff
                    </div>
                </footer>
            </section>
        </main>

    </div>
</template>

<script setup>
const { postPet } = usePets()

const props = defineProps({
    user: {
        type: Object,
        required: true
    }
})

async function handleFormSubmit(data) {
    // console.log(data)
    try {
        const response = await postPet({
            petName: data.petName,
            email: data.email,
            mobile: data.mobile,
            image: data.image
        })
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

</script>