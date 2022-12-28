package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features=".//Features/Amazon.feature",
		glue="StepDefinitions1",
		dryRun=false,
		format={"pretty","html:html_report","json:json_report/cucumber.json","junit:junit_report/cucumber.xml"},
		monochrome=true
		)

public class TestRunnerClass 
{

}
