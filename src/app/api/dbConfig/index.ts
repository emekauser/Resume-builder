import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const db = globalThis.prismaGlobal ?? prismaClientSingleton()

export default db 

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = db
// here we are putting prisma on the global object which mean, the next time this files runs,
//it check if prisma instance is already on the global object, 
//and if it is,  it will not instantiate it again, else it will instantiate it.
// this prevent prisma instantiation over and over again
