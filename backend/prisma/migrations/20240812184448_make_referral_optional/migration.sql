-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_referredId_fkey";

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "referredId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_referredId_fkey" FOREIGN KEY ("referredId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
