# 🧪 Hub de Leitura — Automação de Testes E2E com Cypress

Projeto de portfólio em **Quality Assurance (QA)** focado em automação de testes de interface e validação de fluxos **End-to-End (E2E)** de uma aplicação web.

O projeto demonstra a aplicação prática de conceitos de QA e automação com **Cypress + JavaScript**, incluindo criação de cenários, assertions, geração de dados dinâmicos, comandos customizados e organização de testes.

> Atualmente atuo profissionalmente em QA com **testes manuais e exploratórios em um sistema ERP**, enquanto desenvolvo minhas habilidades em automação de testes. Este projeto representa essa evolução técnica e faz parte do meu portfólio.

## 🎯 Objetivos

* Automatizar fluxos relevantes da aplicação;
* Validar comportamentos esperados por meio de **assertions**;
* Trabalhar com testes funcionais e E2E;
* Utilizar dados dinâmicos para reduzir dependência de massa fixa;
* Criar **Custom Commands** para reutilização de ações;
* Manter os cenários organizados e legíveis;
* Praticar execução de testes em modo interativo e headless.

## 🧪 Cenários automatizados

| Cenário       | O que é trabalhado                               |
| ------------- | ------------------------------------------------ |
| **Cadastro**  | Preenchimento e envio do formulário de cadastro  |
| **Login**     | Autenticação utilizando credenciais válidas      |
| **Fluxo E2E** | Cadastro de usuário → login com o mesmo usuário  |
| **Catálogo**  | Acesso e interação com o catálogo                |
| **Busca**     | Fluxo de busca de livros                         |
| **Navegação** | Navegação entre páginas e elementos da aplicação |
| **Contato**   | Fluxo do formulário de contato                   |

### 🔄 Fluxo E2E principal

```text
Geração de dados
      ↓
Cadastro
      ↓
Validação
      ↓
Login com as mesmas credenciais
      ↓
Validação do acesso
```

## 🛠️ Tecnologias e ferramentas

* JavaScript
* Cypress 15
* Node.js
* @faker-js/faker
* Mocha
* Biome
* Git / GitHub

## 🔎 Conceitos de QA aplicados

* Testes funcionais
* Testes End-to-End
* Testes de UI
* Assertions
* Seletores de elementos
* Massa de dados dinâmica
* Custom Commands
* Reutilização de código
* Validação de fluxos de negócio
* Organização de suítes de teste
* Execução interativa e headless

## 📂 Estrutura do projeto

```text
hub-de-leitura-TESTE-ui/
├── cypress/
│   ├── e2e/                 # Cenários automatizados
│   ├── fixtures/            # Massas de dados
│   └── support/
│       └── commands.js      # Custom Commands
├── cypress.config.js
├── package.json
└── README.md
```

## ♻️ Custom Commands

O projeto utiliza **Custom Commands** para centralizar ações repetitivas, como cadastro e login.

A separação adotada mantém:

* **Custom Commands:** ações reutilizáveis;
* **Arquivos de teste:** cenários e **assertions principais**.

Essa organização melhora a legibilidade e facilita a manutenção dos testes.

## 🚀 Como executar

### Pré-requisitos

* Node.js (recomendado LTS);
* Aplicação Hub de Leitura disponível localmente;
* Aplicação configurada em `http://localhost:3000`.

### Instalação

```bash
git clone https://github.com/gabriellcostta13/hub-de-leitura-TESTE-ui.git
cd hub-de-leitura-TESTE-ui
npm install
```

### Cypress em modo interativo

```bash
npm run cy:open
```

### Execução headless

```bash
npm test
```

### Execução no Chrome

```bash
npm run cy:run:chrome
```

## 💡 O que este projeto demonstra

Este projeto evidencia a aplicação prática de:

* criação e organização de cenários de teste;
* automação de fluxos de usuário;
* validação de comportamentos com assertions;
* geração de dados dinâmicos;
* reutilização de ações com Custom Commands;
* organização visando legibilidade e manutenção;
* execução de testes de UI em diferentes modos.

## 👨‍💻 Sobre mim

Sou estudante de **Engenharia da Qualidade de Software** e profissional de **Quality Assurance (QA)**.

Atuo com **testes manuais e exploratórios em um sistema ERP**, realizando atividades relacionadas à identificação e acompanhamento de bugs, testes funcionais, validação de dados com SQL, documentação e criação de casos de teste.

Paralelamente, venho desenvolvendo minhas habilidades em **automação de testes**, com foco em Cypress, JavaScript e boas práticas de QA.

## 🔗 Links

* [GitHub](https://github.com/gabriellcostta13)
* [LinkedIn](https://www.linkedin.com/in/gabrielcostatec)

## 🏷️ Keywords

`QA` · `Quality Assurance` · `Testes Manuais` · `Testes Funcionais` · `Testes E2E` · `Automação de Testes` · `Cypress` · `JavaScript` · `SQL` · `ERP` · `Git` · `GitHub`
