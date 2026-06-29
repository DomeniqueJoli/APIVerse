import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("API funcionando");
});

// user post
app.post("/usuarios", async (req, res) => {
  try {
      console.log("body recebido", req.body);
    const {
      nome, 
      email, 
      dataNasc, 
      perfilGit, 
      perfilLinkedin, 
      linkPortfolio, 
      senha, 
      biografia} = req.body;

    const usuario = await prisma.usuario.create({
      data: {
        nome,
        email,
        dataNasc: new Date(dataNasc),
        perfilGit, 
        perfilLinkedin, 
        linkPortfolio,
        senha, 
        biografia}
    });

    res.status(201).json(usuario);
  }catch (error) {
    console.error("erro no cads:", error);

    return res.status(500).json({
      erro: "Erro ao cadastrar usuário"
    });
  }
});

// user get
app.get("/usuarios", async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao buscar usuários" });
  }
});

// log post
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

// post senha
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

// id de perfil
app.get("/usuarios/:id/perfil", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const usuario = await prisma.usuario.findUnique({
      where: { id },
      include: { projetos: true, favoritas: true}
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

// projeto post
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

// projeto get
app.get("/projetos", async (req, res) => {
  try {
    const projetos = await prisma.projeto.findMany();
    res.json(projetos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao buscar projeto" });
  }
});

// projetos per user
app.get("/usuarios/:id/projetos", async (req, res) => {
  const id = Number(req.params.id);

  const projetos = await prisma.projeto.findMany({
    where: { usuarioId: id }
  });

  res.json(projetos);
});

// projetos per id
app.put("/projetos/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const {
      nomeProjeto,
      apiUtilizada,
      descricao,
      tecnologiaFront,
      tecnologiaBack,
      repoGitHub,
      linkDemo,
      statusProjeto,
      equipe
    } = req.body;

    const projetoExiste = await prisma.projeto.findUnique({
      where: { id }
    });

    if (!projetoExiste) {
      return res.status(404).json({ erro: "Projeto não encontrado" });
    }

    const projetoAtualizado = await prisma.projeto.update({
      where: { id },
      data: {
        nomeProjeto,
        apiUtilizada,
        descricao,
        tecnologiaFront,
        tecnologiaBack,
        repoGitHub,
        linkDemo,
        statusProjeto,
        equipe
      }
    });

    return res.json(projetoAtualizado);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: "Erro ao atualizar projeto" });
  }
});

// get projetos per id
app.get("/projetos/:id", async (req, res) => {
  const id = Number(req.params.id);

  const projeto = await prisma.projeto.findUnique({
    where: { id }
  });

  if (!projeto) {
    return res.status(404).json({ erro: "Projeto não encontrado" });
  }

  res.json(projeto);
});

// projetos delete
app.delete("/projetos/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const projetoExiste = await prisma.projeto.findUnique({where: { id }});

    if (!projetoExiste) {
      return res.status(404).json({ erro: "Projeto não encontrado" });
    }

    await prisma.projeto.delete({where: { id }});

    return res.json({ mensagem: "Projeto deletado com sucesso" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: "Erro ao deletar projeto" });
  }
});

// favs
app.post("/favoritos", async (req, res) => {
  try {
    const { usuarioId, nomeApi, descricao } = req.body;

    if (!usuarioId) {
      return res.status(400).json({ erro: "Usuário não informado" });
    }

    const favorita = await prisma.apisFavoritas.create({
      data: {
        usuarioId: Number(usuarioId),
        nomeApi,
        descricao
      }
    });

    return res.status(201).json(favorita);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: "Erro ao favoritar API" });
  }
});

// favs do user
app.get("/usuarios/:id/favoritos", async (req, res) => {
  try {
    const id = Number(req.params.id);

    const favoritas = await prisma.apisFavoritas.findMany({
      where: { usuarioId: id }
    });

    return res.json(favoritas);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: "Erro ao buscar favoritas" });
  }
});

// delete favs
app.get("/usuarios/:id/favoritos", async (req, res) => {
  try {
    const id = Number(req.params.id);

    const favoritas = await prisma.apisFavoritas.findMany({
      where: { usuarioId: id }
    });

    return res.json(favoritas);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: "Erro ao buscar favoritas" });
  }
});


const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});