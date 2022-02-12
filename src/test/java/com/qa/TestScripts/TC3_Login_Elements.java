package com.qa.TestScripts;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TC3_Login_Elements {

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		System.setProperty("webdriver.chrome.driver","C:\\Ramakanth\\Clearance & Settlement\\SDET Training\\chromedriver_win32\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("https://opensource-demo.orangehrmlive.com/");
		Thread.sleep(2000);
		driver.manage().window().maximize();

		//Xpath

		driver.findElement(By.xpath("//input[@id='txtUsername']"));
		driver.findElement(By.xpath("//input[@id='txtPassword']"));
		driver.findElement(By.linkText("Forgot your password?"));
		driver.findElement(By.xpath("//div[@id='divLogo']//child::img"));

		//CSS

		driver.findElement(By.cssSelector("input#txtUsername"));
		driver.findElement(By.cssSelector("input#txtPassword"));
		driver.findElement(By.linkText("Forgot your password?"));
		driver.findElement(By.xpath("//div[@id='divLogo']//child::img"));

	}
}
