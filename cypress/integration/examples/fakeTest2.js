/// <reference types="Cypress" />
let length;
 
describe('My First Api Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
 
    cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
    (req)=>
    {
    req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
 
    req.continue((res)=>
    {
       // expect(res.statusCode).to.equal(403)
    })
 }
 ).as("dummyUrl")
 
 cy.get("button[class='btn btn-primary']").click()
 cy.wait('@dummyUrl').should( function({request, response}) {
   length = response.body?.length
  cy.get("tr").should('have.length', length + 1)
  cy.log(length)
})


  cy.get('p').then(($el) => {
    if(length ===1){
    expect($el.text().includes(`only ${length} Book`)).to.be.true}
    else null
})

 
})
 
})