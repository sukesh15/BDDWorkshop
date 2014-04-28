package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class ProductDisplayPage extends TargetBasePage {

    WebDriver driver;

    public ProductDisplayPage(WebDriver driver) {
        super(driver);
    }

    @FindBy(id = "addToCart")
    private WebElement addToCart;

    @FindBy(linkText = "continue shopping")
    private WebElement continueShoppingLink;

    @FindBy(id = "mini-cart-icon")
    private WebElement shoppingCart;

    @FindBy(css = "input.quantity")
    private WebElement itemQuantityTextBox;

    public void addItemToCart() {
        addToCart.click();
    }

    public void continueShopping() {
        waitForElementToBeClickable(continueShoppingLink);
        continueShoppingLink.click();
    }

    public void goToShoppingCart() {
        shoppingCart.click();
    }


    public void enterNumberOfItemsToBeAddedAs(int quantity) {
        itemQuantityTextBox.clear();
        itemQuantityTextBox.sendKeys(String.valueOf(quantity));
    }
}
