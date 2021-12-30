/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import "cypress-iframe";

// testing iframes

describe("My Eighty Test Suite", function () {
  it("My Eighty Test case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.frameLoaded("#courses-iframe");

    cy.iframe().find('a[href*="mentorship"]').eq(0).click();

    cy.iframe().find('h1[class*="pricing-title"]').should("have.length", 2);
  });
});
