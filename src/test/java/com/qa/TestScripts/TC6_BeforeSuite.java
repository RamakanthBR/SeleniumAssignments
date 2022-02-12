package com.qa.TestScripts;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;

public class TC6_BeforeSuite {
	@Test
	public void beforeSuiteTest()
	{
		System.out.println("Executing using before Suite");
	}
	@BeforeSuite
	public void before_suite() throws InterruptedException
	{	System.setProperty("webdriver.chrome.driver","C:\\Ramakanth\\Clearance & Settlement\\SDET Training\\chromedriver_win32\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("https://opensource-demo.orangehrmlive.com/");
		Thread.sleep(2000);
		driver.manage().window().maximize();
		driver.close();
	}
}