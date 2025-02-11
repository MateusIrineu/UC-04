import prompt from 'prompt-sync';

import  {AlunoController}  from './modulos/Aluno/controllers/index.js';

const aluno1 = new AlunoController()

export default function menuPrincipalAluno() {
    const input = prompt();
    const opcoes = [
        "1 - Criar novo aluno",
        "2 - Listar todos os alunos",
        "3 - Editar aluno por matrícula",
        "4 - Excluir todos os alunos",
        "5 - Excluir por matrícula",
        "0 - Sair"
    ]
    const menu = opcoes.join("\n");
    console.log(menu);
    let opcao = input("Escolha a opcção desejada: ");
    console.clear();
    switch(opcao) {
        case "0":
            break;
        case "1":
            criar();
            break;
        case "2":
            listaPorMatricula();
            break;
        case "3":
            editar();
            break;
        case "4":
            deletarPorMatricula();
            break;
        case "5":
            deletarTodos();
            break
    } 
}

console.clear();
menuPrincipalAluno();
