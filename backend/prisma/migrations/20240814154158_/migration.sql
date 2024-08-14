/*
  Warnings:

  - You are about to drop the column `clerkId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[firebaseId]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "user_clerkId_key";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "clerkId",
DROP COLUMN "name",
ADD COLUMN     "displayName" TEXT NOT NULL DEFAULT 'Twitter Friend',
ADD COLUMN     "firebaseId" TEXT,
ADD COLUMN     "profilePicture" TEXT NOT NULL DEFAULT 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/f068d325-7a1f-4b06-a3ce-9cd8bab3f632/DALLE_2024-01-26_18.29.54_-_Create_a_highly_simplified_and_minimalist_pixelated_vector_illustration_of_a_1990s_computer_setup_inspired_by_Susan_Kares_iconic_design_style._The_i/w=256,quality=90,fit=scale-down',
ADD COLUMN     "twitterHandle" TEXT NOT NULL DEFAULT '@nyctech';

-- CreateIndex
CREATE UNIQUE INDEX "user_firebaseId_key" ON "user"("firebaseId");
