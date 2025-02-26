import { Pessoa } from "./pessoa.js"

export class ProfessorModel extends Pessoa {
    constructor(nome, telefone, matricula, email, turma, disciplina, senha) {
        super(nome, telefone, email, senha, matricula)
        this.turma = turma
        this.disciplina = disciplina
    }
}