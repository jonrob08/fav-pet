<template>

  </template>

  <script setup>
  const route = useRoute();
    
    const getRegistrant = () => {
        return new Promise(async (resolve, reject) => {
           
          try {
            const id = route.params.id || 25;
      
            const data = await $fetch(`http://172.31.12.210:8081/api/registrant/alt/${id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
            
            setUser(data.user)
            console.log(data)
            resolve(true)
          } catch (error) {
            reject(error)
          }
        })
      }

</script>