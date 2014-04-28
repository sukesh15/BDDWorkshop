$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DataDrivenExample.feature");
formatter.feature({
  "id": "as-a-registered-customer",
  "tags": [
    {
      "name": "@E2E,",
      "line": 1
    },
    {
      "name": "@Checkout",
      "line": 1
    }
  ],
  "description": "I want to be able to search for an item\nSo that i can buy the same",
  "name": "As a registered customer",
  "keyword": "Feature",
  "line": 2
});
formatter.before({
  "duration": 70472625000,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027sukesh\u0027, ip: \u0027223.239.242.31\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.7.5\u0027, java.version: \u00271.6.0_65\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:589)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:300)\n\tat steps.SearchSteps.setUp(SearchSteps.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n\tat java.lang.reflect.Method.invoke(Method.java:597)\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:191)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\n\tat org.apache.maven.surefire.junit4.JUnit4TestSet.execute(JUnit4TestSet.java:35)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:115)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:97)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n\tat java.lang.reflect.Method.invoke(Method.java:597)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ClassLoaderProxy.invoke(ProviderFactory.java:103)\n\tat com.sun.proxy.$Proxy0.invoke(Unknown Source)\n\tat org.apache.maven.surefire.booter.SurefireStarter.invokeProvider(SurefireStarter.java:150)\n\tat org.apache.maven.surefire.booter.SurefireStarter.runSuitesInProcess(SurefireStarter.java:91)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:69)\nCaused by: java.net.ConnectException: Connection refused\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.PlainSocketImpl.doConnect(PlainSocketImpl.java:382)\n\tat java.net.PlainSocketImpl.connectToAddress(PlainSocketImpl.java:241)\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:228)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:431)\n\tat java.net.Socket.connect(Socket.java:527)\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:117)\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:178)\n\tat org.apache.http.impl.conn.AbstractPoolEntry.open(AbstractPoolEntry.java:144)\n\tat org.apache.http.impl.conn.AbstractPooledConnAdapter.open(AbstractPooledConnAdapter.java:131)\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:863)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.fallBackExecute(HttpCommandExecutor.java:340)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:301)\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:165)\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:362)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:568)\n\t... 61 more\n"
});
formatter.scenario({
  "id": "as-a-registered-customer;:-e2e-flow-as-a-registered-user;;2",
  "tags": [
    {
      "name": "@E2E,",
      "line": 1
    },
    {
      "name": "@Checkout",
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
  "status": "skipped"
});
formatter.match({
  "location": "SearchSteps.clears_the_cart_if_there_are_existing_items()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
formatter.after({
  "duration": 21097000,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027sukesh\u0027, ip: \u0027223.239.242.31\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.7.5\u0027, java.version: \u00271.6.0_65\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:589)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:610)\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:464)\n\tat steps.PageStore.destroy(PageStore.java:45)\n\tat steps.SearchSteps.tearDown(SearchSteps.java:27)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n\tat java.lang.reflect.Method.invoke(Method.java:597)\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:195)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\n\tat org.apache.maven.surefire.junit4.JUnit4TestSet.execute(JUnit4TestSet.java:35)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:115)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:97)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n\tat java.lang.reflect.Method.invoke(Method.java:597)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ClassLoaderProxy.invoke(ProviderFactory.java:103)\n\tat com.sun.proxy.$Proxy0.invoke(Unknown Source)\n\tat org.apache.maven.surefire.booter.SurefireStarter.invokeProvider(SurefireStarter.java:150)\n\tat org.apache.maven.surefire.booter.SurefireStarter.runSuitesInProcess(SurefireStarter.java:91)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:69)\nCaused by: java.net.ConnectException: Connection refused\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.PlainSocketImpl.doConnect(PlainSocketImpl.java:382)\n\tat java.net.PlainSocketImpl.connectToAddress(PlainSocketImpl.java:241)\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:228)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:431)\n\tat java.net.Socket.connect(Socket.java:527)\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:117)\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:178)\n\tat org.apache.http.impl.conn.AbstractPoolEntry.open(AbstractPoolEntry.java:144)\n\tat org.apache.http.impl.conn.AbstractPooledConnAdapter.open(AbstractPooledConnAdapter.java:131)\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:863)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.fallBackExecute(HttpCommandExecutor.java:322)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:301)\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:165)\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:362)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:568)\n\t... 63 more\n"
});
formatter.before({
  "duration": 5693950000,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027sukesh\u0027, ip: \u0027223.239.242.31\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.7.5\u0027, java.version: \u00271.6.0_65\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:589)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:300)\n\tat steps.SearchSteps.setUp(SearchSteps.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n\tat java.lang.reflect.Method.invoke(Method.java:597)\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:191)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\n\tat org.apache.maven.surefire.junit4.JUnit4TestSet.execute(JUnit4TestSet.java:35)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:115)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:97)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n\tat java.lang.reflect.Method.invoke(Method.java:597)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ClassLoaderProxy.invoke(ProviderFactory.java:103)\n\tat com.sun.proxy.$Proxy0.invoke(Unknown Source)\n\tat org.apache.maven.surefire.booter.SurefireStarter.invokeProvider(SurefireStarter.java:150)\n\tat org.apache.maven.surefire.booter.SurefireStarter.runSuitesInProcess(SurefireStarter.java:91)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:69)\nCaused by: java.net.ConnectException: Connection refused\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.PlainSocketImpl.doConnect(PlainSocketImpl.java:382)\n\tat java.net.PlainSocketImpl.connectToAddress(PlainSocketImpl.java:241)\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:228)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:431)\n\tat java.net.Socket.connect(Socket.java:527)\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:117)\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:178)\n\tat org.apache.http.impl.conn.AbstractPoolEntry.open(AbstractPoolEntry.java:144)\n\tat org.apache.http.impl.conn.AbstractPooledConnAdapter.open(AbstractPooledConnAdapter.java:131)\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:863)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.fallBackExecute(HttpCommandExecutor.java:340)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:301)\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:165)\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:362)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:568)\n\t... 61 more\n"
});
formatter.scenario({
  "id": "as-a-registered-customer;:-e2e-flow-as-a-registered-user;;3",
  "tags": [
    {
      "name": "@E2E,",
      "line": 1
    },
    {
      "name": "@Checkout",
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
  "status": "skipped"
});
formatter.match({
  "location": "SearchSteps.clears_the_cart_if_there_are_existing_items()"
});
formatter.result({
  "status": "skipped"
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
formatter.after({
  "duration": 23552000,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027sukesh\u0027, ip: \u0027223.239.242.31\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.7.5\u0027, java.version: \u00271.6.0_65\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:589)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:610)\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:464)\n\tat steps.PageStore.destroy(PageStore.java:45)\n\tat steps.SearchSteps.tearDown(SearchSteps.java:27)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n\tat java.lang.reflect.Method.invoke(Method.java:597)\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:195)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\n\tat org.apache.maven.surefire.junit4.JUnit4TestSet.execute(JUnit4TestSet.java:35)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:115)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:97)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n\tat java.lang.reflect.Method.invoke(Method.java:597)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ClassLoaderProxy.invoke(ProviderFactory.java:103)\n\tat com.sun.proxy.$Proxy0.invoke(Unknown Source)\n\tat org.apache.maven.surefire.booter.SurefireStarter.invokeProvider(SurefireStarter.java:150)\n\tat org.apache.maven.surefire.booter.SurefireStarter.runSuitesInProcess(SurefireStarter.java:91)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:69)\nCaused by: java.net.ConnectException: Connection refused\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.PlainSocketImpl.doConnect(PlainSocketImpl.java:382)\n\tat java.net.PlainSocketImpl.connectToAddress(PlainSocketImpl.java:241)\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:228)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:431)\n\tat java.net.Socket.connect(Socket.java:527)\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:117)\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:178)\n\tat org.apache.http.impl.conn.AbstractPoolEntry.open(AbstractPoolEntry.java:144)\n\tat org.apache.http.impl.conn.AbstractPooledConnAdapter.open(AbstractPooledConnAdapter.java:131)\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:863)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.fallBackExecute(HttpCommandExecutor.java:322)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:301)\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:165)\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:362)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:568)\n\t... 63 more\n"
});
formatter.uri("TargetE2E.feature");
formatter.feature({
  "id": "as-a-target-website-user",
  "description": "I want to be able to search for an item\nSo that i can buy it",
  "name": "As a target website user",
  "keyword": "Feature",
  "line": 2
});
formatter.before({
  "duration": 5090992000,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027sukesh\u0027, ip: \u0027223.239.242.31\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.7.5\u0027, java.version: \u00271.6.0_65\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:589)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:300)\n\tat steps.SearchSteps.setUp(SearchSteps.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n\tat java.lang.reflect.Method.invoke(Method.java:597)\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:191)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\n\tat org.apache.maven.surefire.junit4.JUnit4TestSet.execute(JUnit4TestSet.java:35)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:115)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:97)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n\tat java.lang.reflect.Method.invoke(Method.java:597)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ClassLoaderProxy.invoke(ProviderFactory.java:103)\n\tat com.sun.proxy.$Proxy0.invoke(Unknown Source)\n\tat org.apache.maven.surefire.booter.SurefireStarter.invokeProvider(SurefireStarter.java:150)\n\tat org.apache.maven.surefire.booter.SurefireStarter.runSuitesInProcess(SurefireStarter.java:91)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:69)\nCaused by: java.net.ConnectException: Connection refused\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.PlainSocketImpl.doConnect(PlainSocketImpl.java:382)\n\tat java.net.PlainSocketImpl.connectToAddress(PlainSocketImpl.java:241)\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:228)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:431)\n\tat java.net.Socket.connect(Socket.java:527)\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:117)\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:178)\n\tat org.apache.http.impl.conn.AbstractPoolEntry.open(AbstractPoolEntry.java:144)\n\tat org.apache.http.impl.conn.AbstractPooledConnAdapter.open(AbstractPooledConnAdapter.java:131)\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:863)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.fallBackExecute(HttpCommandExecutor.java:340)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:301)\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:165)\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:362)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:568)\n\t... 45 more\n"
});
formatter.scenario({
  "id": "as-a-target-website-user;search-for-an-item-and-add-to-basket",
  "description": "",
  "name": "search for an item and add to basket",
  "keyword": "Scenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "user searches for \"ipad\"",
  "keyword": "Given ",
  "line": 8
});
formatter.step({
  "name": "he selects \"Apple® iPad mini 16GB Wi-Fi - White (MD531LL/A)\" from the search results",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "he adds the selected item to the cart",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "he chooses to checkout",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "he proceeds to checkout",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "he chooses to continue as a new guest",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "he enter the details of the new guest as below:",
  "keyword": "And ",
  "line": 15,
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "address",
        "zipcode",
        "city",
        "state",
        "phoneNumber"
      ],
      "line": 16
    },
    {
      "cells": [
        "E2E",
        "Tester",
        "416 Water St Apt Ny10001",
        "10002",
        "NewYork",
        "NY",
        "1234567890"
      ],
      "line": 17
    }
  ]
});
formatter.step({
  "name": "he chooses to pay with a credit card",
  "keyword": "And ",
  "line": 18
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple® iPad mini 16GB Wi-Fi - White (MD531LL/A)",
      "offset": 12
    }
  ],
  "location": "SearchSteps.he_selects_from_the_search_results(String)"
});
formatter.result({
  "duration": 0,
  "status": "failed",
  "error_message": "cucumber.runtime.AmbiguousStepDefinitionsException: ✽.And he selects \"Apple® iPad mini 16GB Wi-Fi - White (MD531LL/A)\" from the search results(TargetE2E.feature:9) matches more than one step definition:\n  ^he selects \"([^\"]*)\" from the search results$ in SearchSteps.he_selects_from_the_search_results(String)\n  ^he selects (.*) from the search results$ in SearchSteps.he_selects_itemTitle_from_the_search_results(String)\n\n\tat cucumber.runtime.RuntimeGlue.stepDefinitionMatch(RuntimeGlue.java:85)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:256)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\n\tat org.apache.maven.surefire.junit4.JUnit4TestSet.execute(JUnit4TestSet.java:35)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:115)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:97)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n\tat java.lang.reflect.Method.invoke(Method.java:597)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ClassLoaderProxy.invoke(ProviderFactory.java:103)\n\tat com.sun.proxy.$Proxy0.invoke(Unknown Source)\n\tat org.apache.maven.surefire.booter.SurefireStarter.invokeProvider(SurefireStarter.java:150)\n\tat org.apache.maven.surefire.booter.SurefireStarter.runSuitesInProcess(SurefireStarter.java:91)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:69)\n"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "location": "CheckOutSteps.he_chooses_to_continue_as_a_new_guest()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckOutSteps.he_enter_the_details_of_the_new_guest_as_below(CheckOutSteps$GuestDetails\u003e)"
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
formatter.after({
  "duration": 16355000,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027sukesh\u0027, ip: \u0027223.239.242.31\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.7.5\u0027, java.version: \u00271.6.0_65\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:589)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:610)\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:464)\n\tat steps.PageStore.destroy(PageStore.java:45)\n\tat steps.SearchSteps.tearDown(SearchSteps.java:27)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n\tat java.lang.reflect.Method.invoke(Method.java:597)\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:195)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\n\tat org.apache.maven.surefire.junit4.JUnit4TestSet.execute(JUnit4TestSet.java:35)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:115)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:97)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n\tat java.lang.reflect.Method.invoke(Method.java:597)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ClassLoaderProxy.invoke(ProviderFactory.java:103)\n\tat com.sun.proxy.$Proxy0.invoke(Unknown Source)\n\tat org.apache.maven.surefire.booter.SurefireStarter.invokeProvider(SurefireStarter.java:150)\n\tat org.apache.maven.surefire.booter.SurefireStarter.runSuitesInProcess(SurefireStarter.java:91)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:69)\nCaused by: java.net.ConnectException: Connection refused\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.PlainSocketImpl.doConnect(PlainSocketImpl.java:382)\n\tat java.net.PlainSocketImpl.connectToAddress(PlainSocketImpl.java:241)\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:228)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:431)\n\tat java.net.Socket.connect(Socket.java:527)\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:117)\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:178)\n\tat org.apache.http.impl.conn.AbstractPoolEntry.open(AbstractPoolEntry.java:144)\n\tat org.apache.http.impl.conn.AbstractPooledConnAdapter.open(AbstractPooledConnAdapter.java:131)\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:863)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.fallBackExecute(HttpCommandExecutor.java:322)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:301)\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:165)\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:362)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:568)\n\t... 47 more\n"
});
formatter.before({
  "duration": 5600099000,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027sukesh\u0027, ip: \u0027223.239.242.31\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.7.5\u0027, java.version: \u00271.6.0_65\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:589)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:300)\n\tat steps.SearchSteps.setUp(SearchSteps.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n\tat java.lang.reflect.Method.invoke(Method.java:597)\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:191)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\n\tat org.apache.maven.surefire.junit4.JUnit4TestSet.execute(JUnit4TestSet.java:35)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:115)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:97)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n\tat java.lang.reflect.Method.invoke(Method.java:597)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ClassLoaderProxy.invoke(ProviderFactory.java:103)\n\tat com.sun.proxy.$Proxy0.invoke(Unknown Source)\n\tat org.apache.maven.surefire.booter.SurefireStarter.invokeProvider(SurefireStarter.java:150)\n\tat org.apache.maven.surefire.booter.SurefireStarter.runSuitesInProcess(SurefireStarter.java:91)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:69)\nCaused by: java.net.ConnectException: Connection refused\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.PlainSocketImpl.doConnect(PlainSocketImpl.java:382)\n\tat java.net.PlainSocketImpl.connectToAddress(PlainSocketImpl.java:241)\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:228)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:431)\n\tat java.net.Socket.connect(Socket.java:527)\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:117)\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:178)\n\tat org.apache.http.impl.conn.AbstractPoolEntry.open(AbstractPoolEntry.java:144)\n\tat org.apache.http.impl.conn.AbstractPooledConnAdapter.open(AbstractPooledConnAdapter.java:131)\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:863)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.fallBackExecute(HttpCommandExecutor.java:340)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:301)\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:165)\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:362)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:568)\n\t... 45 more\n"
});
formatter.scenario({
  "id": "as-a-target-website-user;search-and-add-more-than-one-items-in-the-cart",
  "description": "",
  "name": "search and add more than one items in the cart",
  "keyword": "Scenario",
  "line": 24,
  "type": "scenario",
  "comments": [
    {
      "value": "#    And he enters the credit card details as follows:",
      "line": 19
    },
    {
      "value": "#      | cardNumber | cardHolderName | expiryMonth | expiryYear | securityCode |",
      "line": 20
    },
    {
      "value": "#      |            |                |             |            |              |",
      "line": 21
    }
  ]
});
formatter.step({
  "name": "user choose to search and add the following items to the cart:",
  "keyword": "Given ",
  "line": 26,
  "rows": [
    {
      "cells": [
        "searchItemByText",
        "itemTitle"
      ],
      "line": 27
    },
    {
      "cells": [
        "ipad",
        "Apple® iPad mini 16GB Wi-Fi - White (MD531LL/A)"
      ],
      "line": 28
    },
    {
      "cells": [
        "canon powershot",
        "Canon PowerShot SX-50 12.1MP Digital Camera with 50x Optical Zoom - Black"
      ],
      "line": 29
    }
  ]
});
formatter.step({
  "name": "he looks at the shopping cart",
  "keyword": "When ",
  "line": 30
});
formatter.step({
  "name": "he should have 2 items in the cart",
  "keyword": "Then ",
  "line": 31
});
formatter.step({
  "name": "he proceeds to checkout",
  "keyword": "When ",
  "line": 33
});
formatter.match({
  "location": "SearchSteps.user_choose_to_search_and_add_the_following_items_to_the_cart(SearchSteps$Item\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProductDisplaySteps.he_looks_at_the_shopping_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 15
    }
  ],
  "location": "CartViewSteps.he_should_have_items_in_the_cart(int)"
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
formatter.after({
  "duration": 18441000,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027sukesh\u0027, ip: \u0027223.239.242.31\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.7.5\u0027, java.version: \u00271.6.0_65\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:589)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:610)\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:464)\n\tat steps.PageStore.destroy(PageStore.java:45)\n\tat steps.SearchSteps.tearDown(SearchSteps.java:27)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n\tat java.lang.reflect.Method.invoke(Method.java:597)\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:195)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\n\tat org.apache.maven.surefire.junit4.JUnit4TestSet.execute(JUnit4TestSet.java:35)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:115)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:97)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n\tat java.lang.reflect.Method.invoke(Method.java:597)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ClassLoaderProxy.invoke(ProviderFactory.java:103)\n\tat com.sun.proxy.$Proxy0.invoke(Unknown Source)\n\tat org.apache.maven.surefire.booter.SurefireStarter.invokeProvider(SurefireStarter.java:150)\n\tat org.apache.maven.surefire.booter.SurefireStarter.runSuitesInProcess(SurefireStarter.java:91)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:69)\nCaused by: java.net.ConnectException: Connection refused\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.PlainSocketImpl.doConnect(PlainSocketImpl.java:382)\n\tat java.net.PlainSocketImpl.connectToAddress(PlainSocketImpl.java:241)\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:228)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:431)\n\tat java.net.Socket.connect(Socket.java:527)\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:117)\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:178)\n\tat org.apache.http.impl.conn.AbstractPoolEntry.open(AbstractPoolEntry.java:144)\n\tat org.apache.http.impl.conn.AbstractPooledConnAdapter.open(AbstractPooledConnAdapter.java:131)\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:863)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.fallBackExecute(HttpCommandExecutor.java:322)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:301)\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:165)\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:362)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:568)\n\t... 47 more\n"
});
formatter.before({
  "duration": 5013051000,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027sukesh\u0027, ip: \u0027223.239.242.31\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.7.5\u0027, java.version: \u00271.6.0_65\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:589)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:300)\n\tat steps.SearchSteps.setUp(SearchSteps.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n\tat java.lang.reflect.Method.invoke(Method.java:597)\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:191)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\n\tat org.apache.maven.surefire.junit4.JUnit4TestSet.execute(JUnit4TestSet.java:35)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:115)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:97)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n\tat java.lang.reflect.Method.invoke(Method.java:597)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ClassLoaderProxy.invoke(ProviderFactory.java:103)\n\tat com.sun.proxy.$Proxy0.invoke(Unknown Source)\n\tat org.apache.maven.surefire.booter.SurefireStarter.invokeProvider(SurefireStarter.java:150)\n\tat org.apache.maven.surefire.booter.SurefireStarter.runSuitesInProcess(SurefireStarter.java:91)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:69)\nCaused by: java.net.ConnectException: Connection refused\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.PlainSocketImpl.doConnect(PlainSocketImpl.java:382)\n\tat java.net.PlainSocketImpl.connectToAddress(PlainSocketImpl.java:241)\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:228)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:431)\n\tat java.net.Socket.connect(Socket.java:527)\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:117)\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:178)\n\tat org.apache.http.impl.conn.AbstractPoolEntry.open(AbstractPoolEntry.java:144)\n\tat org.apache.http.impl.conn.AbstractPooledConnAdapter.open(AbstractPooledConnAdapter.java:131)\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:863)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.fallBackExecute(HttpCommandExecutor.java:340)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:301)\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:165)\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:362)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:568)\n\t... 61 more\n"
});
formatter.scenario({
  "id": "as-a-target-website-user;:-search-and-add-items-as-a-registered-user;;2",
  "description": "",
  "name": ": search and add items as a registered user",
  "keyword": "Scenario Outline",
  "line": 44,
  "type": "scenario"
});
formatter.step({
  "name": "user logs in to the website with tosukeshk@gmail.com and sukesh15",
  "keyword": "Given ",
  "line": 38,
  "matchedColumns": [
    0,
    1
  ]
});
formatter.step({
  "name": "he searches for an item with ipad",
  "keyword": "And ",
  "line": 39,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "he selects Apple® iPad mini 16GB Wi-Fi - White (MD531LL/A) from the search results",
  "keyword": "And ",
  "line": 40,
  "matchedColumns": [
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "tosukeshk@gmail.com",
      "offset": 33
    },
    {
      "val": "sukesh15",
      "offset": 57
    }
  ],
  "location": "SearchSteps.user_logs_in_to_the_website_with_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "an item with ipad",
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
      "val": "Apple® iPad mini 16GB Wi-Fi - White (MD531LL/A)",
      "offset": 11
    }
  ],
  "location": "SearchSteps.he_selects_itemTitle_from_the_search_results(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 14620000,
  "status": "failed",
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027sukesh\u0027, ip: \u0027223.239.242.31\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.7.5\u0027, java.version: \u00271.6.0_65\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:589)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:610)\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:464)\n\tat steps.PageStore.destroy(PageStore.java:45)\n\tat steps.SearchSteps.tearDown(SearchSteps.java:27)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n\tat java.lang.reflect.Method.invoke(Method.java:597)\n\tat cucumber.runtime.Utils$1.call(Utils.java:35)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:213)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:201)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:195)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:82)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:41)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:87)\n\tat org.apache.maven.surefire.junit4.JUnit4TestSet.execute(JUnit4TestSet.java:35)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:115)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:97)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n\tat java.lang.reflect.Method.invoke(Method.java:597)\n\tat org.apache.maven.surefire.booter.ProviderFactory$ClassLoaderProxy.invoke(ProviderFactory.java:103)\n\tat com.sun.proxy.$Proxy0.invoke(Unknown Source)\n\tat org.apache.maven.surefire.booter.SurefireStarter.invokeProvider(SurefireStarter.java:150)\n\tat org.apache.maven.surefire.booter.SurefireStarter.runSuitesInProcess(SurefireStarter.java:91)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:69)\nCaused by: java.net.ConnectException: Connection refused\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.PlainSocketImpl.doConnect(PlainSocketImpl.java:382)\n\tat java.net.PlainSocketImpl.connectToAddress(PlainSocketImpl.java:241)\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:228)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:431)\n\tat java.net.Socket.connect(Socket.java:527)\n\tat org.apache.http.conn.scheme.PlainSocketFactory.connectSocket(PlainSocketFactory.java:117)\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:178)\n\tat org.apache.http.impl.conn.AbstractPoolEntry.open(AbstractPoolEntry.java:144)\n\tat org.apache.http.impl.conn.AbstractPooledConnAdapter.open(AbstractPooledConnAdapter.java:131)\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:863)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.fallBackExecute(HttpCommandExecutor.java:322)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:301)\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:165)\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:362)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:568)\n\t... 63 more\n"
});
});