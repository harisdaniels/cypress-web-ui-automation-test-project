/// <reference types="cypress" />

const Landing = require("../landing-page");
const Login = require("../login-page");
const Appointment = require("../make-appointment-page");

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