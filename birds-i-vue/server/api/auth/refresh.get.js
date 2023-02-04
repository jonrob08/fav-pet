import { sendError } from "h3"
import { getRefreshToken } from "~~/server/db/refreshTokens";
import { decodeRefreshToken } from "~~/server/utils/jwt";

export default defineEventHandler(async (event) => {
    const refreshToken = getCookie(event, 'refresh_token')

    if (!refreshToken) {
        return sendError(
            event,
            createError({ statusCode: 401, statusMessage: "Refresh Token is Invalid" })
          );
    }

    const rToken = await getRefreshToken(refreshToken)

    if (!rToken) {
        return sendError(
            event,
            createError({ statusCode: 401, statusMessage: "Refresh Token is Invalid" })
          );
    }

    const token = decodeRefreshToken(refreshToken)

    return {
        hello: token
    }
})