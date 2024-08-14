/*
  Warnings:

  - You are about to drop the column `referredId` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[referralCode]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - The required column `referralCode` was added to the `user` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_referredId_fkey";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "referredId",
ADD COLUMN     "referralCode" TEXT NOT NULL,
ADD COLUMN     "referredById" TEXT;

-- CreateTable
CREATE TABLE "referral" (
    "id" TEXT NOT NULL,
    "referrerId" TEXT NOT NULL,
    "referredUser" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'pending',

    CONSTRAINT "referral_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_referralCode_key" ON "user"("referralCode");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_referredById_fkey" FOREIGN KEY ("referredById") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "referral" ADD CONSTRAINT "referral_referrerId_fkey" FOREIGN KEY ("referrerId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
