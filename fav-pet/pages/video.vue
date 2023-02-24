<template>
    <div>
      <h1>Upload Video and Display Object Data</h1>
      <form @submit.prevent="onSubmit">
        <label for="video">Select Video:</label>
        <input type="file" id="video" ref="videoInput" accept="video/*" @change="onVideoSelected">
        <br><br>
        <button type="submit">Submit</button>
      </form>
      <br><br>
      <div v-if="videoData">
        <h2>Video Object Data:</h2>
        <pre>{{ videoData }}</pre>
        <video :src="videoUrl" :alt="videoData.name" controls></video>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const videoData = ref(null);
  const videoUrl = ref(null);
  
  const onVideoSelected = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      videoUrl.value = reader.result;
      const videoDataValue = {
        name: file.name,
        type: file.type,
        size: file.size,
        lastModified: file.lastModified,
      };
      videoData.value = videoDataValue;
      alert(JSON.stringify(videoDataValue));
    };
    reader.readAsDataURL(file);
  };
  
  const onSubmit = () => {
    // Do something with the video data when the user submits the form
  };
  </script>