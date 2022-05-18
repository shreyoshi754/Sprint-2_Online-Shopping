/*
  Warnings:

  - Made the column `orderId` on table `Orderitem` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Orderitem" DROP CONSTRAINT "Orderitem_orderId_fkey";

-- AlterTable
ALTER TABLE "Orderitem" ALTER COLUMN "orderId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Orderitem" ADD CONSTRAINT "Orderitem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
