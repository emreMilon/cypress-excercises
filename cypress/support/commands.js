Cypress.Commands.add("selectProduct", (productName) => {
    cy.get('h4.card-title').each(($el, index, $list) => {
        if($el.text().includes(productName)) {
            cy.get(".btn.btn-info").eq(index).click()
        }
    })
})