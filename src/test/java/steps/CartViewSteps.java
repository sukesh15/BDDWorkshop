package steps;

import cucumber.api.java.en.Then;
import pages.CartViewPage;

import static junit.framework.Assert.assertEquals;

/**
 * Created with IntelliJ IDEA.
 * User: Sukeshk
 * Date: 18/04/14
 * Time: 9:05 PM
 * To change this template use File | Settings | File Templates.
 */
public class CartViewSteps extends BaseSteps {

    @Then("^he should have (\\d+) items in the cart$")
    public void he_should_have_items_in_the_cart(int numberOfItems) throws Throwable {
        int itemCount = Integer.parseInt(pageStore.get(CartViewPage.class).getItemCount());
        assertEquals(numberOfItems,itemCount) ;
    }
}
