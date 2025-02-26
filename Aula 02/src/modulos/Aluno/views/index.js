import PromptSync from 'prompt-sync';
import { AlunoController } from '../controllers/index.js';

const alunoController = new AlunoController();
const input = PromptSync();

export class ViewAluno {
    criar() {
        const matricula = input("Insira a matrícula: ");
        const nome = input("Insira o nome: ");
        const email = input("Insira o e-mail: ");
        const senha = input("Insira a senha: ");
        alunoController.criar(matricula, nome, email, senha);
    }

    editar() {
        const matricula = input("Insira a matrícula: ");
        const novoNome = input("Insira o novo nome: ");
        const novoEmail = input("Insira o novo e-mail: ");
        const novaSenha = input("Insira a nova senha: ");
        alunoController.editar(matricula, novoNome, novoEmail, novaSenha);
    }

    deletarPorMatricula() {
        const delMatricula = input("Insira a matrícula do aluno a ser deletada: "); 
        alunoController.deletarPorMatricula(delMatricula);
    }

    deletarTodos() {
        alunoController.deletarTodos();
        console.log("\nTodos os alunos foram deletados.");
    }

    listarPorMatricula() {
        const listaMatricula = input("Insira a matrícula do aluno: ");
        alunoController.listarPorMatricula(listaMatricula);
    }
    
    listarTodos() {
        console.log("\nLista de alunos: ");
        console.log(alunoController.listarTodos());
    }
}