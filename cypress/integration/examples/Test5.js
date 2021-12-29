/// <reference types="Cypress" />

// handling web tables with each command 


describe("My Fifth Test Suite", function () {
    it("My Fifth Test case", function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // it can change the quantity of rows.
        // Therefore we need to make algorithm dynamicaly
        // in every tr, there are 3 td and we need to iterate second of them

        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text();
            if (text.includes("Python")){
                // with next method we can reach to the sibling
                // we need to index here to get exact td
                cy.get('tr td:nth-child(2)').eq(index).next().then((price) => {
                    const priceText = price.text();
                    expect(priceText).to.equal("25")
                })
            }
        })





    })
})