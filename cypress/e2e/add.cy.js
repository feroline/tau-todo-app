describe('Lista TODO', () => {

// TODO:Refatorar 
  it('Deve guardar o valor de um input como texto', () => {
    cy.visit('http://localhost:3000/')
    
    cy.get('input[data-testid="todo-input"]').type('Primeiro item TODO')
    cy.get('input[data-testid="todo-input"]').should('have.value', 'Primeiro item TODO')
  })
})