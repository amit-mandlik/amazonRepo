package StepDefinitions1;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.*;

public class StepDefClass 
{
	public WebDriver driver;
	@Given("^Open chrome browser$")
	public void open_chrome_browser() throws Throwable
	{
		System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"//Drivers/chromedriver.exe");
		 driver=new ChromeDriver();
		 driver.manage().window().maximize();
	}

	@When("^Enter url \"([^\"]*)\"$")
	public void enter_url(String arg1) throws Throwable
	{
		driver.get("https://www.amazon.in/");
	}

	@When("^Click on Sign in option$")
	public void click_on_Sign_in_option() throws Throwable 
	{
	    driver.findElement(By.xpath("//span[text()='Account & Lists']")).click();
	}

	@When("^Enter registered email and password$")
	public void enter_registered_email_and_password() throws Throwable
	{
	    driver.findElement(By.xpath("//input[@name='email']")).sendKeys("amitdmandlik46@gmail.com");
	    driver.findElement(By.xpath("//input[@id='continue']")).click();

	    driver.findElement(By.xpath("//input[@id='ap_password']")).sendKeys("Amit@0965");
	    driver.findElement(By.xpath("//input[@id='signInSubmit']")).click();
	}

	@Then("^User should be on homepage of Application$")
	public void user_should_be_on_homepage_of_Application() throws Throwable 
	{
	    
	}


}
