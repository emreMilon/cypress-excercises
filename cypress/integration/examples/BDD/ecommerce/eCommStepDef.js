import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../../pageObjects/HomePage";
import ProductPage from "../../../pageObjects/ProductPage";
const homePage = new HomePage();
const productPage = new ProductPage();

Given('I open Ecommerce page', () => {
    cy.visit(Cypress.env("url")+ "angularpractice/")
})

When('I add items to the Cart', function() {
    // to be able to use this. we need to normal anonymus function not arrow
    homePage.getShopTab().click();
    this.productName.map((element) => cy.selectProduct(element));
    productPage.getCheckout().click();

})

And('Validate the total price', () => {
    let sum = 0;

    productPage.getEachAmount().each(($el, index, $list) => {
      const amount = $el.text()
      var res = amount.split(" ")
      res = res[1].trim()
      sum = Number(sum) + Number(res)    
    })

    productPage.getTotalAmount().each(($el) => {
      const amount = $el.text()
      var res = amount.split(" ")
      var total = Number(res[1].trim())
      expect(total).to.equal(sum)
    })
})

Then('select the country, submit and verify success message', () => {
    cy.contains("Checkout").click();
    cy.get("#country").type("Germany") 
    cy.get(".suggestions > ul > li > a").click()
    cy.get('.checkbox > label').click({force:true})
    cy.get('input[type="submit"]').click()
    cy.get('.alert').then(($el) => {
      const text = $el.text()
      expect(text.includes("Success!")).to.be.true
      // these assertions come from chai
    })
})