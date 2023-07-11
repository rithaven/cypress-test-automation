// / <reference types="cypress" />

// @ts-nocheck

// const navbarText= Cypress.env('navbarText');
describe("My First Test", () => {
  before(() => {
    cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length', 10)
  })
  
  it('visite the home page', () =>{
    cy.visit('https://Example.cypress.io/commands/actions')
  
  })
  
  it('has an h1 on the page', () =>{
    cy.visit('https://Example.cypress.io/commands/actions')
    cy.get('h1').should('exist')
  })
})
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

// it('types into an email fiel', () =>{
//   cy.visit('https://Example.cypress.io/commands/actions')
//   cy.findByPlaceholderText('Email').type('test@email.com')
//   cy.wait(2000).then(() =>{
//     fetch('https://api.spacexdata.com/v3/missions')
//     .then((res) => res.json())
//     .then((data) =>{
//       //eslint-disable-next-line no-console
//       console.log(data)
//     })
//   })
//   console.log('test is finished')
// })

// it('shows an active class for the current page', () =>{
//   cy.visit('https://Example.cypress.io/commands/actions')
//   cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active')
// })

// it('should not have an active class on inactive pages', () =>{
//   cy.visit('https://Example.cypress.io/commands/actions')
//   cy.get('.dropdown-menu').find('li').first().should('not.have.class', 'active').find('a').should('have.attr', 'href', '/commands/querying')
// })
//   it('links to the actions page correctly', () =>{
//     cy.visit('https://Example.cypress.io/commands/actions')
//     cy.findAllByText('Actions').first().click({force:true})
//     cy.url().should('include', 'commands/actions')
//   })

//   it('lets you type in an input field', () =>{
//     cy.visit('https://Example.cypress.io/commands/actions')
//     cy.findByPlaceholderText('Email').type('Test').should('have.value', 'Test')
//   })

//   it('lets you clear an input field', () => {
//     cy.visit('https://Example.cypress.io/commands/actions')
//     cy.findByLabelText('Describe:').type('Test description').should('have.value', 'Test description')
//     .clear().should('have.value', '')
//   })

//   it('lets you check a checkbox', () =>{
//     cy.visit('https://Example.cypress.io/commands/actions')
//     cy.get('.action-checkboxes [type="checkbox"]').eq(1).check({force: true}).should('be.checked')

//   })
// })

