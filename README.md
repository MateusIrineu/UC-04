# Curso de POO com JavaScript Puro

A seguir, veja 12 aulas que cobrem os principais conceitos de Programação Orientada a Objetos (POO) utilizando JavaScript puro.

---

## Aula 1: Introdução à POO
- Conceitos fundamentais: objeto, classe, método.
- Diferença entre programação procedural e orientada a objetos.
- Exemplo simples de objeto:
```js
const pessoa = {
    nome: "João",
    idade: 30
};
console.log(pessoa.nome);
```

---

## Aula 2: Classes e Objetos
- Criação de classes com a sintaxe ES6.
- Instanciar objetos a partir de uma classe.
- Exemplo:
```js
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
}
const joao = new Pessoa("João", 30);
joao.apresentar();
```

---

## Aula 3: Construtores e Propriedades
- Papel do método construtor.
- Atribuição de propriedades no instanciamento.
- Exemplo com parâmetros:
```js
class Carro {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}
const meuCarro = new Carro("Toyota", "Corolla");
console.log(meuCarro);
```

---

## Aula 4: Métodos e Encapsulamento
- Criação e utilização de métodos.
- Noções básicas de encapsulamento utilizando convenções (por exemplo, prefixar com _ para indicar propriedades "privadas").
- Exemplo:
```js
class ContaBancaria {
    constructor(saldo) {
        this._saldo = saldo;
    }
    depositar(valor) {
        this._saldo += valor;
    }
    mostrarSaldo() {
        console.log(`Saldo: R$ ${this._saldo}`);
    }
}
const conta = new ContaBancaria(1000);
conta.depositar(500);
conta.mostrarSaldo();
```

---

## Aula 5: Herança
- Conceito de herança para criar classes derivadas.
- Uso da palavra-chave `extends` e `super`.
- Exemplo:
```js
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    falar() {
        console.log(`${this.nome} faz um som.`);
    }
}
class Cachorro extends Animal {
    falar() {
        console.log(`${this.nome} late.`);
    }
}
const meuCachorro = new Cachorro("Tobby");
meuCachorro.falar();
```

---

## Aula 6: Polimorfismo
- Definição e conceito de polimorfismo.
- Métodos que podem ter comportamentos diferentes em classes derivadas.
- Exemplo:
```js
class Forma {
    desenhar() {
        console.log("Desenhando forma");
    }
}
class Circulo extends Forma {
    desenhar() {
        console.log("Desenhando círculo");
    }
}
class Quadrado extends Forma {
    desenhar() {
        console.log("Desenhando quadrado");
    }
}
const formas = [new Circulo(), new Quadrado()];
formas.forEach(forma => forma.desenhar());
```

---

## Aula 7: Abstração
- Conceito de abstração: esconder complexidade.
- Como criar métodos que definem uma interface, mesmo que o JavaScript não suporte classes abstratas oficialmente.
- Exemplo sem instanciar a classe base:
```js
class Operacao {
    calcular() {
        throw new Error("Método 'calcular()' deve ser implementado.");
    }
}
class Soma extends Operacao {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }
    calcular() {
        return this.a + this.b;
    }
}
const soma = new Soma(10, 5);
console.log(soma.calcular());
```

---

## Aula 8: Composição
- Diferença entre herança e composição.
- Uso de composição para construir objetos combinando comportamentos.
- Exemplo:
```js
const falarMixin = {
    falar() {
        console.log(`${this.nome} está falando.`);
    }
};
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}
Object.assign(Pessoa.prototype, falarMixin);
const pessoa = new Pessoa("Maria");
pessoa.falar();
```

---

## Aula 9: Trabalhando com Métodos Estáticos
- Quando e como utilizar métodos estáticos.
- Exemplos de utilitários dentro de classes.
- Exemplo:
```js
class Util {
    static somar(a, b) {
        return a + b;
    }
}
console.log(Util.somar(3, 4));
```

---

## Aula 10: Projeto Prático de POO
- Desenvolvimento de um mini-projeto combinando os conceitos aprendidos.
- Exemplo: Sistema simples de cadastro de usuários.
```js
class Usuario {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    exibirInfo() {
        console.log(`Usuário: ${this.username}, Email: ${this.email}`);
    }
}

class Sistema {
    constructor() {
        this.usuarios = [];
    }
    cadastrar(usuario) {
        this.usuarios.push(usuario);
    }
    listarUsuarios() {
        this.usuarios.forEach(user => user.exibirInfo());
    }
}

const sistema = new Sistema();
sistema.cadastrar(new Usuario("usuario1", "user1@example.com"));
sistema.cadastrar(new Usuario("usuario2", "user2@example.com"));
sistema.listarUsuarios();
```
- Proposta: Adicione mais funcionalidades como atualização e remoção de usuários.

---

## Aula 11: Atualização de Usuários
- Implementação da funcionalidade para atualizar dados de usuários.
- Exemplo:
```js
class Sistema {
    constructor() {
        this.usuarios = [];
    }
    cadastrar(usuario) {
        this.usuarios.push(usuario);
    }
    atualizarUsuario(username, novosDados) {
        const usuario = this.usuarios.find(u => u.username === username);
        if (usuario) {
            usuario.email = novosDados.email || usuario.email;
            usuario.username = novosDados.username || usuario.username;
            console.log(`Usuário ${username} atualizado.`);
        } else {
            console.log(`Usuário ${username} não encontrado.`);
        }
    }
    listarUsuarios() {
        this.usuarios.forEach(user => user.exibirInfo());
    }
}

class Usuario {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    exibirInfo() {
        console.log(`Usuário: ${this.username}, Email: ${this.email}`);
    }
}

const sistema = new Sistema();
sistema.cadastrar(new Usuario("usuario1", "user1@example.com"));
sistema.atualizarUsuario("usuario1", { email: "novoemail@example.com" });
sistema.listarUsuarios();
```

---

## Aula 12: Remoção de Usuários
- Implementação da funcionalidade para remover usuários do sistema.
- Exemplo:
```js
class Sistema {
    constructor() {
        this.usuarios = [];
    }
    cadastrar(usuario) {
        this.usuarios.push(usuario);
    }
    removerUsuario(username) {
        const quantidadeAntes = this.usuarios.length;
        this.usuarios = this.usuarios.filter(u => u.username !== username);
        if (this.usuarios.length < quantidadeAntes) {
            console.log(`Usuário ${username} removido.`);
        } else {
            console.log(`Usuário ${username} não encontrado.`);
        }
    }
    listarUsuarios() {
        this.usuarios.forEach(user => user.exibirInfo());
    }
}

class Usuario {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    exibirInfo() {
        console.log(`Usuário: ${this.username}, Email: ${this.email}`);
    }
}

const sistema = new Sistema();
sistema.cadastrar(new Usuario("usuario1", "user1@example.com"));
sistema.cadastrar(new Usuario("usuario2", "user2@example.com"));
sistema.removerUsuario("usuario1");
sistema.listarUsuarios();
```

