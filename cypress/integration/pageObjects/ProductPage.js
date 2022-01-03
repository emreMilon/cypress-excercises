class ProductPage {
    getCheckout() {
      return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
    getEachAmount() {
      return cy.get('tr td:nth-child(4) strong')
    }
    getTotalAmount() {
      return cy.get('h3 strong')
    }

  }
  
  export default ProductPage;