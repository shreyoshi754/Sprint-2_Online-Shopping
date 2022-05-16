/*
  Warnings:

  - Added the required column `item` to the `Cartitem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_cartId_fkey";

-- AlterTable
ALTER TABLE "Cartitem" ADD COLUMN     "item" INTEGER NOT NULL;
