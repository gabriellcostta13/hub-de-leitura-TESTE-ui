describe('Funcionalidade: Navegação até o catálogo', () => {

  beforeEach(() => {
    cy.visit('/index.html')
  });

  it('Deve navegar da home até o catálogo, ir para a próxima página e selecionar o segundo livro', () => {
    cy.visit('catalog.html')
    cy.get(':nth-child(2) > .page-link').click()
    cy.contains('O Código Da Vinci').click()
    cy.get('#add-to-cart-btn').click()
    

    


  });


});