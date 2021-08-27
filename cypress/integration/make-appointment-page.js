/// <reference types="cypress" />

class Appointment {

    selectFacility(facility) {
        const selectFacility = cy.get("select");
        selectFacility.select(facility);

        return this;
    }

    applyHospitalReadmission() {
        const applyForHospitalReadmission =  cy.get("#chk_hospotal_readmission");
        applyForHospitalReadmission.click();

        return this;
    }

    selectHeatlhcareProgram() {
        const selectForHealthCareProgram = cy.get("#radio_program_medicaid");
        selectForHealthCareProgram.click();

        return this;
    }

    inputVisitDate(visitDate) {
        const typeVisitDate = cy.get("#txt_visit_date");
        typeVisitDate.type(visitDate);

        return this;
    }

    inputComment(comment) {
        const typeComment = cy.get("#txt_comment");
        typeComment.click({force : true});
        typeComment.type(comment);
        
        return this;
    }

    clickBookAppointmentButton() {
        const bookAppointmentButton = cy.get("#btn-book-appointment");
        bookAppointmentButton.click();

        return this;
    }

}

module.exports = Appointment;