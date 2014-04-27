@E2E, @Checkout
Feature: As a registered customer
  I want to be able to search for an item
  So that i can buy the same

  Scenario Outline: : E2E flow as a registered user
    Given user logs in to the website with sukesh.kumar@target.com and target123
    And he searches for <searchItemByText>
    And he selects <itemTitle> from the search results
    And he adds the selected item to the cart
    And he chooses to checkout
    And he proceeds to checkout
    And he chooses to proceed with the default shipping address
    And he chooses to pay with a credit card

  #    And he enters the shipping address with details of
  #    And he

  Examples:
    | searchItemByText | itemTitle                                                                 | cardNumber | cardHolderName | expiryMonth | expiryYear | securityCode |
    | ipad             | Apple® iPad mini 16GB Wi-Fi - White (MD531LL/A)                           |            |                |             |            |              |
    | canon powershot  | Canon PowerShot SX-50 12.1MP Digital Camera with 50x Optical Zoom - Black |            |                |             |            |              |


  Scenario: Demo to Anand
    Given user logs in to the website with "anand@target.com" and "something"
    And he searches for "ipad"
    And i am trying a new step