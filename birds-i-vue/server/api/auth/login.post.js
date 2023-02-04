import { sendError } from "h3";
import { getUser } from "~~/server/db/users";
import bcrypt from "bcrypt"
import { generateTokens } from "~~/server/utils/jwt";
import { userTransformer } from "~~/server/transformers/user";
import { createRefreshToken } from "~~/server/db/refreshTokens";


export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, password } = body;

  if (!username || !password) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid Entry" })
    );
  }
  // is user registered? 
  const user = await getUser(username)
  if (!user) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Username or Password is Invalid" })
    );
  }

  // compare passwords
  const passMatch = await bcrypt.compare(password, user.password)

  if (!passMatch) {
    return sendError(
        event,
        createError({ statusCode: 400, statusMessage: "Username or Password is Invalid" })
      );
  }
  // generate tokens
  // access token
  // refresh token
  const { accessToken, refreshToken } = generateTokens(user)

  // save it in db
  await createRefreshToken({
    token: refreshToken,
    userId: user.id
  })
  // add http only cookie


  return {
    // user: user,
    // passMatch
    access_token: accessToken,
    user: userTransformer(user)
  };
});
