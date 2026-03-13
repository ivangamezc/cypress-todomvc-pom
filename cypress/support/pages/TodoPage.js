class TodoPage {
  // Selectores
  elements = {
    newTodoInput: () => cy.get('.new-todo'),
    todoList: () => cy.get('.todo-list li'),
    deleteButton: (texto) => cy.contains(texto).parent().find('.destroy'),
    filterCompleted: () => cy.contains('Completed'),
    filterActive: () => cy.contains('Active')
  }

  // Métodos
  visit() {
    cy.visit('https://todomvc.com/examples/react/dist/');
  }

  typeTodo(todo) {
    this.elements.newTodoInput().type(`${todo}{enter}`);
  }

  validateTodoInList(todoText) {
    this.elements.todoList().should('contain', todoText);
  }

  borrarTarea(texto) {
    this.elements.deleteButton(texto).click({ force: true });
  }

  filtrarPor(estado) {
    if (estado === 'Completed') {
      this.elements.filterCompleted().click();
    } else if (estado === 'Active') {
      this.elements.filterActive().click();
    }
  }
}

export default TodoPage;