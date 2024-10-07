Feature: User login test


  Background:
    And User goes to the site`s main page
    And User goes to Book Store Application Page
    And User goes to Login page


  Scenario: Login should be success
    And User enters username as "userTest"
    And User enters password as "Qwe12345&"
    When User click on the login button
    Then Login should be successful