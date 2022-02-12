package com.qa.TestScripts;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import com.qa.Pages.*;
public class TC8_PageTitles {
	static WebDriver driver ;
	public static void main(String[] args) throws InterruptedException {
		System.setProperty("webdriver.chrome.driver","C:\\Ramakanth\\Clearance & Settlement\\SDET Training\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://opensource-demo.orangehrmlive.com/");
		Thread.sleep(2000);
		driver.manage().window().maximize();
		try {
			String Name = "Admin";
			String Psword = "admin123";
			driver.findElement(By.xpath("//input[@id='txtUsername']")).sendKeys(Name);
			driver.findElement(By.xpath("//input[@id='txtPassword']")).sendKeys(Psword);
			driver.findElement(By.id("btnLogin")).click();
		}
		catch(Exception e) {
			System.out.println(e.toString());
		}
		OrangeHrpPages orgpg = new OrangeHrpPages(driver);
		driver.findElement(By.linkText("Admin"));
		Thread.sleep(3000);
		String reqtxt = Admin();
		System.out.println(reqtxt);

		driver.findElement(By.id("menu_pim_viewPimModule")).click();
		Thread.sleep(3000);
		String sPIM = PIM();
		System.out.println(sPIM);

		driver.findElement(By.id("menu_dashboard_index")).click();
		Thread.sleep(3000);
		String Dboard = LeaveDashBoard();
		System.out.println(Dboard);

		driver.findElement(By.id("menu_directory_viewDirectory")).click();
		Thread.sleep(3000);
		String Dir = Directory();
		System.out.println(Dir);

		driver.findElement(By.id("menu_maintenance_purgeEmployee")).click();
		Thread.sleep(3000);
		String Maintai = Maintanence();
		System.out.println(Maintai);

	}
	public static String Admin() {
		String ReqText = driver.findElement(By.id("menu_admin_UserManagement")).getText();
		return ReqText;
	}

	public static String PIM() {
		String ReqText = driver.findElement(By.id("menu_pim_viewEmployeeList")).getText();
		return ReqText;
	}

	public static String LeaveDashBoard() {
		String ReqText = driver.findElement(By.id("menu_dashboard_index")).getText();
		return ReqText;
	}

	public static String Directory() {
		String ReqText = driver.findElement(By.id("menu_directory_viewDirectory")).getText();
		return ReqText;
	}

	public static String Maintanence() {
		String ReqText = driver.findElement(By.id("menu_maintenance_purgeEmployee")).getText();
		return ReqText;
	}
}