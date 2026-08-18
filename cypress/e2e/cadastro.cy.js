/// <reference types="cypress"/>

const { faker } = require('@faker-js/faker');

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

  beforeEach(() => {
    cy.visit('register.html')
  });

  it('Deve fazer o cadastro com sucesso usando função JS', () => {
    let nome = `Usuario Teste ${Date.now()}`
    let email = `teste${Date.now()}@teste.com`
    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#phone').type('(51) 99999-9999')
    cy.get('#password').type('123456*')
    cy.get('#confirm-password').type('123456*')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
    // Resultado esperado
    cy.url().should('include', 'dashboard')
  });

  it('Deve fazer o cadastro com sucesso usando Faker', () => {
    let nome = faker.person.fullName()
    let email = faker.internet.email()
    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#phone').type('(51) 99999-9999')
    cy.get('#password').type('123456*')
    cy.get('#confirm-password').type('123456*')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
    // Resultado esperado
    cy.url().should('include', 'dashboard')
    cy.get('#user-name').should('contain', nome)
  });

})