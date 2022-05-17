/*
  Warnings:

  - Added the required column `item` to the `Cartitem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Cartitem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cartitem" ADD COLUMN     "item" INTEGER NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;
