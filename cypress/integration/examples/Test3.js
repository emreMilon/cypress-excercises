/// <reference types="Cypress" />

describe("My Third Test Suite", function () {
    it("My Third Test case", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1') // with and we can concat assertion
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get("input[type='checkbox']").check(['option2', 'option3'])
    })
})
