# Hub de Leitura — Testes E2E com Cypress

Projeto de automação de testes de interface utilizando **Cypress**, desenvolvido para praticar testes end-to-end (E2E) no sistema **Hub de Leitura**.

## 🎯 Objetivo

Automatizar e validar os principais fluxos da aplicação, aplicando boas práticas de testes: seletores, assertions, comandos customizados e geração de dados dinâmicos.

O projeto também tem como objetivo consolidar conhecimentos práticos de **QA e automação de testes**.

## 🛠️ Tecnologias utilizadas

- JavaScript
- [Cypress](https://www.cypress.io/)
- Node.js
- [Faker.js](https://fakerjs.dev/) — geração de dados dinâmicos
- Mocha
- Biome — lint/formatação

## 📂 Estrutura do projeto

```
hub-de-leitura-TESTE-ui/
├── cypress/
│   ├── e2e/            # Specs de teste (cenários)
│   ├── fixtures/        # Massas de dados estáticas
│   └── support/          # Comandos customizados e configurações globais
├── cypress.config.js
├── package.json
└── README.md
```

> Ajuste os nomes das subpastas acima caso a estrutura real do seu `cypress/` seja diferente.

## 🚀 Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (recomendado LTS)
- Acesso à aplicação Hub de Leitura (URL configurada em `cypress.config.js`)

### Instalação

```bash
git clone https://github.com/gabriellcostta13/hub-de-leitura-TESTE-ui.git
cd hub-de-leitura-TESTE-ui
npm install
```

### Executando os testes

Abrir o Cypress em modo interativo (recomendado durante o desenvolvimento dos testes):

```bash
npm run cy:open
```

Rodar todos os testes em modo headless (terminal):

```bash
npm test
```

Rodar os testes especificamente no Chrome:

```bash
npm run cy:run:chrome
```

## 🧪 Testes automatizados

Entre os principais cenários trabalhados no projeto estão:

- Cadastro de usuário
- Login
- Fluxo End-to-End de cadastro + login
- Validação de navegação
- Validação de elementos da interface
- Utilização de dados dinâmicos com Faker
- Comandos customizados do Cypress

### 🔄 Fluxo E2E principal

```
Cadastro
   ↓
Validação do cadastro
   ↓
Acesso à tela de login
   ↓
Login com o mesmo usuário criado
   ↓
Validação do login
```

## 📌 Status do projeto

Projeto em desenvolvimento contínuo, usado como prática de estudos em QA/automação (curso EBAC).

## 👤 Autor

**Gabriel Costa**

[GitHub](https://github.com/gabriellcostta13)