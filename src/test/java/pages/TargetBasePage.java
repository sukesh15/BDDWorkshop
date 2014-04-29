package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 * Created with IntelliJ IDEA.
 * User: Sukeshk
 * Date: 25/04/14
 * Time: 4:39 PM
 * To change this template use File | Settings | File Templates.
 */
public class TargetBasePage {
    WebDriver driver;

    public TargetBasePage(WebDriver driver) {
        this.driver = driver;
    }

    protected void waitForElementToBeClickable(WebElement element) {
        WebDriverWait wait = new WebDriverWait(driver, 20) ;
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    protected void waitForElementToBeVisible(WebElement element) {
        WebDriverWait wait = new WebDriverWait(driver, 20) ;
        wait.until(ExpectedConditions.visibilityOf(element));
    }
}
