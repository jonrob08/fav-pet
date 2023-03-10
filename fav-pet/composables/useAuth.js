export default () => {
    const useAuthToken = () => useState('auth_token')
    const useAuthUser = () => useState('auth_user')
    const useAuthLoading = () => useState('auth_loading', () => true)

    const setToken = (newToken) => {
        const authToken = useAuthToken()
        authToken.value = newToken
    }

    const setUser = (newUser) => {
        const authUser = useAuthUser()
        authUser.value = newUser
    }

    const login = ({ username, password }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await $fetch('/api/auth/login', {
                    method: 'POST',
                    body: {
                        username,
                        password
                    }
                })
                setToken(data.access_token)
                setUser(data.user)
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    const refreshToken = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await $fetch('/api/auth/refresh')

                setToken(data.access_token)
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    const getUser = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await useFetchApi('/api/auth/user')

                setUser(data.user)
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }



      


    const initAuth = () => {
        return new Promise(async (resolve, reject) => {
            useAuthLoading().value = true
            try {
                await refreshToken()
                await getUser()
                resolve(true)
            } catch (error) {
                reject(error)
            } finally {
                useAuthLoading().value = false
            }
        })
    }


    const signUp = async ({ name, email, phone, competitionId, fingerprint, image }) => {
        try {
            // First, get a presigned URL for the image upload
            const presignedUrlData = { competitionId };
            const presignedUrlResponse = await $fetch('http://172.31.12.210:8081/api/registrant/presignedUrl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(presignedUrlData),
            });

            const { url, key } = await presignedUrlResponse;
            
            console.log("presigned data", presignedUrlData)
            console.log("URL>>>", url, "KEY>>>", key)

            // Then, upload the image to the presigned URL using a PUT request (should work hopefully)
            const formData = new FormData();
            formData.append('file', image);
            console.log(image)
            const uploadResponse = await $fetch(url, { method: 'PUT', body: formData });

            console.log(uploadResponse)

            // Next, send a POST request to the `/registrants` endpoint with the registrant data
            const registrantData = {
                competitionId,
                name,
                email,
                phone,
                fingerprint,
                // image: `${url}/${key}`,
            };

            console.log("data to be posted to reg >>", registrantData)
 
            const registrantResponse = await fetch('http://172.31.12.210:8081/api/registrant', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registrantData),
            });
            console.log(registrantResponse)
            const { registrantId, hashId } = await registrantResponse.json();
            console.log(registrantId)

            // Finally, send a POST request to the `/registrant-meta` endpoint with the registrant ID and image filename
            const metaKey = "image_1" // ??? Ask Jeff about this again
            const metaData = {
                // registrantId: registrant.registrantId,
                key: metaKey,
                value: key,
            };

            const metaResponse = await fetch(`http://172.31.12.210:8081/api/registrant-meta/${registrantId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(metaData),
            });

            // const result = await registrantResponse.json();
            // console.log(result);
            setToken(registrantResponse.access_token);
            setUser(registrantResponse.user);

            setTimeout(() => {
                navigateTo({
                    path: `/profile/${hashId}`
                })
            }, 2000)
            
            console.log('whoooop')
            console.log(registrantResponse.user)
            return true;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };


    return {
        login,
        useAuthUser,
        useAuthToken,
        initAuth,
        useAuthLoading,
        signUp,
    }
}