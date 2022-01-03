beforeEach(() => {
    cy.fixture("example").then(function (data) {
        this.productName = data.productName;
        this.name = data.name;
        this.gender = data.gender;
    })
})