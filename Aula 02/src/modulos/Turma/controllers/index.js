import prompt from 'prompt-sync';

import { alunos, turmas } from '../../../config/database.js';
import { TurmaModel } from '../models/index.js';

export class TurmaController {
    criar(cod, nome, sala, capacidade) {
        try {
            const novaTurma = new TurmaModel(cod, nome, sala, capacidade);
            turmas.push(novaTurma);
            console.table(novaTurma);
        } catch (error) {
            console.error("Erro ao tentar criar turma", error.message);
        }
    }

    editar(cod, novoNome, novaSala, novaCapacidade) {
        try {
            const turma = turmas.find(turma => turma.getCod === cod);
            if(!turma) {
                return console.log("Turma não encontrada!");
            }
            turma.nome = novoNome || turma.nome;
            turma.sala = novaSala || turma.sala;
            turma.capacidade = novaCapacidade || turma.capacidade;

            return console.table(turma);
        } catch (error) {
            console.log("Erro ao tentar atualizar a turma", error.message);
        }
    }

    deletarPorTurma(cod) {
        try {
            const index = turmas.findIndex((turma) => turma.getCod === cod);
            if (index === -1) {
                return console.log("Turma não encontrada");
            }
            turma.splice(index, 1); // estudar sobre splice
        } catch (error) {
            console.loh("Erro ao tentar excluir a turma", error.message);
        }
    }

    deletarTodas() {
        try {
            alunos.length = 0; // procurar saber a razão disso
            console.log("Todos as turmas foram exluídas!");
        } catch (error) {
            console.error("Erro ao tentar excluir todas as turmas", error.message);      
        }
    }

    listarPorTurma(cod) {
        try {
            const turma = turmas.find((turma) => turma.getCod === cod);
            if(!turma) {
                return console.log("Turma não encontrada");
            }
            console.table(turma); // ver sobre os tipos de console
        } catch (error) {
            console.error("Erro ao tentar exibir a turma", error.message);
        }
    }

    listarTodas() {
        try {
            if (turmas.length === 0) { 
                return console.log("Não existe turmas a serem exibidas!");
            }
            console.table(turmas);
        } catch (error) {
            console.error("Erro ao tentar exibir as turmas", error.message);
        }
    }
}