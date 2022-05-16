-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "cartAddId" INTEGER;

-- CreateTable
CREATE TABLE "CartAdd" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "CartAdd_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_cartAddId_fkey" FOREIGN KEY ("cartAddId") REFERENCES "CartAdd"("id") ON DELETE SET NULL ON UPDATE CASCADE;
