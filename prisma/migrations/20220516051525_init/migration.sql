/*
  Warnings:

  - You are about to drop the column `cartAddId` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the `CartAdd` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cartitemId` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_cartAddId_fkey";

-- DropForeignKey
ALTER TABLE "Cart" DROP CONSTRAINT "Cart_userId_fkey";

-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "cartAddId",
DROP COLUMN "price",
ADD COLUMN     "cartitemId" INTEGER NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "cartitemId" INTEGER;

-- DropTable
DROP TABLE "CartAdd";

-- CreateTable
CREATE TABLE "Cartitem" (
    "id" SERIAL NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Cartitem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_cartitemId_fkey" FOREIGN KEY ("cartitemId") REFERENCES "Cartitem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_cartitemId_fkey" FOREIGN KEY ("cartitemId") REFERENCES "Cartitem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
