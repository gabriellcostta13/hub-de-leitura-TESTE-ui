/// <reference types="cypress"/>
const { faker } = require("@faker-js/faker");
import cadastroPages from "../support/pages/cadastro-pages";

describe("Funcionalidade: Cadastro no Hub de Leitura", () => {
	beforeEach(() => {
		cadastroPages.visitarPaginaCadastro ()
	});

	afterEach(() => {
		cy.screenshot ()
	});

	it("Deve fazer o cadastro com sucesso usando função JS", () => {
		let nome = `Usuario Teste ${Date.now()}`;
		let email = `teste${Date.now()}@teste.com`;
		cy.get("#name").type(nome);
		cy.get("#email").type(email);
		cy.get("#phone").type("(51) 99999-9999");
		cy.get("#password").type("123456*");
		cy.get("#confirm-password").type("123456*");
		cy.get("#terms-agreement").check();
		cy.get("#register-btn").click();
		cy.url().should("include", "dashboard");
	});

	it("Deve fazer o cadastro com sucesso usando Faker", () => {
		let nome = faker.person.fullName();
		let email = faker.internet.email();
		cy.get("#name").type(nome);
		cy.get("#email").type(email);
		cy.get("#phone").type("(51) 99999-9999");
		cy.get("#password").type("123456*");
		cy.get("#confirm-password").type("123456*");
		cy.get("#terms-agreement").check();
		cy.get("#register-btn").click();
		cy.url().should("include", "dashboard");
		cy.get("#user-name").should("contain", nome);
	});

	it("Deve fazer o cadastro com sucesso usando comando customizado", () => {
		let email = `Teste${Date.now()}@teste.com`;
		const nome = faker.person.fullName();
		cy.preencherCadastro(nome, email, "(51)99999-9999", "123456*", "123456*");
		cy.url().should("include", "dashboard");
	});


	it("Deve fazer o cadastro com sucesso usando Page Objects", () => {
		let email = `Teste${Date.now()}@teste.com`;
		cadastroPages.preencherCadastro('Gabriel Costa', email, "(51)99999-9999", "123456*", "123456*")
		cy.url().should("include", "dashboard");
	});	

	it("Deve validar mensagem ao tentar cadastrar sem preencher nome", () => {
		cadastroPages.preencherCadastro ('','gabitester15411@teste.com','(51)99999-9999', '123456*', '123456*')
		cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres')

	});

})
