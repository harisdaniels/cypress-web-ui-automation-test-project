/// <reference types="cypress" />

class Landing {

    visitWebsite() {
        cy.visit("https://katalon-demo-cura.herokuapp.com/");
        return this;
    }

    clickMenuToggle() {
        const menuToggle = cy.get("#menu-toggle");
        menuToggle.click();
        return this;
    }

    goToLoginPage() {
        //const makeAppointment = cy.get("#btn-make-appointment");
        //makeAppointment.click();

        const loginLink = cy.get("#sidebar-wrapper > ul > li:nth-child(4) > a");
        loginLink.click();

        return this;
    }

}

module.exports = Landing;