import {prisma} from "."

export const createRefreshToken = (refreshToken) => {
    return prisma.refreshToken.create({
        data: refreshToken
    })
}

export const getRefreshToken = (token) => {
    return prisma.refreshToken.findUnique({
        where: {
            token
        }
    })
}