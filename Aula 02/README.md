# Resumo da Reunião – Revisão de POO e Estruturação de CRUD

**Data:** 6 de fevereiro de 2025  
**Duração:** 2h 42m

## Principais Tópicos Abordados

- **Revisão do CRUD**
    - **Create:** Inserção de novos registros.
    - **Read:** Consulta e listagem de registros.
    - **Update:** Modificação dos dados existentes.
    - **Delete:** Remoção de registros.

- Implementação prática das operações CRUD no contexto de um sistema acadêmico (ex.: Alunos e Turmas).

## Organização do Projeto

- **Estrutura do Diretório (Padrão MVC):**
    - **Models:** Modelagem dos dados (ex.: classes Aluno e Turma).
    - **Controllers:** Implementação das regras de negócio (operações CRUD).
    - **Views:** Responsáveis pela apresentação dos dados.

## Arquiteturas de Software

- **Arquitetura Monolítica:**
    - Centralização de todas as funções do sistema em um único servidor.

- **Arquitetura Baseada em Microserviços:**
    - Uso de servidores especializados para diferentes funções (ex.: login, pagamentos, produtos).
    - Benefícios: Balanceamento de carga e escalabilidade.

## Implementação de Classes em JavaScript

- **Definição de Classes:**
    - Criação das classes Aluno e Turma com seus atributos (nome, e-mail, senha, etc.).
    - Uso de métodos getters e setters para controle de acesso a atributos privados.

- **Importação de Módulos:**
    - Utilização de `import` e `export` no Node.js para modularização do código.

## Criação de CRUD no Controller

- **Método create:** Criação de um novo aluno e adição ao banco de dados (simulado com um array).
- **Método read:** Listagem de alunos e busca por matrícula.
- **Método update:** Atualização dos dados de um aluno mantendo a matrícula inalterada.
- **Método delete:** Remoção de alunos individualmente ou em grupo.

## Uso de Métodos do Array para Manipulação de Dados

- **find():** Busca de um aluno pelo ID.
- **findIndex():** Identificação da posição do aluno no array.
- **splice():** Remoção do aluno utilizando seu índice.
- **push():** Adição de novos alunos ao array.

## Tratamento de Erros e Boas Práticas

- Uso de blocos `try...catch` para captura e tratamento de erros.
- Mensagens de erro customizadas para facilitar a depuração.
- Validação de dados para evitar cadastros duplicados.

## Conclusão e Próximos Passos

- ✅ Prática intensiva na criação e manipulação de CRUDs.
- ✅ Aprofundamento na integração com bancos de dados reais.
- ✅ Refinamento da estrutura MVC para futuras aplicações web.

