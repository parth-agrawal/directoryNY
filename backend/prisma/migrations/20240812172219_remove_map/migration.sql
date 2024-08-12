/*
  Warnings:

  - You are about to drop the `userlisting` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "userlisting" DROP CONSTRAINT "userlisting_user_id_fkey";

-- DropTable
DROP TABLE "userlisting";

-- CreateTable
CREATE TABLE "UserListing" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "housingtype" TEXT NOT NULL,
    "moveInTime" TEXT NOT NULL,
    "housemates" TEXT NOT NULL,
    "website" TEXT,
    "phone" TEXT,
    "email" TEXT,

    CONSTRAINT "UserListing_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserListing" ADD CONSTRAINT "UserListing_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
