<template>
  <div class="min-h-screen bg-slate-50 dark:bg-teal-900 dark:text-white">
    <div class="text-3xl font-medium flex justify-center items-center">
  <img class="h-80 w-auto" src="../assets/img/hers-logo-2.png" />
</div>

    <main class="max-w-4xl mx-auto">
      <div class="flex justify-center items-center">
  <section id="hero" class="flex flex-col-reverse justify-center sm:flex-row mx-auto items-center gap-3 mb-12 scroll-mt-40">
    <article class="">
      <h2 class="max-w-md text-4xl font-bold text-center sm:text-4xl mx-auto  text-slate-900 dark:text-white pt-20">
        <span class="text-sky-500 dark:text-indigo-300">Free</span> To Register
      </h2>
      <p class="text-center mx-auto mt-10">One woman will be featured on the cover of Muscle & Fitness HERS Magazine and take home $20,000 in cash. Do you have the strength and determination to take the title? Register below for consideration.</p>
    </article>
  </section>
</div>


      <section class="p-0 pt-1">

      </section>
      <form method="post">
        <div class="flex flex-col lg:flex-row">
          <div class="w-full lg:w-1/2 p-6">
            <div class="space-y-6">
              <UIInput label="Name" placeholder="Your full name" v-model="data.name" />
              <UIInput label="Email" placeholder="example@email.com" v-model="data.email" />
              <UIInput label="Phone Number" placeholder="111-111-1111" v-model="data.phone" />
            </div>
            <span class="text-slate-400 text-xs">When you provide us with your mobile phone number, you agree that we may send you text messages to that phone number. Message and data rates may apply.</span>
          </div>
          <div class="w-full lg:w-1/2 p-6">
            <div class="w-full md:w-3/12 md:ml-3">
        <div class="mb-6">
            <label
                class="block text-gray-700 font-medium mb-2 ml-20 dark:text-white flex items-center mx-auto items-center">Image Upload</label>
            <div class="relative">
                <template v-if="inputImageUrl">
                    <img :src="inputImageUrl" alt="">
                </template>
                <template v-else>
                    <svg @click="handleImageClick" xmlns="http://www.w3.org/2000/svg" width="160" height="160"
                        fill="currentColor"
                        class="bi bi-camera border border-cyan-900 rounded-xl p-5 ml-20 dark:border-white hover:bg-amber-500 cursor-pointer"
                        viewBox="0 0 16 16">
                        <path
                            d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                        <path
                            d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                    </svg>
                </template>
                <input type="file" ref="imageInput" hidden accept="image/png, image/jpeg, image/jpg, image/svg, video/mp4"
                    @change="handleFileUpload">
                <div class="p-4 pl-16">

                    <img :src="inputImageUrl" v-if="inputImageUrl" alt="" class="border rounded-2xl"
                        :class="twitterBorderColor">

                    <input type="file" ref="imageInput" hidden accept="image/png, image/gif, image/jpeg"
                        @change="handleImageChange">

                </div>
            </div>
        </div>

    </div>
          </div>

        </div>
        <div class="flex flex-col items-center">
          <button @click="handleSignUp" v-on:click.prevent="validate"
            class="border border-black dark:border-white bg-sky-500 rounded-xl p-3 mt-5 mb-5 px-20">Submit</button>
        </div>
      </form>
      <hr class="mx-auto bg-black dark:bg-white w-10/12">
      <hr class="mx-auto bg-black dark:bg-white w-10/12">
      <hr class="mx-auto bg-black dark:bg-white w-10/12">
      <section id="contact" class="p-6 my-12">
        <Footer />

      </section>
    </main>

  </div>

  <!-- Modal  -->
<div id="success-modal" class="hidden">
  <div class="fixed inset-0 flex items-center justify-center z-50 m-auto">
      <div class="flex items-end justify-center max-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                <!-- Heroicon name: check -->
                <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white" id="modal-title">
                  Registration Successful!
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    You have successfully registered.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" @click="navigateToProfile" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
              Go to Profile
            </button>
            <!-- <button type="button" @click="$emit('close')" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Close
            </button> -->
          </div>
        </div>
      </div>
    </div>
</div>
  

</template>

<script setup>

const imageInput = ref(null)
const selectedFile = ref(null)
const inputImageUrl = ref(null)

const emits = defineEmits(['onSubmit'])
const text = ref('')

function handleImageClick() {
    imageInput.value.click()
}

function handleFileUpload () {
           // debugger;
            console.log("selected file", )
            //Upload to server
        }

function handleImageChange(event) {
    const file = event.target.files[0]
    selectedFile.value = file

    const reader = new FileReader()
    reader.onload = (event) => {
        inputImageUrl.value = event.target.result
    }
    reader.readAsDataURL(file)
}

function handleFormSubmit() {
   
}

const data = {
    name: '',
    email: '',
    phone: '+',
    competitionId: 1,
    // Find solution for fingerprints
    fingerprint: {
        visitorId: 'b7bae9334cc6fa7d3e07f45cfa8e1eb0',
        ipAddress: '81.2.69.142',
        userAgent: 'testUserAgent'
    },
    image: ''
};


async function handleSignUp() {
  const { signUp } = useAuth()
  try {
    emits('onSubmit', {
        text: text.value,
        mediaFiles: [selectedFile.value]
    })
    console.log('ye!!!')

    const success = await signUp({
      name: data.name,
      email: data.email,
      phone: data.phone,
      competitionId: data.competitionId,
      fingerprint: data.fingerprint,
      image: selectedFile.value

    })

    // const success = true

    if (success) {
        // Show success modal and navigate to profile page after 2 seconds
        const modal = document.getElementById('success-modal')
        modal.classList.add('block')
        modal.classList.remove('hidden')
        

        setTimeout(() => {
            navigateTo({
                path: `/profile`
            })
        }, 2000)
      
      console.log('Signup Successful')
    }
  } catch (error) {
    console.log(error)
  }
}

const navigateToProfile = () => {
            push({ name: 'profile' })
            $emit('close')
          }
</script>
