package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.PageFactory;

import java.util.ArrayList;
import java.util.List;

public class PageStore {

    private static PageStore instance = null;

    WebDriver webDriver;
    List<Object> pages;

    public PageStore() {
        webDriver = new FirefoxDriver();
        pages = new ArrayList<Object>();
    }

    public <T> T get(Class<T> clazz) {
        for (Object page : pages) {
            if (page.getClass() == clazz)
                return (T) page;
        }
        T page = PageFactory.initElements(webDriver, clazz);
        pages.add(page);
        return page;
    }


//    public static PageStore getInstance(){
//        if(instance == null) {
//            instance = new PageStore();
//        }
//        return instance;
//    }

    public void destroy() {
        pages.clear();
        webDriver.quit();

    }

    public WebDriver getDriver() {
        return webDriver;
    }
}
