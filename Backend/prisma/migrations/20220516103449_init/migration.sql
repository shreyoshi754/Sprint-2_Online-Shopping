/*
  Warnings:

  - You are about to drop the column `cartitemId` on the `Cart` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_cartitemId_fkey";

-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "cartitemId";

-- AlterTable
ALTER TABLE "Cartitem" ADD COLUMN     "cartId" INTEGER;

-- AddForeignKey
ALTER TABLE "Cartitem" ADD CONSTRAINT "Cartitem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE SET NULL ON UPDATE CASCADE;
