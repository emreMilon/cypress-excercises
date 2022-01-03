/// <reference types="Cypress" />
import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";

// testing by frameworks

describe("My Framefork Test Suite", function () {
  before(function () {
    // runs once before all tests in the block
    // arrow function does not work!!!
    cy.fixture("example.json").then((data) => {
      this.productName = data.productName;
      this.name = data.name;
      this.gender = data.gender;
    });
  });

  it("My Framefork Test case", function () {
    const homePage = new HomePage();
    const productPage = new ProductPage();
    cy.visit(Cypress.env("url")+ "angularpractice/");
    // we can send the url from terminal 
    // npx cypress run --spec <file name> --env url=<url>

    homePage.getEditBox().type(this.name);
    homePage.getGenderBox().select(this.gender);
    homePage.getToWayDataBinding().should("have.value", this.name);
    homePage.getEditBox().should("have.attr", "minlength", "2");
    homePage.getEntrepreneaur().should("be.disabled");
    //building custom cypress commands
    homePage.getShopTab().click();
    this.productName.map((element) => cy.selectProduct(element));
    productPage.getCheckout().click();

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

    cy.contains("Checkout").click();
    cy.get("#country").type("Germany") // this step can take time for loading.
    //Therefore we need to change default setting of cypress.json file "defaultCommandTimeout"
    // It will effect all the tests
    //if we want to effect just this step
    //Cypress.config('defaultCommandTimeout', 8000)
    cy.get(".suggestions > ul > li > a").click()
    cy.get('.checkbox > label').click({force:true})
    cy.get('input[type="submit"]').click()
    //cy.get(".alert").should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
    //the above step can't work because in the browser can be spaces in the text.
    // So it may not be exactly equal.

    cy.get('.alert').then(($el) => {
      const text = $el.text()
      expect(text.includes("Success!")).to.be.true
      // these assertions come from chai
    })

    
  });
});
