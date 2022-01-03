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
    cy.visit("https://rahulshettyacademy.com/angularpractice/");

    homePage.getEditBox().type(this.name);
    homePage.getGenderBox().select(this.gender);
    homePage.getToWayDataBinding().should("have.value", this.name);
    homePage.getEditBox().should("have.attr", "minlength", "2");
    homePage.getEntrepreneaur().should("be.disabled");
    //building custom cypress commands
    homePage.getShopTab().click();
    this.productName.map((element) => cy.selectProduct(element));
    productPage.getCheckout().click();
    cy.contains("Checkout").click();
    cy.get("#country").type("Germany") // this step can take time for loading.
    //Therefore we need to change default setting of cypress.json file "defaultCommandTimeout"
    // It will effect all the tests
    //if we want to effect just this step
    //Cypress.config('defaultCommandTimeout', 8000)
    cy.get(".suggestions > ul > li > a").click()
    
  });
});
