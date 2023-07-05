/// <reference types="cypress" />
describe("My First Test", () => {
  beforeEach(() => {
    cy.visit("https://docs.cypress.io/guides/overview/why-cypress");
  });
  it("has an h1 on the page", () => {
    cy.get("h1").should("exist");
  });
  it('renders the correct h1 text', () =>{
    cy.get('h1').should('container.text','Actions')
  })
  it('renders an p under the h1', () =>{
    cy.get('.container').find('p').should('exist')
  })
  it('renders an paragaph  under the h1', () =>{
    cy.get('.container').eq(1).find('p').should('exist')
  })
  it('renders a section with the correct elements', () =>{
    cy.get('.container').eq(2).within(() =>{
      cy.get('h4').should('exist');
      cy.get('p').should('exist');
      
    })
  })
});