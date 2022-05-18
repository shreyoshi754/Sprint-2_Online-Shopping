/*
  Warnings:

  - You are about to drop the column `price` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `item` on the `Cartitem` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Cartitem` table. All the data in the column will be lost.
  - You are about to drop the column `cartId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `cartitemId` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Cart` will be added. If there are existing duplicate values, this will fail.
  - Made the column `userId` on table `Cart` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `productId` to the `Cartitem` table without a default value. This is not possible if the table is not empty.
  - Made the column `cartId` on table `Cartitem` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_userId_fkey";

-- DropForeignKey
ALTER TABLE "Cartitem" DROP CONSTRAINT "Cartitem_cartId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_cartitemId_fkey";

-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "price",
ADD COLUMN     "totalPrice" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Cartitem" DROP COLUMN "item",
DROP COLUMN "price",
ADD COLUMN     "productId" INTEGER NOT NULL,
ALTER COLUMN "cartId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "cartId",
DROP COLUMN "cartitemId";

-- CreateIndex
CREATE UNIQUE INDEX "Cart_userId_key" ON "Cart"("userId");

-- AddForeignKey
ALTER TABLE "Cartitem" ADD CONSTRAINT "Cartitem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cartitem" ADD CONSTRAINT "Cartitem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
