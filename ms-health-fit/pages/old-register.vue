<template>
    <div class="min-h-screen bg-slate-50 dark:bg-teal-900 dark:text-white">
      <Header />
      <main class="max-w-4xl mx-auto">
        <section id="hero"
          class="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40">
          <article class="sm:w-1/2">
            <h2
              class="max-w-md text-4xl font-bold text-center sm:text-4xl sm:text-left text-slate-900 dark:text-white pt-20">
              Register <span class="text-amber-500 dark:text-indigo-300">Yourself!</span>
            </h2>
          </article>
        </section>
        <section class="p-0 pt-1">
          <div class="container">
            <img src="../assets/img/afp-logo.png" class="w-full shadow-md">
          </div>
        </section>
        <div>
          <div class="flex flex-col lg:flex-row">
            <div class="w-full lg:w-1/2 p-6">
              <div class="space-y-6">
                <UIInput label="Name" placeholder="Your full name" v-model="data.name" />
                <UIInput label="Phone Number" placeholder="111-111-1111" v-model="data.phone" />
                <UIInput label="Email" placeholder="example@email.com" v-model="data.email" />
                <!-- <UIInput label="Password" placeholder="********" type="password" v-model="data.password" />
        <UIInput label="Confirm Password" placeholder="********" type="password" v-model="data.repeatPassword" /> -->
              </div>
            </div>
            <div class="w-full lg:w-1/2 p-6">
              <UIImageInput label="upload" v-model="data.image" />
            </div>
  
          </div>
          <div class="flex flex-col items-center">
            <button @click="handleSignUp"
              class="border border-black dark:border-white bg-amber-500 rounded-xl p-3 mt-5 mb-5 px-20">Sign Up</button>
          </div>
        </div>
        <hr class="mx-auto bg-black dark:bg-white w-10/12">
        <hr class="mx-auto bg-black dark:bg-white w-10/12">
        <hr class="mx-auto bg-black dark:bg-white w-10/12">
        <section id="contact" class="p-6 my-12">
          <Footer />
    <button @click='getData'>Get visitor data</button>
  
        </section>
      </main>
  
    </div>
  </template>
  
  <script setup>
  // const { useVisitorData } = import('@fingerprintjs/fingerprintjs-pro-vue-v3');
  
  // const { d, error, isLoading, getData } = useVisitorData(
  //   { extendedResult: true },
  //   // Set to true to fetch data on mount
  //   { immediate: false }
  // );
  
  // watch(d, (currentData) => {
  //   if (currentData) {
  //     // Do something with the data
  //   }
  // });
  // // const { postReg } = useReg()
  // let currentId = 45;
  // function generateId() {
  //   return currentId++;
  // }
  
  
  const data = {
      name: '',
      email: '',
      phone: '',
      competitionId: 1,
      fingerprint: {
          visitorId: 'b7bae9334cc6fa7d3e07f45cfa8e1eb0',
          ipAddress: '81.2.69.142',
          userAgent: 'testUserAgent'
      }
  };
  
  // Initialize the agent at application startup.
  const fpPromise = import('https://openfpcdn.io/fingerprintjs/v3')
    .then(FingerprintJS => FingerprintJS.load({
      endpoint: 'https://fpcollect.fpdetection.com/fpconf/',
      params: {
        ipAddress: true,
        userAgent: true
      }
    }));
  
  // Get the visitor identifier, ipAddress and useragent when you need it.
  // fpPromise
  //   .then(fp => fp.get())
  //   .then(result => {
  //     visitorId = result.visitorId;
  //     console.log(visitorId);
  
  //     ipAddress = result.ipAddress;
  //     console.log(ipAddress);
  
  //     userAgent = result.userAgent;
  //     console.log(userAgent);
  
  //     // Assign the fingerprint value to the data object
  //     data.fp = visitorId;
  //   })
  //   .catch(error => console.error(error));
  
  
  
  async function handleSignUp() {
    // Generate a hash ID for the registrant
    // const hashId = Math.random().toString(36).substr(2, 8);
    const { signUp } = useAuth()
    data.loading = true
    try {
      await signUp({
        name: data.name,
        email: data.email,
        phone: data.phone,
        competitionId: data.competitionId,
        fingerprint: data.fingerprint
        // image: data.image
      })
  
      // Make sure the fp field is defined and has a valid value
      const fp = data.fp || ''
      console.log('fp issss:', fp)
  
    } catch (error) {
      console.log(error)
    } finally {
      data.loading = false
    }
  }
  </script>
  