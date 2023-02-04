import UrlPattern from "url-pattern"

export default defineEventHandler(async (event) => {
    const endpoints = [
        'api/auth/user'
    ]
    const isHandledByMiddleware = endpoints.some(endpoint => {
        const pattern = new UrlPattern(endpoint)

        return pattern.match(event.node.req.url)
    })

    if (!isHandledByMiddleware) {
        return
    }

    const token = event.req.headers['authorization']?.split(' ')[1]

    const decoded = decodeAccessToken(token)
})