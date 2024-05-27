Quality-Assurance-Practices
Documentation and Presentation
Presentation Outline
Overview of Test Automation Framework and Tools Used
Framework: Playwright
Tools: GitHub Actions for CI/CD, HTML reports for results visualization
Note: Playwright was chosen for its comprehensive browser automation capabilities and ease of integration with CI/CD pipelines.
Explanation of Test Scenarios and Test Cases
Test Scenarios: Add items to do lists, mark some items as completed, delete completed items, and add validations.
Test Cases: Include steps to interact with UI elements, validate expected outcomes, and handle exceptions.
Demonstration of Test Execution Process
A. Setup & Configuration Process for the Automated Test Suite

Create a Git Repository named "Quality-Assurance-Practices"
Go to "Code" to clone the Git repository
Click on the copy icon
Setup the Code Editor to Use
Download the VSCode editor
Open the VSCode terminal
Initialize npm and install Playwright:
bash
Copy code
npm init -y
npm install playwright
Create a e2e.spec file to hold all the tests
Start writing automated tests
Save and run tests using the following commands:
To run tests in the terminal:
bash
Copy code
npx playwright test
To run tests in the UI:
bash
Copy code
npx playwright test --ui
To run and generate a dashboard of test results and report:
bash
Copy code
npx playwright show-report
B. Cloud Automation

If all tests are passing, push changes to GitHub by running these commands:
bash
Copy code
git add .
git commit -m "running the tests in github"
Push to the repository "Quality-Assurance-Practices":
bash
Copy code
git push origin main
Go to the GitHub repo and verify if the tests are passing.
Summary of Test Results
Test Results: All test cases passed and the HTML result was generated.
Challenges Faced During the Test Automation Process and Solutions
Challenge: HomeBrew could not be installed
Solution: Run git commands from the brew repository
Challenge: Accessing my GitHub account with 2FA
Solution: Unlink my existing account and create a new one.
Summary of the Assessment Undertaken
Setting up the test automation suite involved installing and configuring Playwright, automating test scenarios, and ensuring tests run independently and successfully locally, on the browser level, and through GitHub Actions. The presentation includes an overview of the tools, detailed test scenarios, a demonstration of test execution, a summary of results, and the challenges faced while completing the task.






