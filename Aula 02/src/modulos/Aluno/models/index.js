import { Pessoa } from "../../Professor/models/pessoa.js"

export class AlunoModel extends Pessoa {
    constructor(nome, email, senha) {
        super(matricula, nome, email, senha, telefone)
    }
}