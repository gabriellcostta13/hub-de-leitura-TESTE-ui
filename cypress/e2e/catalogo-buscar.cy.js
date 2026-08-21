/// <reference types="cypress"/>
import catálogo from "../fixtures/livros.json";

describe("Funcionalidade: Busca no catálogo", () => {
	beforeEach(() => {
		cy.visit("catalog.html");
	});

	it("Deve fazer a busca do livro 1984", () => {
		cy.get("#search-input").type("1984");
		cy.get(".card-title").should("contain", "1984");
	});

	it("Deve fazer a busca do livro O Pequeno Príncipe", () => {
		cy.get("#search-input").type('O Pequeno Príncipe');
		cy.get(".card-title").should("contain", "O Pequeno Príncipe")
	});

	it("Deve fazer a busca do livro do arquivo de massa de dados", () => {
		cy.get("#search-input").type(catálogo[2].livro);
		cy.get(".card-title").should("contain", catálogo[2].livro);
	});

	it("Deve fazer a busca do livro usando Fixture", () => {
		cy.fixture("livros.json").then((catalogo) => {
			cy.get("#search-input").type(catalogo[1].livro);
			cy.get(".card-title").should("contain", catalogo[1].livro);
		});
	});

	it("Deve validar todos os livros da lista", () => {
		cy.fixture("livros.json").then((catalogo) => {
			catalogo.forEach((item) => {
				cy.get("#search-input").clear().type(item.livro);
				cy.get(".card-title").should("contain", item.livro);
			});
		});
	});
});