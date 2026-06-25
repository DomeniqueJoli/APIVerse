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


app.post("/projetos", async (req, res) => {
  try {
    const { nomeProjeto, apiUtilizada, descricao, tecnologiaFront, tecnologiaBack, repoGitHub, linkDemo, statusProjeto, equipe, usuarioId } = req.body;

    if (!usuarioId) {
      return res.status(400).json({ erro: "Usuário não informado" });
    }

    const usuarioExiste = await prisma.usuario.findUnique({
      where: { id: Number(usuarioId) }
    });

    if (!usuarioExiste) {
      return res.status(404).json({ erro: "Usuário não existe" });
    }

    const projeto = await prisma.projeto.create({
      data: {
        nomeProjeto,
        apiUtilizada,
        descricao,
        tecnologiaFront,
        tecnologiaBack,
        repoGitHub,
        linkDemo,
        statusProjeto,
        equipe,
        usuarioId: Number(usuarioId)
      }
    });

    return res.status(201).json(projeto);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: "Erro ao cadastrar projeto" });
  }
});

app.get("/projetos", async (req, res) => {
  try {
    const projetos = await prisma.projeto.findMany();
    res.json(projetos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao buscar projeto" });
  }
});

app.get("/usuarios/:id/perfil", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const usuario = await prisma.usuario.findUnique({
      where: { id },
      include: { projetos: true }
    });

    if (!usuario) {
      return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    return res.json(usuario);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: "Erro ao buscar perfil" });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});