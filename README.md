# Hub de Leitura — Testes E2E com Cypress

Projeto de automação de testes de interface utilizando **Cypress**, desenvolvido para praticar testes end-to-end (E2E) no sistema **Hub de Leitura**.

## 🎯 Objetivo

Automatizar e validar os principais fluxos da aplicação, utilizando boas práticas de testes, seletores, assertions, comandos customizados e geração de dados dinâmicos.

O projeto também tem como objetivo consolidar conhecimentos práticos de **QA e automação de testes**.

## 🛠️ Tecnologias utilizadas

- JavaScript
- Cypress
- Node.js
- Faker.js
- Mocha

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

```text
Cadastro
   ↓
Validação do cadastro
   ↓
Acesso à tela de login
   ↓
Login com o mesmo usuário criado
   ↓
Validação do login