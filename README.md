# This Is My Self-Mini Project of Web UI Testing

## Project Information
For this project, i use Cypress

### Cypress
Fast, easy and reliable testing for anything that runs in a browser.

## Preparation
- Clone from this repo https://github.com/harisdaniels/cypress-web-ui-automation-test-project.git.
- The steps of cloning Github Repository, can be found [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository).

### Setup
For windows and mac, you can [download node](https://nodejs.org/en/) and install.

### Package Installation
Before start development and running the test you need to install packages that needed for this simple project. To install them, you need to do these step:

- Go to your project repo directory in your local machine with your favorite terminal.
- and type `npm install` in your terminal and press ENTER on your keyboard to install all dependecies
- wait, and done

## Test Structure
- Use `describe` function to create Test Suite (group of test cases)
- Use `beforeEach` to load data before the test is executed
- Use `It` function to create a test case
- Example:
```
/// <reference types="cypress" />

describe("Make an appointment", function() {

    beforeEach(function() {
        cy.fixture('examples.json').then(function(data) {
            this.data = data;
        });
    });

    it("It should success to visit the page and Navigate to the Login Page", function() {

        const landing = new Landing();
        landing.visitWebsite();
        landing.clickMenuToggle();
        landing.goToLoginPage();

    });

    it("It should success to Navigate to Make Appointment Page", function() {

        const login = new Login();
        login.fillUsername(this.data.username);
        login.fillPassword(this.data.password);
        login.clickLoginButton();

    });

});
```

## Run Test
To run the test, you need to follow these steps
- First, open terminal in your Code Editor by clicking ctrl + `
- Then type `npx cypress run --headed --reporter mochawesome --spec 'cypress/integration/project-test/test.spec.js'` and press ENTER on your keyboard
  
  ![Screenshot_1](https://user-images.githubusercontent.com/74105380/131126314-ae7647e6-3820-42ea-b177-3abb3d8e66bc.jpg)

- And the test will run

  ![Screenshot_2](https://user-images.githubusercontent.com/74105380/131127908-c548a252-9773-4477-929b-2ac481dfac42.jpg)
  
## Test Report by Mochawesome
After run the test, you can also see the result of the test by copying the html file and paste it to search bar of your browser
  
  ![Screenshot_4](https://user-images.githubusercontent.com/74105380/131128273-85102cd4-0a3a-4ed4-999b-4c75bc188450.jpg)


### Test Report Sample

![Screenshot_5](https://user-images.githubusercontent.com/74105380/131128399-04e0eb22-c6a0-47d6-a888-1f0d6100417b.jpg)
The result will be like this.
  
# All is Done!
