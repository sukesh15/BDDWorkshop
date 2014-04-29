package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

/**
 * Created with IntelliJ IDEA.
 * User: Sukeshk
 * Date: 02/04/14
 * Time: 8:34 PM
 * To change this template use File | Settings | File Templates.
 */
public class SearchListPage extends TargetBasePage{

    public SearchListPage(WebDriver driver) {
        super(driver);
    }

    @FindBy(id="prodTitle-slp_medium-1-1")
    private WebElement firstAvailableItem;

    public void chooseTheFirstAvailableItem(){
        firstAvailableItem.click();
    }

    public void chooseTheItemWithTitle(String itemToBeChosen) {
        String itemSelector = String.format("img[alt=\"%s\"]",itemToBeChosen);
        driver.findElement(By.cssSelector(itemSelector)).click();
//        driver.findElement(By.linkText(itemToBeChosen)).click();
    }
}
