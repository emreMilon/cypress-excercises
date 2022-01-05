/// <reference types="Cypress" />

describe("My Fake Api Test Suite", () => {
  it("My first test case", () => {

    cy.visit("https://rahulshettyacademy.com/angularAppdemo/")

    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      {
        statusCode: 200,
        body: [{
            book_name: "RestAssured with Java",
            isbn: "RSU",
            aisle: "2301"}]
      }
    ).as("bookretrievals")

    cy.get("button[class='btn btn-primary']").click()
    // to wait for resolving promise 
    cy.wait("@bookretrievals").should( function({request, response}) {
        const length = response.body?.length
        cy.get("tr").should('have.length', length + 1)
    })

    cy.get('p').then(($el) => {
        expect($el.text().includes("only 1 Book")).to.be.true
    })

  });
});
