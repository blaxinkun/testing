
/// <reference types="cypress" />

describe('Heading test', () =>{

    it('Contains the correct title', () =>{

        cy.visit('http://localhost:3000/example-4')

        cy.get('[data-cy=box-4-items-list] > :nth-child(1)').trigger("mouseover")
        cy.get('[data-cy=box-4-selected-name]').should('have.text', "Option Two")

        // cy.get('[data-cy=max-char-input]').type('Hello')

        // cy.get('[data-cy=chars-left-count]').should('have.text', 10)

        // cy.get('[data-cy=max-char-input]').type(' my')

        // cy.get('[data-cy=chars-left-count]').should('have.text', 7)

        // cy.get('[data-cy=max-char-input]').type(' friend')

        // cy.get('[data-cy=chars-left-count]').should('have.text', 0)






        // cy.get('h1').should('have.text','My Awesome Web Application')

        // cy.get('h1')
        //     // .invoke('text')
        //     // .should('equal', 'My Awesome Web Application')


    })


})