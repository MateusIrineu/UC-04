import promptSync from 'prompt-sync';
import { TurmaController } from '../controllers/index.js';

const turmaController = new TurmaController();
const input = promptSync();

export class ViewTurma {
    criar() {
        const cod = input("Insira o código: ");
        const nome = input("Insira o nome: ");
        const sala = input("Insira a sala: ");
        const capacidade = input("Insira a capacidade: ");
        turmaController.criar(cod, nome, sala, capacidade);
    }

    editar() {
        const cod = input("Insira o código: ");
        const novoNome = input("Insira o novo nome: ");
        const novaSala = input("Insira a nova sala: ");
        const novaCapacidade = input("Insira a nova capacidade: ");
        turmaController.editar(cod, novoNome, novaSala, novaCapacidade);
    }

    deletarPorTurma() {
        const delTurma = input("Insira o código da turma a ser deletada: ");
        turmaController.deletarPorTurma(delTurma);
    }

    deletarTodas() {
        turmaController.deletarTodas();
        console.log("\nTodas as turmas foram deletadas.") // revisar isso
    }

    listarPorTurma() {
        const listaTurma = input("Insira o código da turma: ");
        turmaController.listarPorTurma(listaTurma);
    }

    listarTodas() {
        console.log("\nLista de turmas: ");
        console.log(turmaController.listarTodas()); // ver isso
    }
}