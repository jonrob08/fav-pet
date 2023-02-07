import formidable from "formidable"
import { createPet } from "~~/server/db/pets"
import { petTransformer } from "~~/server/transformers/pet"
import { createImageFile } from "~~/server/db/imageFiles"
import { uploadToCloudinary } from "~~/server/utils/cloudinary"

export default defineEventHandler(async (event) => {
    const form = formidable({})
    const response = await new Promise((resolve, reject) => {
        
            form.parse(event.req, (err, fields, files) => {
                if (err) {
                    reject(err)
                }
                resolve({fields, files})
            })

    })

    const { fields, files } = response

    const userId = event.context?.auth?.user?.id

    const petData = {
        petName: fields.petName,
        owner: {
          connect: { id: userId }
        },
        email: fields.email,
        mobile: fields.mobile
      };
      
      const pet = await createPet(petData)

      const imagePromises = Object.keys(files).map(async key => {
        const file = files[key]

        const cloudinaryResource = await uploadToCloudinary(file.filepath)

        console.log(response)

        return createImageFile({
            url: cloudinaryResource.secure_url,
            providerPublicId: cloudinaryResource.public_id,
            userId: userId,
            petId: pet.id
        })
      })

      await Promise.all(imagePromises)

    return {
        pet: petTransformer(pet)
    }
})