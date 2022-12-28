$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/Amazon.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon online shopping feature",
  "description": "description: this feature test login functionality",
  "id": "amazon-online-shopping-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "To verify login functionality",
  "description": "",
  "id": "amazon-online-shopping-feature;to-verify-login-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter url \"https://www.amazon.in/\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on Sign in option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Enter registered email and password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should be on homepage of Application",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefClass.open_chrome_browser()"
});
formatter.result({
  "duration": 36432272177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.in/",
      "offset": 11
    }
  ],
  "location": "StepDefClass.enter_url(String)"
});
formatter.result({
  "duration": 9288518234,
  "status": "passed"
});
formatter.match({
  "location": "StepDefClass.click_on_Sign_in_option()"
});
formatter.result({
  "duration": 6192038452,
  "status": "passed"
});
formatter.match({
  "location": "StepDefClass.enter_registered_email_and_password()"
});
formatter.result({
  "duration": 1562848221,
  "status": "passed"
});
formatter.match({
  "location": "StepDefClass.user_should_be_on_homepage_of_Application()"
});
formatter.result({
  "duration": 37059,
  "status": "passed"
});
});