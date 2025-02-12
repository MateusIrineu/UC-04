import prompt from 'prompt-sync';

import { alunos } from "../../../config/database.js";
import { AlunoModel } from "../models/index.js";
import bcrypt from "bcrypt";

export class AlunoController {
  // Create - criando o aluno no array alunos
  criar(matricula, nome, email, senha) {
    try {
      const senhaHash = bcrypt.hashSync(senha, 10);
      const novoAluno = new AlunoModel(matricula, nome, email, senha = senhaHash );
      alunos.push(novoAluno);
      console.table(novoAluno);
    } catch (error) {
      console.error("Erro ao tentar criar aluno", error.message);
    }
  }

  editar(matricula, novoNome, novoEmail, novaSenha) {
    try {
      const aluno = alunos.find((aluno) => aluno.getMatricula === matricula);
      if (!aluno) {
        return console.log("Aluno não encontrado!");
      }
      aluno.nome = novoNome || aluno.nome;
      aluno.email = novoEmail || aluno.email;
      // Se nova senha for informada, criptografa-a
      aluno.senha = novaSenha ? bcrypt.hashSync(novaSenha, 10) : aluno.senha;
      
      return console.table(aluno);
    } catch (error) {
      console.error("Erro ao tentar atualizar o aluno", error.message);
    }
  }

  deletarPorMatricula(matricula) {
    try {
      const index = alunos.findIndex((aluno) => aluno.getMatricula === matricula);
      if (index === -1) {
        return console.log("Aluno não encontrado");
      }
      alunos.splice(index, 1);
      console.log("Aluno excluido com sucesso!");
    } catch (error) {
      console.error("Erro ao tentar excluir o aluno", error.message);
    }
  }

  deletarTodos() {
    try {
      alunos.length = 0;
      console.log("Todos os alunos excluidos!");
    } catch (error) {
      console.error("Erro ao tentar excluir todos os alunos", error.message);
    }
  }

  listaPorMatricula(matricula) {
    try {
      const aluno = alunos.find((aluno) => aluno.getMatricula === matricula);
      if (!aluno) {
        return console.log("Aluno não encontrado");
      }
      console.table(aluno);
    } catch (error) {
      console.error("Erro ao tentar exibir o aluno", error.message);
    }
  }

  listarTodos() {
    try {
      if (alunos.length === 0) {
        return console.log("Não existe alunos a serem exibidos!");
      }
      console.table(alunos);
    } catch (error) {
      console.error("Erro ao tentar exibir os alunos", error.message);
    }
  }
}


function menuAlunos() {
  const imput = prompt();
  const opcoes = [
    "1 - Criar novo aluno",
    "2 - Editar aluno",
    "3 - Deletar matrícula",
    "4 - Deletar todos",
    "5 - Listar por matrícula",
    "6 - Listar todos"
  ]
  const menu = opcoes.join("\n");
  console.log(menu);
  let opcao = imput("Escolha a opção desejada: ");
  console.log//
}