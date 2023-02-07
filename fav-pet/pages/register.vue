<template>
  <div>
    <div class="pt-5 space-y-6">
      <!-- <h2> {{ data.username }}</h2> -->
      <UIInput label="Name" placeholder="Your name" v-model="data.name" />
      <!-- <h2> {{ data.username }}</h2> -->
      <UIInput label="Username" placeholder="@username" v-model="data.username" />
      <!-- <h2> {{ data.email }}</h2> -->
      <UIInput label="Email" placeholder="example@email.com" v-model="data.email" />
      <!-- <h2> {{ data.password }}</h2> -->
      <UIInput label="Password" placeholder="********" type="password" v-model="data.password" />
      <!-- <h2> {{ data.confirmPassword }}</h2> -->
      <UIInput label="Confirm Password" placeholder="********" type="password" v-model="data.repeatPassword" />

      <div>
        <button @click="handleSignUp">Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = reactive({
  name: '',
  username: '',
  email: '',
  password: '',
  repeatPassword: '',
  loading: false
})

async function handleSignUp() {
  const { signUp } = useAuth()
  data.loading = true
  try {
    await signUp({
      username: data.username,
      email: data.email,
      password: data.password,
      repeatPassword: data.repeatPassword,
      name: data.name
    })
  } catch (error) {
    console.log(error)
  } finally {
    data.loading = false
  }
}
</script>