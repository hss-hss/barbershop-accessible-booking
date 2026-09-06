-- CreateTable
CREATE TABLE "administradores" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "administradores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "nomeUsuarioFilho" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sesssoes" (
    "Id" TEXT NOT NULL,
    "idUsuario" TEXT NOT NULL,
    "nomeUsuarioFilho" TEXT NOT NULL,
    "dataSessao" TIMESTAMP(3) NOT NULL,
    "sessaoCombo" BOOLEAN NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "Sesssoes_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "administradores_email_key" ON "administradores"("email");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_telefone_key" ON "usuarios"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_id_nomeUsuarioFilho_key" ON "usuarios"("id", "nomeUsuarioFilho");

-- AddForeignKey
ALTER TABLE "Sesssoes" ADD CONSTRAINT "Sesssoes_nomeUsuarioFilho_idUsuario_fkey" FOREIGN KEY ("nomeUsuarioFilho", "idUsuario") REFERENCES "usuarios"("nomeUsuarioFilho", "id") ON DELETE RESTRICT ON UPDATE CASCADE;
