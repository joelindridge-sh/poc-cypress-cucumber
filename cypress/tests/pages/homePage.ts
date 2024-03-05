import basePage from "./basePage";

class homePage extends basePage {
    url = "https://www.simplyhealth.co.uk";

    visit() {
        cy.visit(this.url);
    }
}

export default new homePage();