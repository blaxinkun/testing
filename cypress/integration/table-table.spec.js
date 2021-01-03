/// <reference types="cypress" />


const Login = (user , pass) =>{

    cy.contains("Login").click();

        cy.url().should("include", "/Account/Login");

        cy.get('#UserName').type("user");
        cy.get('#Password').type("pass");

        cy.get('.btn').click()


}

describe ("testing", ()=>{

    it("login", ()=>{

        cy.visit("http://eaapp.somee.com/");

        // cy.contains("Login").click();

        // cy.url().should("include", "/Account/Login");

        // cy.get('#UserName').type("admin");
        // cy.get('#Password').type("password");

        // cy.get('.btn').click()
        Login ("admin", "password")

        cy.contains("Employee List").click()

        //table
       // cy.get(':nth-child(3) > :nth-child(6) > a').click()
       cy.get('.table').find('tr').contains('Prashanth').parent().contains('Benefits').click()

       cy.contains("Back to List").click()

       cy.get('[type="text"]').type("John");

    //    cy.get('.btn').click()

    cy.contains("Search").click()

    cy.get('.table').find('tr').contains('John').parent().contains('Benefits').click()

    cy.contains("Back to List").click()




        
    })
})