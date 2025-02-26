import promptSync from 'prompt-sync';
import { ViewAluno } from './modulos/Aluno/views/index.js';
import { ViewTurma } from './modulos/Turma/views/index.js';
import { ViewProfessor } from './modulos/Professor/views/index.js';

const viewAluno = new ViewAluno();
const viewTurma = new ViewTurma();
const viewProfessor = new ViewProfessor();

const input = promptSync();

function menuPrincipal() {
    const opcoes = [
        "1 - Menu Alunos",
        "2 - Menu Turmas",
        "3 - Menu Professores",
        "0 - Sair"
    ];

    let opcao;
    do {
        console.clear(); // ver sobre console.clear()
        console.log(opcoes.join("\n"));
        opcao = input("Escolha a opção desejada: ");

        switch (opcao) {
            case "0":
                console.log("Saindo...");
                break;
            case "1":
                menuAlunos();
                break;
            case "2":
                menuTurmas();
                break;
            case "3":
                menuProfessores();
                break;
            default:
                console.log("Opção inválida! Tente novamente.");
        }
        input("\nPressione Enter para continuar...");
    } while (opcao !== "0");
    }

function menuAlunos() {
    const opcoes = [
        "1 - Criar novo aluno",
        "2 - Listar por matrícula",
        "3 - Listar todos",
        "4 - Editar aluno por matrícula",
        "5 - Excluir todos os alunos",
        "6 - Excluir por matrícula",
        "0 - Sair"
    ];

    let opcao;
    do {
        console.clear();
        console.log(opcoes.join("\n"));
        opcao = input("Escolha a opção desejada: ");

        switch (opcao) {
            case "0":
                console.log("Saindo...");
                break;
            case "1":
                viewAluno.criar();
                break;
            case "2":
                viewAluno.listarPorMatricula();
                break;
            case "3":
                viewAluno.listarTodos();
                break
            case "4":
                viewAluno.editar();
                break;
            case "5":
                viewAluno.deletarTodos();
                break;
            case "6":
                viewAluno.deletarPorMatricula();
                break;
            default:
                console.log("Opção inválida! Tente novamente.");
        }

        input("\nPressione Enter para continuar...");
    } while (opcao !== "0");
}

function menuTurmas() {
    let opcoes = [
        "1 - Criar nova turma",
        "2 - Editar turma",
        "3 - Listar por turma",
        "4 - Listar todas as turmas",
        "5 - Deletar por turma",
        "6 - Deletar todas as turmas",
        "0 - Sair"
    ];
    let opcao;
    do {
        console.clear();
        console.log(opcoes.join("\n"));
        opcao = input("Escolha a opção desejada: ");

        switch (opcao) {
            case "0":
                console.log("Saindo...");
                break;
            case "1":
                viewTurma.criar();
                break;
            case "2":
                viewTurma.editar();
                break;
            case "3":
                viewTurma.listarPorTurma();
                break;
            case "4":
                viewTurma.listarTodas();
                break;
            case "5":
                viewTurma.deletarPorTurma();
                break;
            case "6":
                viewTurma.deletarTodas();
                break;
            default:
                console.log("Opção inválida! Tente novamente.");
        }

        input("\nPressione Enter para continuar...");
    } while (opcao !== "0");
}

function menuProfessores() {
    const opcoes = [
        "1 - Criar novo professor",
        "2 - Listar por matrícula",
        "3 - Listar todos",
        "4 - Editar professor por matrícula",
        "5 - Excluir todos os professores",
        "6 - Excluir por matrícula",
        "0 - Sair"
    ];

    let opcao;
    do {
        console.clear();
        console.log(opcoes.join("\n"));
        opcao = input("Escolha a opção desejada: ");

        switch (opcao) {
            case "0":
                console.log("Saindo...");
                break;
            case "1":
                viewProfessor.criar();
                break;
            case "2":
                viewProfessor.listarPorMatricula();
                break;
            case "3":
                viewProfessor.listarTodos();
                break
            case "4":
                viewProfessor.editar();
                break;
            case "5":
                viewProfessor.deletarTodos();
                break;
            case "6":
                viewProfessor.deletarPorMatricula();
                break;
            default:
                console.log("Opção inválida! Tente novamente.");
        }

        input("\nPressione Enter para continuar...");
    } while (opcao !== "0");
}



menuPrincipal();