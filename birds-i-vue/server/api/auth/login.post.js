import { sendError } from "h3";
import { getUser } from "~~/server/db/users";
import bcrypt from "bcrypt"


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

  return {
    user: user,
    passMatch
  };
});
