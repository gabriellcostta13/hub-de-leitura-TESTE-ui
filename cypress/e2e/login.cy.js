/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

beforeEach(() => {
    cy.visit('login.html')
});

it('Deve fazer o login com sucesso', () => {
    cy.get('#email').type('usuario@teste.com')
    cy.get('#password').type('user123')
    cy.get('#login-btn').click()
    cy.url().should("include" , "dashboard")
});

it('Deve fazer o login com sucesso - Usando comando customizado', () => {
    cy.login('usuario@teste.com', 'user123')
});

it('Deve fazer o login com sucesso com conta Admin - com comando costomizado', () => {
    cy.login('admin@biblioteca.com', 'admin123')

});

});