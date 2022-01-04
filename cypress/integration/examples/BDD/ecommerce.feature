Feature: End to end Ecommerce validation

    application Regression
    @Regression
    Scenario: Ecommerce products delivery
    Given I open Ecommerce page 
    When I add items to the Cart 
    And Validate the total price 
    Then select the country, submit and verify success message
    
    @Smoke
    Scenario: Filling the form to shop
    Given I open Ecommerce page 
    When I fill the form detail
    |name | gender |
    |monica| Female|
    Then validate the forms behavior
    And select the shop page