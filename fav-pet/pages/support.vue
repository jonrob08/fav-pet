<template>
    <div>
      <h1>Upload Image and Display Object Data</h1>
      <form @submit.prevent="onSubmit">
        <label for="image">Select Image:</label>
        <input type="file" id="image" ref="imageInput" accept="image/*" @change="onImageSelected">
        <br><br>
        <button type="submit">Submit</button>
      </form>
      <br><br>
      <div v-if="imageData">
        <h2>Image Object Data:</h2>
        <pre>{{ imageData }}</pre>
        <img :src="imageUrl" :alt="imageData.name">
      </div>
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue';

const imageData = ref(null);
const imageUrl = ref(null);

const onImageSelected = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    imageUrl.value = reader.result;
    console.log(file)
    const fileData = {
      name: file.name,
      type: file.type,
      size: file.size,
      lastModified: file.lastModified,
    };
    imageData.value = fileData;
    alert(JSON.stringify(fileData));
  };
  reader.readAsDataURL(file);
};

const onSubmit = () => {
  // Do something with the image data when the user submits the form
};
</script>