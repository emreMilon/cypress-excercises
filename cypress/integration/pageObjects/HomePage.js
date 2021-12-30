class HomePage {
  getEditBox() {
    return cy.get(":nth-child(1) > .form-control");
  }
  getToWayDataBinding() {
    return cy.get(":nth-child(4) > .ng-untouched");
  }
  getGenderBox() {
    return cy.get("select");
  }
  getEntrepreneaur() {
    return cy.get("#inlineRadio3");
  }
  getShopTab() {
    return cy.get(":nth-child(2) > .nav-link");
  }
}

export default HomePage;
