<template>
                    <div class="w-full md:w-3/12 md:ml-3">
                    <div class="mb-6">
                        <label class="block text-gray-700 font-medium mb-2 ml-20 dark:text-white flex items-center mx-auto items-center">{{ props.label }}</label>
                        <div class="relative">
                            <template v-if="inputImageUrl">
                                <img :src="inputImageUrl" alt="">
                            </template>
                            <template v-else>
                                <svg @click="handleImageClick" xmlns="http://www.w3.org/2000/svg" width="160"
                                    height="160" fill="currentColor"
                                    class="bi bi-camera border border-cyan-900 rounded-xl p-5 ml-20 dark:border-white hover:bg-amber-500 cursor-pointer"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                                    <path
                                        d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                                </svg>
                            </template>
                            <input 
                 type="file" ref="imageInput" hidden
                                accept="image/png, image/jpeg, image/jpg, image/svg, video/mp4" @change="handleFileUpload">
                        </div>
                    </div>

                </div>

</template>
<script setup>

const imageInput = ref(null)
const selectedFile = ref(null)
const inputImageUrl = ref(null)

const emits = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: null
  }
})

function handleImageClick() {
  imageInput.value.click()
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



</script>



