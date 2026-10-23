/*
  Warnings:

  - You are about to drop the column `gestUserId` on the `resumes` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `resumes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[guestUserId]` on the table `resumes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userID]` on the table `resumes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `guestUserId` to the `resumes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userID` to the `resumes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resumesResumeId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "resumes" DROP CONSTRAINT "resumes_gestUserId_fkey";

-- DropForeignKey
ALTER TABLE "resumes" DROP CONSTRAINT "resumes_userId_fkey";

-- AlterTable
ALTER TABLE "resumes" DROP COLUMN "gestUserId",
DROP COLUMN "userId",
ADD COLUMN     "guestUserId" TEXT NOT NULL,
ADD COLUMN     "userID" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "resumesResumeId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "resumes_guestUserId_key" ON "resumes"("guestUserId");

-- CreateIndex
CREATE UNIQUE INDEX "resumes_userID_key" ON "resumes"("userID");

-- AddForeignKey
ALTER TABLE "resumes" ADD CONSTRAINT "resumes_guestUserId_fkey" FOREIGN KEY ("guestUserId") REFERENCES "guest_users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resumes" ADD CONSTRAINT "resumes_userID_fkey" FOREIGN KEY ("userID") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
