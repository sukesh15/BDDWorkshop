import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources",
        format = {"html:build/cucumber-report", "json:build/cucumber-json-report.json"})
public class RunCukesTest {
}
