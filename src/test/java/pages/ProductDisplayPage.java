package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class ProductDisplayPage {

    WebDriver driver;

    public ProductDisplayPage(WebDriver driver) {
        this.driver = driver;
    }

    @FindBy(id = "addToCart")
    private WebElement addToCart;

    @FindBy(linkText = "continue shopping")
    private WebElement continueShoppingLink;

    @FindBy(id = "mini-cart-icon")
    private WebElement shoppingCart;


    public void addItemToCart() {
        addToCart.click();
    }

    public void continueShopping() {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.elementToBeClickable(continueShoppingLink));
        continueShoppingLink.click();
    }

    public void goToShoppingCart() {
        shoppingCart.click();
    }


}
