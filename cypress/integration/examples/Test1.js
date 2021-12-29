/// <reference types="Cypress" />

describe("My first Test Suite", function () {
    it("My FirstTest case", function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type("ca")
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        // Parent child chaining
        cy.get(".products").as("productLocator") // with as we can resolve the promise
        cy.get('@productLocator').find('.product').should('have.length', 4) 
        // taking element according to its index and clicking to button
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click() // second element
        // unique css element
        cy.get(':nth-child(3) > .product-action > button').click() // third element
        // according to text inside because products quantity can change
        cy.get('@productLocator').find('.product').each(($el, index, $list) => { 
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
         })
         //assert if text logo is correct
         cy.get(".brand").should('have.text', "GREENKART")


         // text method is coming from jquery. Therefore we need to resolve the promise
        cy.get('.brand').then((logoelement) => { 
            cy.log(logoelement.text()) 
        }) 
    })
})