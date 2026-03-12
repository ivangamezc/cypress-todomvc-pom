class TodoPage {
 
  elements = {
    newTodoInput: () => cy.get('.new-todo'),
    todoList: () => cy.get('.todo-list'),
    editInput: () => cy.get('li.editing .edit'),
    // Selector para los checkboxes
    todoCheckbox: (text) => cy.contains('.todo-list li', text).find('input.toggle'),
    // Botón de eliminar
    deleteButton: (text) => cy.contains('.todo-list li', text).find('.destroy'),
    // Botones de filtro
    filterCompleted: () => cy.contains('Completed'),
    filterActive: () => cy.contains('Active')
  };

  //ACCIONES 
  navegar() {
    cy.visit('https://todomvc.com/examples/javascript-es6/dist/');
  }

  agregarTarea(texto) {
    this.elements.newTodoInput().type(`${texto}{enter}`);
  }

  clicarCheckbox(texto) {
    this.elements.todoCheckbox(texto).click();
  }

  editarTarea(textoOriginal, nuevoTexto) {
    cy.get('.todo-list li label').contains(textoOriginal).dblclick();
    this.elements.editInput().clear().type(`${nuevoTexto}{enter}`);
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