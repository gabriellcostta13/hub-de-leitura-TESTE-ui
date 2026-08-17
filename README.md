# 📚 Hub de Leitura - Testes E2E com Cypress

Suíte de testes end-to-end (E2E) desenvolvida com **Cypress** para validar as principais funcionalidades do sistema fictício **Hub de Leitura**, uma plataforma de treinamento para práticas de QA.

Este projeto foi construído como parte do meu processo de aprendizado em automação de testes, aplicando conceitos de estruturação de suítes, boas práticas de seletores, geração de dados de teste e validação de fluxos críticos de uma aplicação web.

---

## 🎯 Objetivo

Automatizar a validação de fluxos essenciais de uma plataforma de e-commerce/catálogo de livros, cobrindo:

- Envio de formulário de contato (sucesso e validações de erro)
- Cadastro de novos usuários (com dados estáticos e dados gerados dinamicamente via Faker)
- Interações com o catálogo de livros (adição de itens à cesta, navegação para detalhes do produto)

---

## 🛠️ Tecnologias utilizadas

- [Cypress](https://www.cypress.io/) — framework de testes E2E
- [Faker.js](https://fakerjs.dev/) — geração de dados fictícios para os testes de cadastro
- JavaScript

---

## 📁 Estrutura do projeto

```
hub-de-leitura-TESTE-ui/
├── cypress/
│   ├── e2e/
│   │   ├── contato.cy.js       # Testes do formulário de contato
│   │   ├── cadastro.cy.js      # Testes do fluxo de cadastro de usuário
│   │   └── catalogo.cy.js      # Testes de interação com o catálogo de livros
│   ├── fixtures/                # Massa de dados estática para os testes
│   └── support/
│       ├── commands.js          # Comandos customizados do Cypress
│       └── e2e.js               # Configurações globais carregadas antes dos testes
├── cypress.config.js             # Configuração principal do Cypress (baseUrl, etc.)
├── package.json
└── README.md
```

---

## ✅ Cenários de teste cobertos

### Formulário de Contato (`contato.cy.js`)
- Preenchimento correto de todos os campos obrigatórios e envio com sucesso
- Validação de mensagem de erro ao não preencher o campo **Nome**
- Validação de mensagem de erro ao não preencher o campo **E-mail**
- Validação de mensagem de erro ao não selecionar o **Assunto**
- Validação de mensagem de erro ao não preencher a **Mensagem**

### Cadastro de Usuário (`cadastro.cy.js`)
- Cadastro com sucesso utilizando dados gerados via função JavaScript nativa
- Cadastro com sucesso utilizando dados fictícios gerados pela biblioteca **Faker**
- Validação de redirecionamento para a área logada (`dashboard`) após o cadastro

### Catálogo de Livros (`catalogo.cy.js`)
- Clique no botão "Adicionar à Cesta" de um item específico
- Clique em todos os botões "Adicionar à Cesta" da listagem
- Clique no primeiro e no último botão da lista
- Clique em um botão específico via índice (`.eq()`)
- Navegação até a página de detalhes de um livro a partir do catálogo

---

## 🚀 Como rodar o projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado
- Aplicação **Hub de Leitura** rodando localmente (`http://localhost:3000`)

### Passo a passo

1. Clone o repositório
   ```bash
   git clone https://github.com/gabriellcostta13/hub-de-leitura-TESTE-ui.git
   cd hub-de-leitura-TESTE-ui
   ```

2. Instale as dependências
   ```bash
   npm install
   ```

3. Certifique-se de que a aplicação Hub de Leitura está rodando em `http://localhost:3000`

4. Abra o Cypress em modo interativo
   ```bash
   npx cypress open
   ```

   Ou rode todos os testes em modo headless (via terminal, sem abrir interface gráfica):
   ```bash
   npx cypress run
   ```

---

## 📌 Sobre este projeto

Este repositório faz parte do meu portfólio de estudos em **Quality Assurance**, desenvolvido durante minha formação em automação de testes. O foco aqui foi praticar:

- Estruturação de suítes de teste com `describe`/`it`
- Uso de `beforeEach` para reduzir duplicação de código
- Seletores CSS e de atributos (`id`, `name`, classes)
- Geração de massa de dados dinâmica com Faker
- Boas práticas de assertions (`should`, `contains`)
- Debug e correção de erros comuns em testes Cypress

---

## 👤 Autor

**Gabriel Costa**
[LinkedIn](https://www.linkedin.com/gabrielcostatec) · [GitHub](https://github.com/gabriellcostta13)
