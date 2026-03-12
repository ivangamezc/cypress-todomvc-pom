import TodoPage from '../../support/pages/TodoPage';

describe('TodoMVC - (POM)', () => {
  const todoPage = new TodoPage();

  beforeEach(() => {
    todoPage.navegar();
  });

  it('1. Debe agregar una tarea correctamente', () => {
    todoPage.agregarTarea('Tarea 1');
    todoPage.elements.todoList().should('contain', 'Tarea 1');
  });

  it('2. Debe marcar y desmarcar una tarea', () => {
    const tarea = 'Tarea Toggle';
    todoPage.agregarTarea(tarea);
    
    // Marcar
    todoPage.clicarCheckbox(tarea);
    todoPage.elements.todoCheckbox(tarea).should('be.checked');
    
    // Desmarcar
    todoPage.clicarCheckbox(tarea);
    todoPage.elements.todoCheckbox(tarea).should('not.be.checked');
  });

  it('3. Debe editar una tarea', () => {
    todoPage.agregarTarea('Tarea 1');
    todoPage.editarTarea('Tarea 1', 'Tarea 2');
    
    todoPage.elements.todoList().should('contain', 'Tarea 2');
    todoPage.elements.todoList().should('not.contain', 'Tarea 1');
  });

  it('4. Debe eliminar una tarea de la lista', () => {
    todoPage.agregarTarea('Para borrar');
    todoPage.borrarTarea('Para borrar');
    todoPage.elements.todoList().should('not.contain', 'Para borrar');
  });

  it('5. Debe filtrar tareas correctamente', () => {
    todoPage.agregarTarea('Activa');
    todoPage.agregarTarea('Completada');
    todoPage.clicarCheckbox('Completada');

    // Filtro Completados
    todoPage.filtrarPor('Completed');
    todoPage.elements.todoList().should('contain', 'Completada');
    todoPage.elements.todoList().should('not.contain', 'Activa');

    // Filtro Activos
    todoPage.filtrarPor('Active');
    todoPage.elements.todoList().should('contain', 'Activa');
    todoPage.elements.todoList().should('not.contain', 'Completada');
  });
});