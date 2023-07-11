// / <reference types="cypress" />

// @ts-nocheck

const navbarText= Cypress.env('navbarText');
describe("My First Test", () => {
  // beforeEach(() => {
  //   cy.visit("https://Example.cypress.io/commands/actions");
  // });

  
  // it("has an h1 on the page", () => {
  //   cy.get("h1").should("exist")
  // });

  // it('renders the correct h1 text', () => {
  //   cy.get('h1').should('contain.text', 'Actions')
  // });
  
  // it('renders a paragraph under the h1', () => {
  //   cy.get('.container').eq(1).find('p').should('exist')
  // });

  // it('renders a section with the correct elements', () => {
  //   cy.get('.container').eq(2).within(()=>{
  //     cy.get('h4').should('exist')
  //     cy.get('p').should('exist')
  //   })
  // })

  // it('renders a p under the h1', () => {
  //   cy.get('h1').next('p', { timeout: 10000 }).should('exist');
  // });

  // it('correctly renders the Cypress website link', () => {
  //   cy.findByText(navbarText).should('exist');
  // });

  // it('renders a section with the correct elements', () => {
  //   cy.get('.home-landing', { timeout: 10000 }).within(() => {
  //     cy.get('h2', { timeout: 10000 }).should('exist');
  //     cy.get('p', { timeout: 10000 }).should('exist');
  //   });
  // });




  // it("has an h1 on the page", () => {
  //   cy.get("h1").should("exist");
  // });

  // it('renders the correct h1 text', () => {
  //   cy.get('h1').should('contain.text', 'Why Cypress?');
  // });

  it('types into an email fiel', () =>{
    cy.visit('https://Example.cypress.io/commands/actions')
    cy.findByPlaceholderText('Email').type('test@email.com')
    cy.wait(5000)
    console.log('test is finished')
  })
})
