export default defineEventHandler((event) => {
    const refreshToken = getCookie(event, 'refresh_token')

    
    return {
        hello: refreshToken
    }
})