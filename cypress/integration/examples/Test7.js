/// <reference types="Cypress" />

// by grabbing href attribute value and then visit(url) 



describe("My Sixth Test Suite", function () {
    it("My Sixth Test case", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //cypress does not have method to grab attribute value
        //we need to rely on jquery

        cy.get('#opentab').then((el) => {
            // we need to resolve promise
            // prop is not coming from cypress
            const url = el.prop('href')
        })

        // it will not work because cypress
        // does not support opening main domain
        // after already visiting a main domain
        // like after google.com, trying to opening
        // open yahoo.com



    })
})