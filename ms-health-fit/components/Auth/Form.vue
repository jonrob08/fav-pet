<template>
    <div>
        <div class="pt-5 space-y-6">
            <!-- <h2> {{ data.username }}</h2> -->
            <UIInput label="Username" placeholder="@username" v-model="data.username" />
            <!-- <h2> {{ data.password }}</h2> -->
            <UIInput label="Password" placeholder="********" type="password" v-model="data.password"/>

            <div class="flex items-center">
            <button class="mx-auto bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" @click="handleLogin">Login</button>
        </div>
        </div>
    </div>
</template>
<script setup>
const data = reactive({
    username: '',
    password: '',
    loading: false
})

async function handleLogin() {
    const { login } = useAuth()
    // alert(JSON.stringify(data))
    data.loading = true
    try {
        await login({
            username: data.username,
            password: data.password
        })
    } catch (error) {
        console.log(error)
    } finally {
        data.loading = false
    }
}
</script>