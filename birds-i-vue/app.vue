<template>
  <div :class="{'dark': darkMode}">
    <h1 class="text-red-500 dark:text-dim-800">Birds i Vue</h1>
  </div>
</template>
<script setup>

    const darkMode = ref(true);

</script>

