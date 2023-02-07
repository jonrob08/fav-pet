import { prisma } from ".";

export const createImageFile = (image) => {
    return prisma.image.create({
        data: image
    })
}