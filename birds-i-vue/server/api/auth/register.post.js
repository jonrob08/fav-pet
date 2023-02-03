import { sendError } from "h3";
import { createUser } from "~~/server/db/users";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { username, password, repeatPassword, email, name } = body;

  if (!username || !email || !password || !repeatPassword || !name) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid Entry" })
    );
  }

  if (password !== repeatPassword) {
    return sendError(event, createError({statusCode: 400, statusMessage: "Passwords Do Not Match" }))
  }

  const userData = {
    username,
    email,
    password,
    name,
    profileImage: 'https://picsum.photos/200/200'
  }

  const user = await createUser(userData)

  return {
    body: user,
  };
});
