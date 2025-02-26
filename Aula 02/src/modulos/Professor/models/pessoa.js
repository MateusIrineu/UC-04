export class Pessoa {
    #matricula
    constructor(nome, matricula, telefone, email, senha) {
        this.nome = nome
        this.#matricula = matricula
        this.telefone = telefone
        this.email = email
        this.senha = senha
    }
    get getMatricula(){
        return this.#matricula
    }
}