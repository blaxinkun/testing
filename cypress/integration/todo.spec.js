



/// <reference types="cypress" />


// cy.get('.new-todo').type("Feed Sarri{enter}")
// cy.get(':nth-child(1) > .view > .toggle').click()
// cy.get(':nth-child(2) > .view > .toggle').click()

// cy.get('.selected').click()
// // cy.contains('Clear completed').click()
// cy.contains('Active').click()

import {addTodo, navigate, shouldChecked, shouldText} from '../todo-functions/todo-page'

describe('todo actions', () =>{

    beforeEach(() => {

        navigate();
        

    
        
        
    });

    it('should add a new todo to the list', () =>{
        addTodo("Learn cypress")
        shouldText("Learn cypress")
        shouldChecked()

        
        // cy.get('label').should('have.text', 'Learn cypress')
        // cy.get('.toggle').should('not.be.checked')
        
        })
        
        
        it('should mark as completed', () =>{
            addTodo("Learn cypress")
            cy.get('.toggle').click()
            cy.get('.toggle').should('be.checked')
        
            
        
        
        })
        
        it('should clear completed', () =>{
            addTodo("Learn cypress")
            cy.get('.toggle').click()
        
            cy.get('.clear-completed').click()
        
        cy.get('.todo-list').should('be.empty')
        
        })
        


})

