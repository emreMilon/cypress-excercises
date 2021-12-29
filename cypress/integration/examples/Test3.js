/// <reference types="Cypress" />

describe("My Third Test Suite", function () {
    it("My Third Test case", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1') // with and we can concat assertion
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get("input[type='checkbox']").check(['option2', 'option3'])

        //static dropdown select tag html rule

        cy.get('select').select('option2').should('have.value', 'option2')

        //dynamic dropdown 

        cy.get('#autocomplete').type('ger')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text() === "Germany"){
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value','Germany')

    })
})
