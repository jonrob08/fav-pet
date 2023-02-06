import formidable from "formidable"
import { createPet } from "~~/server/db/pets"

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

    return {
        pet: pet
    }
})