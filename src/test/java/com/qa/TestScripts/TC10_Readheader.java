package com.qa.TestScripts;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TC10_Readheader {
	static Properties prop;
	public static void main(String[] args) throws InterruptedException  {

		String PropertiesFileLoc ="C:\\Ramakanth\\Clearance & Settlement\\SDET Training\\SDET WS\\SeleniumAssignments\\src\\test\\java\\com\\qa\\TestData\\OrageHRP.properties";
		try {
			FileInputStream fileLoc = new FileInputStream(PropertiesFileLoc);
			prop = new Properties();
			prop.load(fileLoc);
		}catch (IOException ie) {
			System.out.println(ie.toString());
		}
		

		System.setProperty("webdriver.chrome.driver","C:\\Ramakanth\\Clearance & Settlement\\SDET Training\\chromedriver_win32\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("https://opensource-demo.orangehrmlive.com/");
		Thread.sleep(2000);
		driver.manage().window().maximize();
		try {
			String  Name = prop.getProperty("username");
			String  Psword = prop.getProperty("password");
			driver.findElement(By.xpath("//input[@id='txtUsername']")).sendKeys(Name);
			driver.findElement(By.xpath("//input[@id='txtPassword']")).sendKeys(Psword);
			driver.findElement(By.id("btnLogin")).click();
			driver.findElement(By.linkText("Dashboard")).click();
			String reqtext = driver.findElement(By.xpath("//div[@class='head']//child::h1")).getText();
			System.out.println(reqtext);
		}

		catch(Exception e){
			System.out.println(e.toString());
		}
		
		driver.quit();
	}
}

