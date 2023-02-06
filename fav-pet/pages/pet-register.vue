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
            <section>
                <div class="flex flex-col md:flex-row">
                <div class="w-full md:w-5/12 md:ml-2">
                    <div class="mb-6">
                        <label class="block text-gray-700 font-medium mb-2 dark:text-white">Name</label>
                        <input v-model="petName" class="form-input w-full text-black" type="text" name="name" id="registration_name" placeholder="Your pet's name"
                            spellcheck="false" autocomplete="name" autocorrect="off" >
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 font-medium mb-2 dark:text-white">Email</label>
                        <input class="form-input w-full text-black" type="email" name="email" id="registration_email"
                            placeholder="Your email" spellcheck="false" autocomplete="email" autocorrect="off"
                            autocapitalize="off">
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 font-medium mb-2 dark:text-white">Mobile Phone</label>
                        <input class="form-input w-full text-black" type="tel" name="phone" id="registration_phone" placeholder="Your phone number"
                            spellcheck="false" autocomplete="tel" autocorrect="off" autocapitalize="off">
                        <p class="text-gray-600 text-xs dark:text-white">
                            When you provide us with your mobile phone number, you agree that we may send you text
                            messages to that phone number. Message and data rates may apply.
                        </p>
                    </div>
                </div>
                <div class="w-full md:w-3/12 md:ml-3">
                    <div class="mb-6">
                        <label class="block text-gray-700 font-medium mb-2 ml-20 dark:text-white">Pet photo</label>
                        <div class="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor"
                                class="bi bi-camera border border-cyan-900 p-5 ml-20 dark:border-white " viewBox="0 0 16 16">
                                <path
                                    d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                                <path
                                    d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                            </svg>
                            <form enctype="multipart/form-data" style="display:none;">
                                <input class="file-upload" name="file" type="file" accept="image/*">
                            </form>
                            <input type="hidden" value="" id="registration_photo">
                        </div>
                    </div>
                    <div class="flex items-center justify-center">

            </div>
                </div>
                
            </div>
            </section>

            <section class="md:w-3/4 md:ml-auto mb-6 flex text-center">
                <div>
                    <br>
                    <div>
                        <button @click="handleFormSubmit()" class="border border-black dark:border-white bg-amber-500 p-3 px-20">Submit</button>
                    </div>

                    <br>
                    <p class="text-center">
                        By registering you agree to our <a href="/rules" class="text-lowercase">rules</a>, <a href="/terms" class="text-lowercase">terms</a>, and <a href="/privacy" class="text-lowercase">privacy policy</a>.
                    </p>
                </div>
            </section>



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
const petName = ref('')
const props = defineProps({
    user: {
        type: Object,
        required: true
    }
})

function handleFormSubmit () {
    alert(JSON.stringify({
        petName: petName.value
    }))
}
</script>