
/// <reference types="cypress" />


import {
    navigate,
    addTodo,
    click,
    clickOn,
    shouldLength
} from '../todo-functions/todo-page'

describe('Filtering', () => {

beforeEach(() => {

    navigate();
    addTodo("hola");
    addTodo("adios");
    addTodo("To be better Person")
    
    // cy.get('.new-todo').type("Learn cypress{enter}")
    // cy.get('.new-todo').type("Love Paz{enter}")
    // cy.get('.new-todo').type("To be better person{enter}")

    // cy.get(':nth-child(2) > .view > .toggle').click()
    clickOn(1)

    

    
});

it('Should filter active', () => {

    // cy.contains('Active').click()
    click("Active")
    shouldLength(2)

    // cy.get('.todo-list li').should('have.length', 2)
    
});

it('Should filter completed', () => {

    click("Completed")
    shouldLength(1)

    // cy.get('.todo-list li').should('have.length', 1)
    
});

it('Should filter all', () => {
    click("All")
    shouldLength(3)

    // cy.contains('All').click()

    // cy.get('.todo-list li').should('have.length', 3)
    
});
    
});