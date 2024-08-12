/*
  Warnings:

  - You are about to drop the `UserListing` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserListing" DROP CONSTRAINT "UserListing_user_id_fkey";

-- DropTable
DROP TABLE "UserListing";

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

-- AddForeignKey
ALTER TABLE "userlisting" ADD CONSTRAINT "userlisting_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
