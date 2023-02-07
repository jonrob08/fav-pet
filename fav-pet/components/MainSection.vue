<template>
    <div class="min-h-screen bg-slate-50 dark:bg-teal-900 dark:text-white">
        <header class=" dark:bg-teal-500 text-white sticky top 0 z-10">
            <section class="max-w-4xl mx-auto p-4 flex justify-between items-center">
                <nuxt-link to="/" class="text-3xl font-medium transition duration-500 scale-150 md:hover:scale-110">
                    <img class="h-8" src="../assets/img/logo-h.svg" />
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
        <main class="max-w-4xl mx-auto">
            <section class="p-0 pt-20">
                <div class="container">
                    <img src="../assets/img/afp-logo.png" class="w-full shadow-md">
                </div>
            </section>
            <section id="hero"
                class="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40">
                <article class="sm:w-1/2">
                    <h2
                        class="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white pt-20">
                        Welcome to <span class="text-amber-500 dark:text-indigo-300">America's Favorite Pet</span>
                    </h2>

                    <p class="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-300">
                        <span class="text-amber-500 dark:text-indigo-300 font-bold">One</span> charming cat and <span
                            class="text-amber-500 dark:text-indigo-300 font-bold">one</span> dashing dog will be awarded
                        the title of <span class="text-amber-500 dark:text-indigo-300 font-bold">America’s Favorite Pet
                            2023!</span> <span
                            class="block text-xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">Each
                            will be featured in a 2-page advertorial in Catster or Dogster Magazine, respectively, and
                            take home $5,000 cash. Are you ready to see your furbaby in the ultimate spotlight?</span>
                    </p>

                </article>
                <img class="w-1/2 rounded-lg"
                    src="https://www.paws.org/wp-content/uploads/2021/12/Give-Today-Puppy-2000x1200-1.jpg" alt="cutie">

            </section>

            <hr class="mx-auto bg-black dark:bg-white w-1/2">
            <hr class="mx-auto bg-black dark:bg-white w-1/2">
            <hr class="mx-auto bg-black dark:bg-white w-1/2">

            <span
                class="flex flex-col-reverse justify-center sm:flex-row p-6 items-center text-slate-700 dark:text-slate-300 mt-10">
                <p>INSPIRING STORIES</p>
            </span>
            <section id="hero"
                class="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40">

                <img class="w-1/2 rounded-2xl" src="../assets/img/featured.png" alt="">
                <article class="sm:w-1/2">
                    <h2
                        class="max-w-md text-4xl font-bold text-center sm:text-3xl sm:text-left mt-2 text-slate-900 dark:text-white">
                        <span class="text-amber-500 dark:text-indigo-300">CATSTER & DOGSTER MAGAZINE</span>
                    </h2>
                    <p class="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                        Each year, America’s Favorite Pet has given one fine feline and one handsome hound the
                        opportunity to shine in the pages of Catster and Dogster Magazine. Last year, Willow, a majestic
                        4 ½-year-old rough-coated Collie, and Tom, a cuddly 12-year-old female tabby, were able to share
                        their unique stories of rescue and resiliency.
                    </p>

                </article>

            </section>

            <hr class="mx-auto bg-black dark:bg-white w-1/2">
            <hr class="mx-auto bg-black dark:bg-white w-1/2">
            <hr class="mx-auto bg-black dark:bg-white w-1/2">

            <section class="p-10 mt-10">
                <div class="relative w-2000">
                    <img src="../assets/img/dogpet.jpeg" class="dark:opacity-50 rounded-2xl drop-shadow-2xl" />
                    <div class="text-center">
                        <h2
                            class="absolute text-black text-3xl top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                            Lending a Paw</h2>
                        <div
                            class="absolute text-lg text-black rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl bg-white dark:opacity-75 py-20 my-3">
                            <p class="px-6">
                                We are excited to partner with PAWS (Progressive Animal Welfare Society) to aid in its
                                mission to help cats, dogs, and wild animals thrive in happy, healthy homes or in their
                                natural habitats. Since 1967, PAWS has unified more than 130,000 cats and dogs with
                                loving families, nurtured more than 140,000 sick, injured, and orphaned wildlife, and
                                made the world a better place for countless critters.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="rockets" class="p-6 my-12 scroll-mt-20">
                <h2 class="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                    America's Favorite Pet
                </h2>
                <h2 class="text-3xl font-bold text-center sm:text-5xl mb-6 text-amber-500 dark:text-indigo-300">
                    Hall of Fame
                </h2>
                <ul class="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
                    <li
                        class="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl">
                        <img src="../assets/img/Willow-22.png" alt="Explorer" class="w-1/2 mb-6 rounded-xl transform hover:scale-150 transition duration-150">
                        <h3 class="text-3xl text-center text-slate-900 dark:text-white">
                            Willow '22
                        </h3>
                    </li>
                    <li
                        class="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl">
                        <img src="../assets/img/Tom-22.png" alt="Adventure" class="w-1/2 mb-6 rounded-xl transform hover:scale-150 transition duration-150">
                        <h3 class="text-3xl text-center text-slate-900 dark:text-white">
                            Tom '22
                        </h3>
                    </li>
                    <li
                        class="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl">
                        <img src="../assets/img/Raoh-21.png" alt="Infinity" class="w-1/2 mb-6 rounded-xl transform hover:scale-150 transition duration-150">
                        <h3 class="text-3xl text-center text-slate-900 dark:text-white">
                            Raoh '21
                        </h3>
                    </li>
                </ul>
                <ul class="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
                    <li
                        class="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl">
                        <img src="../assets/img/Cole-21.png" alt="Explorer"
                            class="w-1/2 mb-6 rounded-xl transform hover:scale-150 transition duration-150">
                        <h3 class="text-3xl text-center text-slate-900 dark:text-white">
                            Cole '21
                        </h3>
                    </li>

                    <li
                        class="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl">
                        <img src="../assets/img/Penelope-20.png" alt="Adventure" class="w-1/2 mb-6 rounded-xl transform hover:scale-150 transition duration-150">
                        <h3 class="text-3xl text-center text-slate-900 dark:text-white">
                            Penelope '20
                        </h3>

                    </li>
                    <li
                        class="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl">
                        <img src="../assets/img/Booger-Roux-20.png" alt="Infinity" class="w-1/2 mb-6 rounded-xl transform hover:scale-150 transition duration-150">
                        <h3 class="text-3xl text-center text-slate-900 dark:text-white">
                            Booger Roux '20
                        </h3>

                    </li>
                </ul>
            </section>

            <hr class="mx-auto bg-black dark:bg-white w-1/2">
            <hr class="mx-auto bg-black dark:bg-white w-1/2">


            <section id="contact" class="p-6 my-12">
                <Footer />
            </section>
        </main>

    </div>
</template>
<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    loading: {
        type: Boolean,
        required: true
    }
})
</script>