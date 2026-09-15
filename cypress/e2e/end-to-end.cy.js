/// <reference types="cypress"/>
const {faker} = require("@faker-js/faker");

describe('Fluxo End to End - Cadastro e Login', () => {

  it('Deve realizar cadastro e login com sucesso', () => {

    const nome = faker.person.fullName();
    const email = faker.internet.email();
    const senha = "123456";

    // Cadastro
    cy.visit("register.html");

    cy.preencherCadastro(
      nome,
      email,
      "(51) 99999-9999",
      senha,
      senha
    );

    // Validação do cadastro
    cy.url().should("include", "dashboard");
    cy.get("#user-name").should("contain", nome);

    // Login
    cy.visit("login.html");
    cy.login(email, senha);

    // Validação do login
    cy.url().should("include", "dashboard");

  });

});