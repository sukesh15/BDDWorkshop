@wip
Feature: As a target website user
  I want to be able to search for an item
  So that i can buy it

  Scenario: search for an item and add to basket

    Given user searches for "ipad"
    And he selects "Apple® iPad mini 16GB Wi-Fi - White (MD531LL/A)" from the search results
    And he adds the selected item to the cart
    And he chooses to checkout
    And he proceeds to checkout
    And he chooses to continue as a new guest

    And he enter the details of the new guest as below:
      | firstName | lastName | address                  | zipcode | city    | state | phoneNumber |
      | E2E       | Tester   | 416 Water St Apt Ny10001 | 10002   | NewYork | NY    | 1234567890  |
    And he chooses to pay with a credit card
#    And he enters the credit card details as follows:
#      | cardNumber | cardHolderName | expiryMonth | expiryYear | securityCode |
#      |            |                |             |            |              |


  Scenario: search and add more than one items in the cart

    Given user choose to search and add the following items to the cart:
      | searchItemByText | itemTitle                                                                 |
      | ipad             | Apple® iPad mini 16GB Wi-Fi - White (MD531LL/A)                           |
      | canon powershot  | Canon PowerShot SX-50 12.1MP Digital Camera with 50x Optical Zoom - Black |
    When he looks at the shopping cart
    Then he should have 2 items in the cart

    When he proceeds to checkout


  Scenario Outline: : search and add items as a registered user

    Given user logs in to the website with <username> and <password>
    And he searches for an item with <searchText>
    And he selects <itemTitle> from the search results

  Examples:
    | username            | password | searchText | itemTitle                                       |
    | tosukeshk@gmail.com | sukesh15 | ipad       | Apple® iPad mini 16GB Wi-Fi - White (MD531LL/A) |



