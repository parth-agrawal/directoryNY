/*
  Warnings:

  - You are about to drop the column `housemates` on the `userlisting` table. All the data in the column will be lost.
  - You are about to drop the column `housingtype` on the `userlisting` table. All the data in the column will be lost.
  - Added the required column `description` to the `userlisting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `housematesCount` to the `userlisting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leaselength` to the `userlisting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ALTER COLUMN "twitterHandle" SET DEFAULT '@fractaltechnyc';

-- AlterTable
ALTER TABLE "userlisting" DROP COLUMN "housemates",
DROP COLUMN "housingtype",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "housematesCount" TEXT NOT NULL,
ADD COLUMN     "leaselength" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "referral" (
    "id" TEXT NOT NULL,
    "referrerId" TEXT NOT NULL,
    "referredUser" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'pending',

    CONSTRAINT "referral_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "referral" ADD CONSTRAINT "referral_referrerId_fkey" FOREIGN KEY ("referrerId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
