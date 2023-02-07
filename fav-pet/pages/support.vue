<template>
    <div class="min-h-screen bg-slate-50 dark:bg-teal-900 dark:text-white">
        <Header />
        <main class="max-w-4xl mx-auto">
            <section>
                <div class="text-center">
                    <button @click="selected = 'one'">Button One</button>
                    <button @click="selected = 'two'">Button Two</button>
                    <button @click="selected = 'three'">Button Three</button>
                </div>
                <hr />
                <div v-if="selected === 'one'">
                    <h3>Button One was pressed</h3>
                    <p>Accordions for button one go here</p>
                    <Accordion />
                </div>
                <div v-if="selected === 'two'">
                    <h3>Button Two was pressed</h3>
                    <p>Accordions for button two go here</p>
                </div>
                <div v-if="selected === 'three'">
                    <h3>Button Three was pressed</h3>
                    <p>Accordions for button three go here</p>
                </div>
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

</script>