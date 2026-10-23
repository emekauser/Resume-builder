/*
  Warnings:

  - You are about to drop the column `tags` on the `templates` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "templates" DROP COLUMN "tags",
ADD COLUMN     "tag" TEXT;
