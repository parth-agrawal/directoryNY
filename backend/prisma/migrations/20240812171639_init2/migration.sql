/*
  Warnings:

  - You are about to drop the column `email` on the `user` table. All the data in the column will be lost.
  - Added the required column `referredId` to the `user` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "user_email_key";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "email",
ADD COLUMN     "referredId" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL;

-- CreateTable
CREATE TABLE "userlisting" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "housingtype" TEXT NOT NULL,
    "moveInTime" TEXT NOT NULL,
    "housemates" TEXT NOT NULL,
    "website" TEXT,
    "phone" TEXT,
    "email" TEXT,

    CONSTRAINT "userlisting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "spacelisting" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "housemates" TEXT NOT NULL,
    "priceRange" TEXT NOT NULL,
    "website" TEXT,
    "image" TEXT,
    "phone" TEXT,
    "email" TEXT,

    CONSTRAINT "spacelisting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "helpform" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "FormData" JSONB NOT NULL,

    CONSTRAINT "helpform_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_referredId_fkey" FOREIGN KEY ("referredId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userlisting" ADD CONSTRAINT "userlisting_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "spacelisting" ADD CONSTRAINT "spacelisting_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "helpform" ADD CONSTRAINT "helpform_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
