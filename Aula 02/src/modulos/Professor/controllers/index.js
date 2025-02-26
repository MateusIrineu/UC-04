import prompt from 'prompt-sync';

import { professores } from '../../../config/database.js';
import { ProfessorModel } from '../models/index.js';

export class ProfessorController {
    criar(matricula, nome, telefone, email, turma, disciplina, senha) {
        try {
            const novoProfessor = new ProfessorModel(matricula, nome, telefone, email, turma, disciplina, senha);
            professores.push(novoProfessor);
            console.table(novoProfessor);
        } catch (error) {
            console.error("Erro ao tentar criar professor", error.message);
        }
    }

    editar(matricula, novoNome, novoTelefone, novoEmail, novaTurma, novaDisciplina, novaSenha) {
        try {
            const professor = professores.find((professor) => professor.getMatricula === matricula);
            if (!professor) {
                return console.log("Professor não encontrado!");
            }
            professor.nome = novoNome || professor.nome;
            professor.telefone = novoTelefone || professor.telefone;
            professor.email = novoEmail || professor.email;
            professor.turma = novaTurma || professor.turma;
            professor.disciplina = novaDisciplina || professor.disciplina;
            professor.senha = novaSenha || professor.senha;

            return console.table(professor);
        } catch (error) {
            console.error("Erro ao tentar atualizar o professor", error.message);
        }
    }

    deletarPorMatricula(matricula) {
        try {
            const index = professores.findIndex((professor) => professor.getMatricula === matricula);
            if (index === -1) {
                return console.log("Professor não encontrado");
            }
            professores.splice(index, 1);
            console.log("Professor excluido com sucesso!");
        } catch (error) {
            console.error("Erro ao tentar excluir o professor", error.message);
        }
    }

    deletarTodos() {
        try {
            professores.length = 0;
            console.log("Todos os professores foram excluídos!");
        } catch (error) {
            console.error("Erro ao tentar excluir todos os professores", error.message);
        }
    }

    listarPorMatricula(matricula) {
        try {
            const professor = professores.find((professor) => professor.getMatricula === matricula);
            if (!professor) {
                return console.log("Professor não encontrado");
            }
            console.table(aluno);
        } catch (error) {
            console.error("Erro ao tentar exibir o professor", error.message);
        }
    }

        listarTodos() {
            try {
                if (professores.length === 0) {
                    return console.log("Não existe alunos a serem exibidos!")
                }
                console.table(professores);
            } catch (error) {
                console.error("Erro ao tentar exibir os professores", error.message);
        }
     }
}