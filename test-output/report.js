$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/dasarikr/Downloads/SeleniumAssignments-master/src/test/java/com/qa/Features/OrangeHRM.Feature");
formatter.feature({
  "line": 1,
  "name": "Validate OrangeHRP Page",
  "description": "",
  "id": "validate-orangehrp-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validating OrangeHRP application Login",
  "description": "",
  "id": "validate-orangehrp-page;validating-orangehrp-application-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "When I am in OrangeHRP Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Login to Application",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Dashboard page is available",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "click on Admin menu",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRP_StepDefinition.when_I_am_in_OrangeHRP_Application()"
});
formatter.result({
  "duration": 470514000,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Soft\\JarFiles\\chromedriver_win32\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:157)\r\n\tat com.qa.StepDefinitions.OrangeHRP_StepDefinition.when_I_am_in_OrangeHRP_Application(OrangeHRP_StepDefinition.java:21)\r\n\tat ✽.Given When I am in OrangeHRP Application(C:/Users/dasarikr/Downloads/SeleniumAssignments-master/src/test/java/com/qa/Features/OrangeHRM.Feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "OrangeHRP_StepDefinition.login_to_Application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrangeHRP_StepDefinition.dashboard_page_is_available()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrangeHRP_StepDefinition.click_on_Admin_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrangeHRP_StepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "Validating Vacancies",
  "description": "",
  "id": "validate-orangehrp-page;validating-vacancies",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@SmokeTest"
    },
    {
      "line": 18,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "When I am in OrangeHRP Application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Login to Application",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I click on Recruitment",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Click on Vacancies",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRP_StepDefinition.when_I_am_in_OrangeHRP_Application()"
});
formatter.result({
  "duration": 19790300,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Soft\\JarFiles\\chromedriver_win32\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:157)\r\n\tat com.qa.StepDefinitions.OrangeHRP_StepDefinition.when_I_am_in_OrangeHRP_Application(OrangeHRP_StepDefinition.java:21)\r\n\tat ✽.Given When I am in OrangeHRP Application(C:/Users/dasarikr/Downloads/SeleniumAssignments-master/src/test/java/com/qa/Features/OrangeHRM.Feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "OrangeHRP_StepDefinition.login_to_Application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrangeHRP_StepDefinition.i_click_on_Recruitment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrangeHRP_StepDefinition.click_on_Vacancies()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrangeHRP_StepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "Validating OrangeHRP application Logout",
  "description": "",
  "id": "validate-orangehrp-page;validating-orangehrp-application-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "When I am in OrangeHRP Application",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "Login to Application",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I click on UserProfile",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Click on Logout",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRP_StepDefinition.when_I_am_in_OrangeHRP_Application()"
});
formatter.result({
  "duration": 15325900,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Soft\\JarFiles\\chromedriver_win32\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:157)\r\n\tat com.qa.StepDefinitions.OrangeHRP_StepDefinition.when_I_am_in_OrangeHRP_Application(OrangeHRP_StepDefinition.java:21)\r\n\tat ✽.Given When I am in OrangeHRP Application(C:/Users/dasarikr/Downloads/SeleniumAssignments-master/src/test/java/com/qa/Features/OrangeHRM.Feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "OrangeHRP_StepDefinition.login_to_Application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrangeHRP_StepDefinition.i_click_on_UserProfile()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrangeHRP_StepDefinition.click_on_Logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrangeHRP_StepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});