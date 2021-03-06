package steps;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import pages.CartViewPage;
import pages.LandingPage;
import pages.ProductDisplayPage;
import pages.SearchListPage;

import java.util.List;

public class SearchSteps extends BaseSteps {


    @Before
    public void setUp() {
        System.out.println("inside setup");
        pageStore = new PageStore();
        System.out.println("launching website");

        pageStore.getDriver().get("http://www.target.com");
        System.out.println("website launched");
        pageStore.getDriver().manage().window().maximize();
    }

    @After
    public void tearDown(Scenario scenario) {
        embedScreenshot(scenario);
        pageStore.destroy();
    }

    public void embedScreenshot(Scenario scenario) {
        if (scenario.isFailed()) {
            byte[] screenshot = ((TakesScreenshot) pageStore.getDriver()).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png");
        }
    }


    @And("^he selects the first available item from the search results$")
    public void he_selects_the_first_available_item_from_the_search_results() throws Throwable {
        pageStore.get(SearchListPage.class).chooseTheFirstAvailableItem();
    }

    @And("^he selects \"([^\"]*)\" from the search results$")
    public void he_selects_from_the_search_results(String itemToBeChosen) throws Throwable {
        pageStore.get(SearchListPage.class).chooseTheItemWithTitle(itemToBeChosen);
    }


    @And("^he adds the selected item to his cart$")
    public void he_adds_the_selected_item_to_the_cart() throws Throwable {
        pageStore.get(ProductDisplayPage.class).addItemToCart();
    }

    @Given("^user choose to search and add the following items to the cart:$")
    public void user_choose_to_search_and_add_the_following_items_to_the_cart(List<Item> items) throws Throwable {

        for (Item item : items) {
            pageStore.get(LandingPage.class).searchFor(item.searchItemByText);
            he_selects_from_the_search_results(item.itemTitle);
            he_adds_the_selected_item_to_the_cart();
            pageStore.get(ProductDisplayPage.class).continueShopping();
        }

    }


    @Given("^user logs in to the website with (.*) and (.*)$")
    public void user_logs_in_to_the_website_with_username_and_password(String username, String password) throws Throwable {
        pageStore.get(LandingPage.class).loginToWebsiteWith(username, password);
    }

    private void clearCartIfNeeded() {
        int orderQuantity = pageStore.get(LandingPage.class).getOrderQuantity();
        System.out.println("order qty is --- " + orderQuantity);
        if (orderQuantity > 0) {

            pageStore.get(LandingPage.class).goToShoppingCart();
            pageStore.get(CartViewPage.class).removeAllItemsFromCart();
            pageStore.get(CartViewPage.class).returnToShopping();
        }
    }

    @Given("^user logs in to the website with <username> and <password>$")
    public void user_logs_in_to_the_website_with_username_and_password() throws Throwable {
    }

    @And("^he searches for (.*)$")
    public void he_searches_for_searchItemByText(String searchForItem) throws Throwable {
        pageStore.get(LandingPage.class).searchFor(searchForItem);
    }

    @And("^he selects (.*) from the search results$")
    public void he_selects_itemTitle_from_the_search_results(String itemTitle) throws Throwable {
        he_selects_from_the_search_results(itemTitle);
    }

    @And("^clears the cart if there are existing items$")
    public void clears_the_cart_if_there_are_existing_items() throws Throwable {
        clearCartIfNeeded();
    }

    @And("^he adds (\\d+) of the chosen item$")
    public void he_adds_quantity_of_the_chosen_item(int quantity) throws Throwable {
        pageStore.get(ProductDisplayPage.class).enterNumberOfItemsToBeAddedAs(quantity);
    }

    private class Item {
        public String searchItemByText;
        public String itemTitle;
    }
}
