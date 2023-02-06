import { prisma } from ".";

export const createPet = (petData) => {
    return prisma.pet.create({
        data: petData
    })
}