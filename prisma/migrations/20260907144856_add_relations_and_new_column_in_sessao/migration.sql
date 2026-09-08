/*
  Warnings:

  - Added the required column `horarioSessao` to the `Sesssoes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sesssoes" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "horarioSessao" TEXT NOT NULL;
