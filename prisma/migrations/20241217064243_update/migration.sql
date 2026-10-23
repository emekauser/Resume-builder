/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `passwordResetCodeCount` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'MODERATOR');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "banned" BOOLEAN,
ADD COLUMN     "birthday" TIMESTAMP(3),
ADD COLUMN     "dateOfBirth" TIMESTAMP(3),
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "emailIsVerify" BOOLEAN,
ADD COLUMN     "emailVerificationCode" TEXT,
ADD COLUMN     "emailVerificationCreatedAt" TIMESTAMP(3),
ADD COLUMN     "emailVerificationDate" TIMESTAMP(3),
ADD COLUMN     "emailVerificationExpiration" TIMESTAMP(3),
ADD COLUMN     "firstName" VARCHAR(255),
ADD COLUMN     "gender" "Gender",
ADD COLUMN     "hasImage" BOOLEAN,
ADD COLUMN     "lastName" VARCHAR(255),
ADD COLUMN     "lastSignInAt" TIMESTAMP(3),
ADD COLUMN     "password" VARCHAR(255) NOT NULL,
ADD COLUMN     "passwordEnabled" BOOLEAN,
ADD COLUMN     "passwordResetCode" TEXT,
ADD COLUMN     "passwordResetCodeCount" INTEGER NOT NULL,
ADD COLUMN     "passwordResetCodeCreatedAt" TIMESTAMP(3),
ADD COLUMN     "passwordResetCodeUpdatedAt" TIMESTAMP(3),
ADD COLUMN     "phoneNumbers" TEXT,
ADD COLUMN     "twoFactorEnabled" BOOLEAN,
ADD COLUMN     "userImage" BYTEA;

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
