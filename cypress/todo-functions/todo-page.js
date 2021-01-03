/// <reference types="cypress" />

 export function navigate(){

    cy.visit('http://todomvc-app-for-testing.surge.sh')
}

export function addTodo (texto){

    cy.get('.new-todo').type(texto + "{enter}")
}

export function click (texto){

    cy.contains(texto).click()
}

export function clickOn (number){
    cy.get(`:nth-child(${number}) > .view > .toggle`).click()
}

export function shouldLength (number){
    cy.get('.todo-list li').should('have.length', number)
}

export function shouldText (text){
    cy.get('label').should('have.text', text)
}

export function shouldChecked (){

    cy.get('.toggle').should('not.be.checked') 
}

export function urlContains (text){
    cy.url().should("include", text)
}

