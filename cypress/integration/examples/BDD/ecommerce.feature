Feature: End to end Ecommerce validation

    application Regression

    Scenario: Ecommerce products delivery
    Given I open Ecommerce page 
    When I add items to the Cart 
    And Validate the total price 
    Then select the country, submit and verify success message
    
