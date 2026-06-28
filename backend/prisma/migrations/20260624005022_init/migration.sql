-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dataNasc" TIMESTAMP(3) NOT NULL,
    "perfilGit" TEXT NOT NULL,
    "perfilLinkedin" TEXT NOT NULL,
    "linkPortfolio" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "biografia" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
