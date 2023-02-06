<template>
    <div>
        <section>
                <div class="flex flex-col md:flex-row">
                <div class="w-full md:w-5/12 md:ml-2">
                    <div class="mb-6">
                        <label class="block text-gray-700 font-medium mb-2 dark:text-white">Name</label>
                        <input v-model="petName" class="form-input w-full text-black" type="text" name="petName" id="registration_name" placeholder="Your pet's name"
                            spellcheck="false" autocomplete="name" autocorrect="off" >
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 font-medium mb-2 dark:text-white">Email</label>
                        <input v-model="email" class="form-input w-full text-black" type="email" name="email" id="registration_email"
                            placeholder="Your email" spellcheck="false" autocomplete="email" autocorrect="off"
                            autocapitalize="off">
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 font-medium mb-2 dark:text-white">Mobile Phone</label>
                        <input v-model="mobile" class="form-input w-full text-black" type="tel" name="mobile" id="registration_phone" placeholder="Your phone number"
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
                            <svg @click="handleImageClick" xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="currentColor"
                                class="bi bi-camera border border-cyan-900 p-5 ml-20 dark:border-white hover:bg-amber-500 cursor-pointer" viewBox="0 0 16 16">
                                <path
                                    d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                                <path
                                d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                            </svg>
                            <input type="file" ref="imageInput" hidden
                                accept="image/png, image/jpeg, image/jpg, image/svg"
                            >
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
        </div>
</template>

<script setup>
const imageInput = ref('')
const emits = defineEmits(['onSubmit'])
const petName = ref('')
const email = ref('')
const mobile = ref('')
const props = defineProps({
    user: {
        type: Object,
        required: true
    }
})

function handleFormSubmit () {
    emits('onSubmit', {
        petName: petName.value,
        email: email.value,
        mobile: mobile.value
    })
}

function handleImageClick(){
    // alert('works')
    imageInput.value.click()
}
</script>