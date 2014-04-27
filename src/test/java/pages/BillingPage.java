package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import steps.CheckOutSteps;

/**
 * Created with IntelliJ IDEA.
 * User: Sukeshk
 * Date: 14/04/14
 * Time: 10:38 AM
 * To change this template use File | Settings | File Templates.
 */
public class BillingPage extends TargetBasePage {

    public BillingPage(WebDriver driver) {
        super(driver);
    }

    @FindBy(id = "payWithCreditcard")
    private WebElement creditCardCheckBox;

    @FindBy(id = "ccNumber")
    private WebElement cardNumber;

    @FindBy(id = "ccExpMonth")
    private WebElement expiryMonthSelection;

    @FindBy(id = "ccExpYear")
    private WebElement expiryYearSelection;

    @FindBy(id = "cvv")
    private WebElement securityCode;

    @FindBy(id = "ccName")
    private WebElement cardHolderNameTextBox;

    public void chooseToPayWithACreditCard() {
        waitForElementToBeClickable(creditCardCheckBox);
        if (!creditCardCheckBox.isSelected())
            creditCardCheckBox.click();
    }

    public void fillInCreditCardDetails(CheckOutSteps.CreditCardDetail cardDetails) {
        cardNumber.sendKeys(cardDetails.cardNumber);
        cardHolderNameTextBox.sendKeys(cardDetails.cardHolderName);
        new Select(expiryMonthSelection).selectByVisibleText(cardDetails.expiryMonth);
        new Select(expiryYearSelection).selectByVisibleText(cardDetails.expiryYear);
        securityCode.sendKeys(cardDetails.securityCode);
    }
}
