# 🧪 Hub de Leitura — Automação de Testes E2E com Cypress

Projeto de automação de testes de interface desenvolvido para praticar
testes End-to-End (E2E) utilizando Cypress.

## 🎯 Objetivo

Automatizar fluxos importantes da aplicação **Hub de Leitura**,
utilizando dados dinâmicos e comandos reutilizáveis.

O projeto foi desenvolvido como prática de automação aplicada a cenários
reais de usuário.

## 🧪 Cenários automatizados

Entre os fluxos cobertos estão:

- Cadastro de usuário
- Login
- Fluxo completo de cadastro e login
- Catálogo de livros
- Busca de livros
- Navegação pelo catálogo
- Formulário de contato

## 🤖 Técnicas utilizadas

- Cypress
- JavaScript
- Testes E2E
- Testes de UI
- Assertions
- Faker para geração de dados dinâmicos
- Custom Commands
- Seletores
- Fixtures
- Organização de suítes de teste

## 🧩 Custom Commands

Os **Custom Commands** são utilizados para centralizar ações
reutilizáveis, como preenchimento de cadastro e login.

As principais **assertions permanecem nos arquivos de teste**, mantendo
a validação dos resultados junto aos cenários executados.

## 📁 Estrutura

``` text
cypress/
├── e2e/
│   ├── cadastro.cy.js
│   ├── catalogo-buscar.cy.js
│   ├── catalogo.cy.js
│   ├── contato.cy.js
│   ├── end-to-end.cy.js
│   ├── login.cy.js
│   └── navegacao-catalogo.cy.js
├── fixtures/
│   ├── livros.json
│   └── usuario.json
└── support/
    ├── commands.js
    └── e2e.js
```

## 🚀 Executando o projeto

Instale as dependências:

``` bash
npm install
```

Abra o Cypress:

``` bash
npm run cy:open
```

Execute os testes:

``` bash
npm test
```

Para executar no Chrome:

``` bash
npm run cy:run:chrome
```

## 🛠️ Tecnologias

- Cypress
- JavaScript
- Faker
- Mocha
- Node.js
- Git/GitHub

## 📌 O que este projeto demonstra

- Automação de fluxos E2E
- Validação de interface
- Uso de dados dinâmicos
- Criação de comandos reutilizáveis
- Organização de suítes de teste
- Aplicação de assertions em cenários de teste

## 👤 Autor

**Gabriel Costa \| Quality Assurance (QA)**

[GitHub](https://github.com/gabriellcostta13)
