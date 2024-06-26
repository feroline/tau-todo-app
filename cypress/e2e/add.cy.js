describe('Lista TODO', () => {]
  
// TODO:Refatorar 
  it('Deve guardar o valor de um input como texto', () => {
    cy.visit('https://localhost:3000/')
    
    cy.get('[data-testid="input-todo"]').type('Primeiro item TODO')
    cy.get('[data-testid="input-todo"]').should('have.value', 'Primeiro item TODO')
  })
})