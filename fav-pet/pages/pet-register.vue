<template>
    <div class="min-h-screen bg-slate-50 dark:bg-teal-900 dark:text-white">
        <Header />
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
                <Footer />
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