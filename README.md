# Hub de Leitura — Testes E2E com Cypress

Suíte de testes end-to-end desenvolvida com Cypress para validar os principais fluxos do sistema fictício **Hub de Leitura**. O projeto faz parte do meu portfólio de estudos em Quality Assurance e automação de testes.

## Objetivo

Praticar a criação e a organização de testes E2E em uma aplicação de catálogo de livros, cobrindo fluxos de cadastro, login, contato, busca, navegação e cesta de compras.

## Tecnologias

- JavaScript
- Cypress
- Faker.js

## Cenários cobertos

- Cadastro de usuário com dados dinâmicos, Faker, comando customizado e Page Object.
- Validação de campo obrigatório no cadastro.
- Login com credenciais diretas, fixture e comando customizado.
- Envio do formulário de contato e validações dos campos obrigatórios.
- Busca de livros com dados diretos e fixtures.
- Adição de livros à cesta e navegação para detalhes do livro.
- Navegação da página inicial até o catálogo.

## Estrutura do projeto

```text
hub-de-leitura-TESTE-ui/
├── cypress/
│   ├── e2e/
│   │   ├── cadastro.cy.js
│   │   ├── catalogo.cy.js
│   │   ├── catalogo-buscar.cy.js
│   │   ├── contato.cy.js
│   │   ├── login.cy.js
│   │   └── navegacao-catalogo.cy.js
│   ├── fixtures/
│   │   ├── livros.json
│   │   └── usuario.json
│   └── support/
│       ├── commands.js
│       └── pages/
│           └── cadastro-pages.js
├── cypress.config.js
├── package.json
└── README.md
```

## Como executar

### Pré-requisitos

- Node.js instalado.
- Aplicação Hub de Leitura em execução em `http://localhost:3000`.

### Instalação

```bash
git clone https://github.com/gabriellcostta13/hub-de-leitura-TESTE-ui.git
cd hub-de-leitura-TESTE-ui
npm install
```

### Execução dos testes

Abrir o Cypress em modo interativo:

```bash
npm run cy:open
```

Executar a suíte completa:

```bash
npm test
```

Executar usando o navegador Chrome:

```bash
npm run cy:run:chrome
```

## Boas práticas aplicadas

- Uso de `beforeEach` para preparar os cenários.
- Massa de dados estática com fixtures.
- Geração de dados dinâmicos com Faker.js.
- Reutilização de fluxos por comandos customizados.
- Organização do fluxo de cadastro com Page Object Model.
- Ocultação de senhas no log do Cypress.

## Autor

Gabriel Costa — Estudante de Quality Assurance (QA)
[LinkedIn](https://www.linkedin.com/gabrielcostatec) · [GitHub](https://github.com/gabriellcostta13)
