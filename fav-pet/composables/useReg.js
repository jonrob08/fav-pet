export default () => {
    const signUp = ({id, competitionId, fp, phone, email, name}) => {
        return new Promise(async (resolve, reject) => {
            try {
                const registrantData = {
                    id,
                    competitionId,
                    name,
                    email,
                    phone,
                    // username,
                    // password,
                    // repeatPassword,
                    fp,
                  };


                  const registrantResponse = await $fetch('http://localhost:3000/registrants', {
                    method: 'POST',
                    body: registrantData,
                  });
            
                  // Extract the ID of the newly created registrant
                  const registrantId = registrantResponse.id;
            
                  // Generate a random key-value pair to include in the registrant meta data
                  const metaKey = Math.random().toString(36).substr(2, 8);
                  const metaValue = Math.random().toString(36).substr(2, 8);
            
                  // Send a POST request to the `/registrant-meta` endpoint with the registrant ID and key-value pair
                  const metaData = {
                    registrantId,
                    [metaKey]: metaValue,
                  };
                  const metaResponse = await $fetch('http://localhost:3000/registrantMeta', {
                    method: 'POST',
                    body: metaData,
                  });
            
                  // Set the token and user data based on the response from the registrant endpoint
                  setToken(registrantResponse.access_token);
                  setUser(registrantResponse.user);
            
                  resolve(true);
            } catch (error) {
                reject(error); 
            }
        })

    }

    return {
        signUp
    }
}