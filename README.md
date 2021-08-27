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

    it("It should success to Make Appointment", function() {

        const appointment = new Appointment();
        appointment.selectFacility("Seoul CURA Healthcare Center");
        appointment.applyHospitalReadmission();
        appointment.selectHeatlhcareProgram();
        appointment.inputVisitDate("31/08/2021");
        appointment.inputComment("I will be available at 31/08/2021");
        appointment.clickBookAppointmentButton();

    });

    it("It should navigate to Appointment Confirmation page", function() {

        cy.get("h2").contains("Appointment Confirmation");
        cy.get("#comment").contains("I will be available at 31/08/2021");


    });

});
```

## Run Test
To run the test, you need to follow these steps
- First, open terminal in your Code Editor by clicking ctrl + `
- Then type `npx cypress run --headed --reporter mochawesome --spec 'cypress/integration/project-test/test.spec.js'` and press ENTER on your keyboard
  
  
  
- Wait until Cypress Test Runner open up
- Then, click `test.spec.js` to run the test
  
  ![Screenshot_Test_Runner](https://user-images.githubusercontent.com/74105380/126940145-51af5625-8ebf-472c-ba4f-bd202393fbf9.jpg)

- And the test will run

  ![image](https://user-images.githubusercontent.com/74105380/126941724-5d3f2bb7-27d6-4534-9a7b-993887f00e83.png)
  
# All is Done!
