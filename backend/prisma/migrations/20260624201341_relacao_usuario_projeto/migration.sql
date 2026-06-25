/*
  Warnings:

  - Added the required column `usuarioId` to the `Projeto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Projeto" ADD COLUMN     "usuarioId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Projeto" ADD CONSTRAINT "Projeto_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
