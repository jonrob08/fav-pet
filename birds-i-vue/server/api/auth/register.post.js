export default defineEventHandler(async (event) => {
    // useBody is now readBody!!
    const body = await readBody(event)
    // tested this on postman
    // http://localhost:3000/api/auth/register
    // {
    //     "username": "dev",
    //     "password": "password",
    //     "repeatPassword": "password",
    //     "email": "jon@gmail.com",
    //     "name": "jon"
    // }

    const { username, password, repeatPassword, email, name } = body

    return {
        body: body
    }
})