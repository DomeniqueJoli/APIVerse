import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando");
});

app.post("/usuarios", async (req, res) => {
  try {
    const {nome, email, dataNasc, perfilGit, perfilLinkedin, linkPortfolio, senha, biografia} = req.body;
    const usuario = await prisma.usuario.create({
      data: {nome, email, dataNasc: new Date(dataNasc), perfilGit, perfilLinkedin, linkPortfolio, senha, biografia}
    });

    res.status(201).json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      erro: "Erro ao cadastrar usuário",
    });
  }
});

app.get("/usuarios", async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao buscar usuários" });
  }
});

app.post("/login", async (req, res) => {
    const { email, senha } = req.body;

    const usuario = await prisma.usuario.findUnique({
        where: {
            email
        }
    });

    if (!usuario) {
        return res.status(404).json({
            erro: "Usuário não encontrado"
        });
    }

    if (usuario.senha !== senha) {
        return res.status(401).json({
            erro: "Senha incorreta"
        });
    }

    return res.status(200).json({
        mensagem: "Login realizado com sucesso",
        usuario
    });
});

app.put("/recuperar-senha", async (req, res) => {
    const { email, senha } = req.body;

    const usuario = await prisma.usuario.findUnique({
        where: { email }
    });

    if (!usuario) {
        return res.status(404).json({
            erro: "Usuário não encontrado"
        });
    }

    const updated = await prisma.usuario.update({
        where: { email },
        data: { senha }
    });

    return res.json({
        mensagem: "Senha atualizada com sucesso",
        usuario: updated
    });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});