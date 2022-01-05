///<reference types="Cypress" />

describe("My first Api Test Suite", () => {
    it('My first Post Api Test case', () => {
        cy.request("POST", "http://216.10.245.166/Library/AddBook.php", {
            "name": "Learn Python Pandas",
            "isbn": "lppss",
            "aisle": "78w6",
            "author": "john dane"
        }).then(function (response) {
            expect(response.body).to.have.property("Msg","successfully added")
            exppect(response.status).to.equal(200)
        })
    })
})