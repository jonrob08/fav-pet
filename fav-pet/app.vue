<template>
  <div :class="{ 'dark': darkMode }">
    <div class="bg-white dark:bg-dim-900">

      <!-- App -->
      <div v-if="user" class="min-h-full">
        <div class="grid grid-cols-10 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
          <!--main content-->
          <main class="col-span-10">
            <router-view />
          </main>
        </div>
      </div>

      <AuthPage v-else />
    </div>
  </div>
</template>
<script setup>

const darkMode = ref(false);
const {useAuthUser, initAuth} = useAuth()
const user = useAuthUser()

onBeforeMount(() => {
  initAuth()
})

</script>

