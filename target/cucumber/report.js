$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DataDrivenExample.feature");
formatter.feature({
  "id": "as-a-registered-customer",
  "tags": [
    {
      "name": "@E2E",
      "line": 1
    }
  ],
  "description": "I want to be able to search for an item\nSo that i can buy the same",
  "name": "As a registered customer",
  "keyword": "Feature",
  "line": 2
});
formatter.before({
  "duration": 11957405000,
  "status": "passed"
});
formatter.scenario({
  "id": "as-a-registered-customer;:-e2e-flow-as-a-registered-user;;2",
  "tags": [
    {
      "name": "@E2E",
      "line": 1
    }
  ],
  "description": "",
  "name": ": E2E flow as a registered user",
  "keyword": "Scenario Outline",
  "line": 23,
  "type": "scenario"
});
formatter.step({
  "name": "user logs in to the website with sukesh.kumar@target.com and target123",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "clears the cart if there are existing items",
  "keyword": "And ",
  "line": 8
});
formatter.step({
  "name": "he searches for ipad",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "he selects Apple® iPad mini 16GB Wi-Fi - White (MD531LL/A) from the search results",
  "keyword": "And ",
  "line": 10,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "he adds 2 of the chosen item",
  "keyword": "And ",
  "line": 11,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "he adds the selected item to his cart",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "he chooses to checkout",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "he proceeds to checkout",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "he chooses to proceed with the default shipping address",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "he chooses to pay with a credit card",
  "keyword": "And ",
  "line": 16
});
formatter.match({
  "arguments": [
    {
      "val": "sukesh.kumar@target.com",
      "offset": 33
    },
    {
      "val": "target123",
      "offset": 61
    }
  ],
  "location": "SearchSteps.user_logs_in_to_the_website_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 6043792000,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.clears_the_cart_if_there_are_existing_items()"
});
formatter.result({
  "duration": 25119543000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ipad",
      "offset": 16
    }
  ],
  "location": "SearchSteps.he_searches_for_searchItemByText(String)"
});
formatter.result({
  "duration": 7558883000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple® iPad mini 16GB Wi-Fi - White (MD531LL/A)",
      "offset": 11
    }
  ],
  "location": "SearchSteps.he_selects_itemTitle_from_the_search_results(String)"
});
formatter.result({
  "duration": 312375000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 8
    }
  ],
  "location": "SearchSteps.he_adds_quantity_of_the_chosen_item(int)"
});
formatter.result({
  "duration": 4287872000,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.he_adds_the_selected_item_to_the_cart()"
});
formatter.result({
  "duration": 302087000,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutSteps.he_chooses_to_checkout()"
});
formatter.result({
  "duration": 5572125000,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutSteps.he_proceeds_to_checkout()"
});
formatter.result({
  "duration": 1564398000,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutSteps.he_chooses_to_proceed_with_the_default_shipping_address()"
});
formatter.result({
  "duration": 12650305000,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutSteps.he_chooses_to_pay_with_a_credit_card()"
});
formatter.result({
  "duration": 19844531000,
  "status": "passed"
});
formatter.after({
  "duration": 98075000,
  "status": "passed"
});
});