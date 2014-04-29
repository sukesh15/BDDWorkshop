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
  "duration": 11756237000,
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
  "duration": 6465929000,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.clears_the_cart_if_there_are_existing_items()"
});
formatter.result({
  "duration": 37311490000,
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
  "duration": 5879932000,
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
  "duration": 419990000,
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
  "duration": 4282286000,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.he_adds_the_selected_item_to_the_cart()"
});
formatter.result({
  "duration": 584466000,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutSteps.he_chooses_to_checkout()"
});
formatter.result({
  "duration": 7837926000,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutSteps.he_proceeds_to_checkout()"
});
formatter.result({
  "duration": 1536310000,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutSteps.he_chooses_to_proceed_with_the_default_shipping_address()"
});
formatter.result({
  "duration": 12276707000,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutSteps.he_chooses_to_pay_with_a_credit_card()"
});
formatter.result({
  "duration": 11300566000,
  "status": "passed"
});
formatter.after({
  "duration": 93399000,
  "status": "passed"
});
formatter.before({
  "duration": 11261166000,
  "status": "passed"
});
formatter.scenario({
  "id": "as-a-registered-customer;:-e2e-flow-as-a-registered-user;;3",
  "tags": [
    {
      "name": "@E2E",
      "line": 1
    }
  ],
  "description": "",
  "name": ": E2E flow as a registered user",
  "keyword": "Scenario Outline",
  "line": 24,
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
  "name": "he searches for canon powershot",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "he selects Canon PowerShot SX-50 12.1MP Digital Camera with 50x Optical Zoom - Black from the search results",
  "keyword": "And ",
  "line": 10,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "he adds 1 of the chosen item",
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
  "duration": 5922028000,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.clears_the_cart_if_there_are_existing_items()"
});
formatter.result({
  "duration": 10152061000,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"a[title\u003d\u0027go back to shopping\u0027]\"}\nCommand duration or timeout: 7 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027Panis-MacBook-Pro.local\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.7.5\u0027, java.version: \u00271.7.0_45\u0027\nSession ID: a383dbca-d051-b84d-b10f-6b6613c46208\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dMAC, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dtrue, browserName\u003dfirefox, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dtrue, webStorageEnabled\u003dtrue, nativeEvents\u003dfalse, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d28.0}]\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:437)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:425)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\n\tat pages.CartViewPage.returnToShopping(CartViewPage.java:70)\n\tat steps.SearchSteps.clearCartIfNeeded(SearchSteps.java:83)\n\tat steps.SearchSteps.clears_the_cart_if_there_are_existing_items(SearchSteps.java:103)\n\tat ✽.And clears the cart if there are existing items(DataDrivenExample.feature:8)\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"a[title\u003d\u0027go back to shopping\u0027]\"}\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027Panis-MacBook-Pro.local\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.7.5\u0027, java.version: \u00271.7.0_45\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///var/folders/lx/g2qlzvkj4wbgkpq29px6yxqh0000gn/T/anonymous7821149993890533829webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8905)\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///var/folders/lx/g2qlzvkj4wbgkpq29px6yxqh0000gn/T/anonymous7821149993890533829webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8914)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///var/folders/lx/g2qlzvkj4wbgkpq29px6yxqh0000gn/T/anonymous7821149993890533829webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10884)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///var/folders/lx/g2qlzvkj4wbgkpq29px6yxqh0000gn/T/anonymous7821149993890533829webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10889)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///var/folders/lx/g2qlzvkj4wbgkpq29px6yxqh0000gn/T/anonymous7821149993890533829webdriver-profile/extensions/fxdriver@googlecode.com/components/command_processor.js:10831)\n"
});
formatter.match({
  "arguments": [
    {
      "val": "canon powershot",
      "offset": 16
    }
  ],
  "location": "SearchSteps.he_searches_for_searchItemByText(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Canon PowerShot SX-50 12.1MP Digital Camera with 50x Optical Zoom - Black",
      "offset": 11
    }
  ],
  "location": "SearchSteps.he_selects_itemTitle_from_the_search_results(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 8
    }
  ],
  "location": "SearchSteps.he_adds_quantity_of_the_chosen_item(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SearchSteps.he_adds_the_selected_item_to_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckOutSteps.he_chooses_to_checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckOutSteps.he_proceeds_to_checkout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckOutSteps.he_chooses_to_proceed_with_the_default_shipping_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckOutSteps.he_chooses_to_pay_with_a_credit_card()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 270992000,
  "status": "passed"
});
});