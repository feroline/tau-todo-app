describe('Lista TODO', () => {
 
  beforeEach(() => {
    cy.eyesOpen({
      appName: 'tau-todo-app',
      testName: Cypress.currentTest.title,
    })
  })

  afterEach(() => {
    cy.eyesClose()
  })

  it('Deve guardar o valor de um input como texto', () => {
    cy.visit('http://localhost:3000/')

    const input = 'input[data-testid="todo-input"]' 
    cy.get(input).type('Primeiro item TODO')
    cy.get(input).should('have.value', 'Primeiro item TODO')
  
    cy.eyesCheckWindow({
      tag: 'add input', 
      target: 'region',
      matchLevel: 'Strict',
      selector: {
        type: 'name',
        selector: 'add_todo'
      }
    })

  })
})