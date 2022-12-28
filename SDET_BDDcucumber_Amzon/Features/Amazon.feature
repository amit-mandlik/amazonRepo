Feature: Amazon online shopping feature
description: this feature test login functionality
Scenario: To verify login functionality
Given Open chrome browser
When Enter url "https://www.amazon.in/"
And Click on Sign in option
And Enter registered email and password
Then User should be on homepage of Application