<template>
    <div :class="{ 'dark': darkMode.dark }">
        <MainSection title="Home" :loading="loading" :darkMode="darkMode">
            <PetRegForm :user="user" />
        </MainSection>
    </div>
</template>
<script setup>
const loading = ref(false)
const darkMode = reactive({dark: false});
const { useAuthUser } = useAuth()

const user = useAuthUser()
</script>