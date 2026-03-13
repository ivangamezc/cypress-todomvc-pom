import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import TodoPage from "../../../support/pages/TodoPage";

const todoPage = new TodoPage();

Given("que el usuario navega a la página de TodoMVC", () => {
  todoPage.visit();
});

When("agrega la tarea {string}", (tarea) => {
  todoPage.typeTodo(tarea);
});

Then("la lista debe mostrar {string}", (tareaEsperada) => {
  todoPage.validateTodoInList(tareaEsperada);
});

When("elimina la tarea {string}", (tarea) => {
  todoPage.borrarTarea(tarea);
});

Then("la lista no debe contener {string}", (tarea) => {
  cy.contains(tarea).should('not.exist');
});

Given("marca como completada la tarea {string}", (tarea) => {
  cy.contains(tarea).parent().find('.toggle').click();
});

When("filtra por el estado {string}", (estado) => {
  todoPage.filtrarPor(estado);
});

Then("la lista no debe mostrar {string}", (tarea) => {
  cy.contains(tarea).should('not.exist');
});

When("edita la tarea {string} por el nuevo nombre {string}", (vieja, nueva) => {
  
  cy.contains(vieja).dblclick();

  cy.get('.todo-list li input')
    .clear()
    .type(`${nueva}{enter}`);
});

When("desmarca la tarea {string}", (tarea) => {
  cy.contains(tarea).parent().find('.toggle').uncheck();
});

Then("la tarea {string} debe aparecer como completada", (tarea) => {
  cy.contains(tarea).parents('li').should('have.class', 'completed');
});

Then("la tarea {string} no debe aparecer como completada", (tarea) => {
  cy.contains(tarea).parents('li').should('not.have.class', 'completed');
});