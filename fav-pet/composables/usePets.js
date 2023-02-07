export default () => {
    const postPet = (formData) => {
        const form = new FormData()

        form.append('petName', formData.petName)
        form.append('email', formData.email)
        form.append('mobile', formData.mobile)

        formData.image.forEach((media, index) => {
            form.append('media_file_' + index, media)
        });

        return useFetchApi('api/user/pets', {
            method: 'POST',
            body: form
        })
    }

    return {
        postPet
    }
}