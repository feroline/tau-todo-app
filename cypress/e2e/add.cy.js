describe('Lista TODO', () => {
 
  it('Deve guardar o valor de um input como texto', () => {
    cy.visit('http://localhost:3000/')

    const input = 'input[data-testid="todo-input"]' 
    cy.get(input).type('Primeiro item TODO')
    cy.get(input).should('have.value', 'Primeiro item TODO')
  })
})