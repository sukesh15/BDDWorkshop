package pages;

import com.google.common.base.Predicate;
import cucumber.api.java.en.Then;
import junit.framework.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class CartViewPage extends TargetBasePage {

    public CartViewPage(WebDriver driver) {
        super(driver);
    }

    @FindBy(id = "checkOutLink")
    private WebElement checkOutLink;

    @FindBy(linkText = "proceed to checkout")
    private WebElement proceedToCheckOutLink;

    @FindBy(name = "savencontinue")
    private WebElement saveAndContinue;

    @FindBy(linkText = "continue")
    private WebElement continueButton;

    @FindBy(id = "ItemHeaderCount")
    private WebElement itemCount;


    public void chooseToCheckOut() {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOf(checkOutLink));
        checkOutLink.click();
    }

    public void proceedToCheckOut() {
        proceedToCheckOutLink.click();
        waitForElementToBeClickable(saveAndContinue);
        saveAndContinue.click();
    }

    public void continueAsNewGuest() {
        waitForElementToBeClickable(continueButton);
        continueButton.click();
    }

    public String getItemCount() {
        return itemCount.getText();
    }

    public void removeAllItemsFromCart() {
        int numberOfItemRemovalLinks = getRemoveItemLinkElements().size();
        for (int elementCount = 0; elementCount < numberOfItemRemovalLinks; elementCount++) {
            driver.findElement(By.linkText("remove item")).click();
            driver.navigate().refresh();
        }
    }

    public void returnToShopping() {
        driver.findElement(By.cssSelector("a[title='go back to shopping']")).click();
    }

    private List<WebElement> getRemoveItemLinkElements() {
        return driver.findElements(By.linkText("remove item"));
    }

}
