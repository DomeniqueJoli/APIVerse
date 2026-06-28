-- CreateEnum
CREATE TYPE "StatusProjeto" AS ENUM ('EM_DESENVOLVIMENTO', 'MVP', 'CONCLUIDO', 'DESCONTINUADO');

-- CreateTable
CREATE TABLE "Projeto" (
    "id" SERIAL NOT NULL,
    "nomeProjeto" TEXT NOT NULL,
    "apiUtilizada" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "tecnologiaFront" TEXT NOT NULL,
    "tecnologiaBack" TEXT NOT NULL,
    "repoGitHub" TEXT NOT NULL,
    "linkDemo" TEXT NOT NULL,
    "statusProjeto" "StatusProjeto" NOT NULL,
    "equipe" TEXT NOT NULL,

    CONSTRAINT "Projeto_pkey" PRIMARY KEY ("id")
);
