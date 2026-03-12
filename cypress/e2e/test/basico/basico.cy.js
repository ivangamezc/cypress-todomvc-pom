describe('Agregar tareas', () => {
  it('Agregar una tarea a la lista', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')

    cy.get('.new-todo').type('Tarea 1{enter}')

    cy.get('.todo-list').contains('Tarea 1')
  })
})

describe('Marcar tarea como completada', () => {
  it ('Marcar como completado', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')

    cy.get('.new-todo').type('Tarea 1{enter}')

    cy.get('input.toggle').click()
  })
})

describe('Desmarcar tarea completada', () => {
  it ('Desmarcar tarea completada', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')

    cy.get('.new-todo').type('Tarea 1{enter}')

    cy.get('input.toggle').click().click()
  })
})

describe('Editar tarea', () => {
  it('Editar tarea con éxito', () => {
    
    cy.visit('https://todomvc.com/examples/javascript-es6/dist/')

    cy.get('.new-todo').type('Tarea 1{enter}')

    cy.get('.todo-list li label').contains('Tarea 1').dblclick()

    cy.get('li.editing .edit')
      .clear()
      .type('Tarea 2{enter}')

    cy.get('.todo-list').should('contain', 'Tarea 2')
    cy.get('.todo-list').should('not.contain', 'Tarea 1')
  })
})

describe('Eliminar tarea', () => {
  it('eliminar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')

    cy.get('.new-todo').type('Tarea 1{enter}')

    cy.get('.todo-list').contains('Tarea 1')
    .parent()
    .find('.destroy').click({ force: true })

  })
})

describe('Filtrar tareas', () => {
  it('Filtrar tareas', () => {
    cy.visit('https://todomvc.com/examples/react/dist/#/')
    
    //crear tareas.
    cy.get('.new-todo').type('Tarea 1{enter}')
    cy.get('.new-todo').type('Tarea 2{enter}')
    cy.get('.new-todo').type('Tarea 3{enter}')
   
    //marcar la tarea 1
    cy.get('.todo-list li')
    .contains('Tarea 1')
    .parent()
    .find('input[type="checkbox"]')
    .click()

    cy.contains('Completed').click()
    cy.get('.todo-list').should('contain', 'Tarea 1')
    cy.get('.todo-list').should('not.contain', 'Tarea 2')
  

    cy.contains('Active').click()
    cy.get('.todo-list').should('contain', 'Tarea 2')
    cy.get('.todo-list').should('not.contain', 'Tarea 1')

  })
})

