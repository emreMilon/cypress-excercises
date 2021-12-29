/// <reference types="Cypress" />

// mouse hover popups  

//jquery show() method is to used to display hidden and selected elements 


describe("My Sixth Test Suite", function () {
    it("My Sixth Test case", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // we need to use here div because if we use button
        // it is grandparent. therefore it will raise error that it is invisible
        // we can use force:true
        cy.contains('Top').click({force:true})

        //cy.get('div.mouse-hover-content').invoke('show')
        //cy.contains('Top').click()
        cy.url().should('include', '#top')

    })
})