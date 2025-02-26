import PromptSync from 'prompt-sync';
import { ProfessorController } from '../controllers/index.js';


const professorController = new ProfessorController();
const input = PromptSync();

export class ViewProfessor {
    criar() {
        const matricula = input("Insira a matrícula: ");
        const nome = input("Insira o nome: ");
        const telefone = input("Insira o telefone: ");
        const email = input("Insira o e-mail: ");
        const turma = input("Insira a turma: ");
        const disciplina = input("Insira a disciplina: ");
        const senha = input("Insira a senha: ");
        professorController.criar(matricula, nome, telefone, email, turma, disciplina, senha);
    }

    editar() {
        const matricula = input("Insira a matrícula: ");
        const novoNome = input("Insira o novo nome: ");
        const novoTelefone = input("Insira o novo telefone: ");
        const novoEmail = input("Insira o novo e-mail: ");
        const novaTurma = input("Insira a nova turma: ");
        const novaDisciplina = input("Insira a nova disciplina: ");
        const novaSenha = input("Insira a nova senha: ");
        professorController.editar(matricula, novoNome, novoTelefone, novoEmail, novaTurma, novaDisciplina, novaSenha);
    }

    deletarPorMatricula() {
        const delMatricula = input("Insira a matrícula do professor a ser deletada: ");
        professorController.deletarPorMatricula(delMatricula);
    }

    deletarTodos() {
        professorController.deletarTodos();
        console.log("\nTodos os professores foram deletados.");
    }

    listarPorMatricula() {
        const listaMatricula = input("Insira a matrícula do professor: ");
        professorController.listarPorMatricula(listaMatricula);
    }

    listarTodos() {
        console.log("\nLista de professores: ");
        console.log(professorController.listarTodos());
    }
}