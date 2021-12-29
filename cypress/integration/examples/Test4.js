/// <reference types="Cypress" />

// alert pop ups testing

describe("My Fourth Test Suite", function () {
    it("My Fourth Test case", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#alertbtn").click()
        //window:alert
        cy.on("window:alert", (str) => {
            // for assertion we need to depend on mocha
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })
        cy.get("[value='Confirm']").click()
        //window:confirm confirm method ..
        cy.on("window:confirm", (str) => {
            // for assertion we need to depend on mocha
            expect(str).to.equal("Hello , Are you sure you want to confirm?")
        })
      
    })
})
