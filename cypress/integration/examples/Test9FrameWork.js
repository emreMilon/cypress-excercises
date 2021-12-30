/// <reference types="Cypress" />

// testing by frameworks


describe("My Framefork Test Suite", function () {

    before(function() {
        // runs once before all tests in the block
        // arrow function does not work!!!
        cy.fixture('example.json').then((data) => {
            this.productName = data.productName
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
        cy.get(':nth-child(4) > .ng-pristine').should('have.value', this.name)
        cy.get(':nth-child(1) > input.form-control').should('have.attr', "minlength", "2")
        cy.get('#inlineRadio3').should('be.disabled')
        //building custom cypress commands
        cy.get(':nth-child(2) > .nav-link').click()
        this.productName.map((element) => cy.selectProduct(element))

        
      

        
    })
})