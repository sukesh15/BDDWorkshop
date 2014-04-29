package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;
import steps.CheckOutSteps;

public class GuestDetailsPage extends TargetBasePage {


    public GuestDetailsPage(WebDriver driver) {
        super(driver);
    }

    @FindBy(id = "firstName")
    private WebElement firstNameTextBox;

    @FindBy(id = "lastName")
    private WebElement lastNameTextBox;

    @FindBy(id = "address1")
    private WebElement addressTextBox;

    @FindBy(id = "zipCode")
    private WebElement zipcodeTextBox;

    @FindBy(id = "city")
    private WebElement cityTextBox;

    @FindBy(id = "state")
    private WebElement stateSelectionBox;

    @FindBy(id = "phone1")
    private WebElement phoneNumberTextBox;

    @FindBy(id = "shipping-submit")
    private WebElement savencontinue;

    public void enterGuestDetailsUsing(CheckOutSteps.GuestDetails details) {
        firstNameTextBox.sendKeys(details.firstName);
        lastNameTextBox.sendKeys(details.lastName);
        addressTextBox.sendKeys(details.address);
        zipcodeTextBox.sendKeys(details.zipcode);
        cityTextBox.sendKeys(details.city);
        new Select(stateSelectionBox).selectByValue(details.state);
        phoneNumberTextBox.sendKeys(details.phoneNumber);
        savencontinue.click();
    }
}
