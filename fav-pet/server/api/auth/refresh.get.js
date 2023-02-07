import { sendError } from "h3";
import { getRefreshToken } from "~~/server/db/refreshTokens";
import { decodeRefreshToken, generateTokens } from "~~/server/utils/jwt";
import { getUserById } from "~~/server/db/users";

export default defineEventHandler(async (event) => {
  const refreshToken = getCookie(event, "refresh_token");

  if (!refreshToken) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Refresh Token is Invalid",
      })
    );
  }

  const rToken = await getRefreshToken(refreshToken);

  if (!rToken) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Refresh Token is Invalid",
      })
    );
  }

  const token = decodeRefreshToken(refreshToken);

  try {
    const user = await getUserById(token.userId);
    const { accessToken } = generateTokens(user);

    return {
      access_token: accessToken
    };
  } catch (error) {
    return sendError(
        event,
        createError({
          statusCode: 500,
          statusMessage: "Something went wrong",
        })
      );
  }
});
