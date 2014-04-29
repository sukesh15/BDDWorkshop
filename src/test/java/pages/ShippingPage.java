package pages;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 * Created with IntelliJ IDEA.
 * User: Sukeshk
 * Date: 25/04/14
 * Time: 12:22 PM
 * To change this template use File | Settings | File Templates.
 */
public class ShippingPage extends TargetBasePage {


    @FindBy(id = "shipping-submit")
    private WebElement shippingSubmitButton;

    public ShippingPage(WebDriver driver) {
        super(driver);
    }


    public void proceedWithDefaultShippingAddress() {
        waitForElementToBeClickable(shippingSubmitButton);
        shippingSubmitButton.click();
    }

}
