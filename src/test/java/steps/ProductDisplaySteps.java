package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import pages.ProductDisplayPage;

/**
 * Created with IntelliJ IDEA.
 * User: Sukeshk
 * Date: 03/04/14
 * Time: 1:47 PM
 * To change this template use File | Settings | File Templates.
 */
public class ProductDisplaySteps extends BaseSteps{


    @When("^he looks at the shopping cart$")
    public void he_looks_at_the_shopping_cart() throws Throwable {
        pageStore.get(ProductDisplayPage.class).goToShoppingCart();
    }


//    @And("^he adds the selected item to the cart$")
//    public void he_adds_the_selected_item_to_the_cart() throws Throwable {
//        pageStore.get(ProductDisplayPage.class).addItemToCart();
//    }

}
