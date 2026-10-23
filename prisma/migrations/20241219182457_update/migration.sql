/*
  Warnings:

  - You are about to drop the `guest_users` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "TEMPLATES_ENUM" AS ENUM ('Prominent', 'Strong', 'Traditional', 'Smart', 'Trusted');

-- DropForeignKey
ALTER TABLE "resumes" DROP CONSTRAINT "resumes_guestUserId_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "resumesResumeId" DROP NOT NULL,
ALTER COLUMN "passwordResetCodeCount" DROP NOT NULL;

-- DropTable
DROP TABLE "guest_users";
