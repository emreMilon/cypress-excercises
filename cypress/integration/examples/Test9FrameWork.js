/// <reference types="Cypress" />

// testing by frameworks


describe("My Framefork Test Suite", function () {

    before(function() {
        // runs once before all tests in the block
        // arrow function does not work!!!
        cy.fixture('example.json').then((data) => {
            this.name = data.name
            this.gender= data.gender
        })
    })

    it("My Framefork Test case", function () {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        expect(this.name).to.equal("Emre")
        expect(this.gender).to.equal("Male")
        cy.get(':nth-child(1) > input.form-control').type(this.name)
        cy.get('select').select(this.gender)

        
    })
})