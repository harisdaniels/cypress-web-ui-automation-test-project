/// <reference types="cypress" />

class Login {

    fillUsername(username) {
        const inputUsername = cy.get("#txt-username");
        inputUsername.type(username);

        return this;
    }

    fillPassword(password) {
        const inputPassword = cy.get("#txt-password");
        inputPassword.type(password);

        return this;
    }

    clickLoginButton() {
        const loginButton = cy.get("button[type='submit']");
        loginButton.click();

        return this;
    }

}

module.exports = Login;