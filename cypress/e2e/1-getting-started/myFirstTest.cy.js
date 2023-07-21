// <reference types="cypress" />

// @ts-nocheck

const navbarText= Cypress.env('navbarText');

const token ='abcd123';

describe("My First Test", () => {
  beforeEach(() =>{
    cy.visit('/commands/actions')
  })

  it('triggers a popover on click', () =>{
    cy.get('.action-btn').click()
    cy.findByText('This popover shows up on click').should('be.visible')
  })


  it('can click on different sections of a canvas', () => {
    cy.get('#action-canvas').click('top');
    cy.get('#action-canvas').click('bottomRight');
    cy.get('#action-canvas').click(80, 100);
  });

  it('can double click to edit', () =>{
    cy.get('.action-div').dblclick().should('not.be.visible')
    cy.get('.action-input-hidden').should('be.visible')
  })

  it('can right click to edit',() =>{
    cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
    cy.get('.rightclick-action-input-hidden').should('be.visible')
  })

  it('shows the nav links on click', () =>{
    cy.get('.dropdown-toggle').trigger('click')
    cy.get('.dropdown-menu').should('be.visible')
  })
  it('sets  and gets a token from lacal storage', () =>{
    cy.setLocalStorage('token', token)
    cy.getLocalStorage('token').should('eq', token )
  })
  it('overwrite the type command by using sensitive characters', () =>{
    cy.visit('/commands/actions')
    cy.findByPlaceholderText('Email').type('test@email.com')
    cy.findByPlaceholderText('Email').type('test@email.com', { sensitive: true})
  })
  it('uses fixture daat in a network request',function(){
    cy.visit('/commands/network-requests')
    cy.intercept('GET','**/comments/*', this.data).as('getComment')
    cy.get('.network-btn').click()
    cy.wait('@getComment').then((res) =>{
      cy.log('Response: ', res)
    })
  })
  
  it('pulls data from a fixture', () =>{
    cy.fixture('example').then((data) =>{
      cy.log('DATA:', data)
    })
  })
  it('updates fixture data inline', () =>{
    cy.fixture('example').then((data)=>{
      data.email = 'updated@mail.com'
      cy.log('UPDATED:'. data)
    })  })
  before(() => {
    cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length', 10)
  })
  afterEach(() =>{
    cy.log('after each hook ise here')
  })
  after(()=>{
    cy.log('the final after hook runs once')
  })
  it('visite the home page', () =>{
    
  })
  it('renders the correct h1 text', () => {
    cy.get('h1').should('contain.text', 'Actions')
  });
    
  it('renders a paragraph under the h1', () => {
    cy.get('.container').eq(1).find('p').should('exist')
  });
  it('renders a p under the h1', () => {
    cy.get('h1').next('p', { timeout: 10000 }).should('exist');
  });
  
  it('correctly renders the Cypress website link', () => {
    cy.findByText(navbarText).should('exist');
  });
  
  it('renders a section with the correct elements', () => {
    cy.get('.container').eq(2).within(() => {
      cy.get('h4').should('exist');
      cy.get('p').should('exist');
    });
  });
  
  
  
  
  it("has an h1 on the page", () => {
    cy.get("h1").should("exist");
  });
  
  it('types into an email fiel', () =>{
    cy.visit('https://Example.cypress.io/commands/actions')
    cy.findByPlaceholderText('Email').type('test@email.com')
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(2000).then(() =>{
      fetch('https://api.spacexdata.com/v3/missions')
      .then((res) => res.json())
      .then((data) =>{
       
        console.log(data)
      })
    })
    console.log('test is finished')
  })
  
  it('shows an active class for the current page', () =>{
    cy.visit('https://Example.cypress.io/commands/actions')
    cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active')
  })
  
  it('should not have an active class on inactive pages', () =>{
    cy.visit('https://Example.cypress.io/commands/actions')
    cy.get('.dropdown-menu').find('li').first().should('not.have.class', 'active').find('a').should('have.attr', 'href', '/commands/querying')
  })
  it('links to the actions page correctly', () =>{
    cy.visit('https://Example.cypress.io/commands/actions')
    cy.findAllByText('Actions').first().click({force:true})
    cy.url().should('include', 'commands/actions')
  })
  
  it('lets you type in an input field', () =>{
    cy.visit('https://Example.cypress.io/commands/actions')
    cy.findByPlaceholderText('Email').type('Test').should('have.value', 'Test')
  })
  
  it('lets you clear an input field', () => {
    cy.visit('https://Example.cypress.io/commands/actions')
    cy.findByLabelText('Describe:').type('Test description').should('have.value', 'Test description')
      .clear().should('have.value', '')
  })
  
  it('lets you check a checkbox', () =>{
    cy.visit('https://Example.cypress.io/commands/actions')
    cy.get('.action-checkboxes [type="checkbox"]').eq(1).check({force: true}).should('be.checked')
  
  })
  
})








  
// beforeEach(()=>{
//   cy.visit('https://Example.cypress.io/commands/actions')
// })


  
// it('has an h1 on the page', () =>{
//   cy.get('h1').should('exist')
// })
// beforeEach(() => {
//   cy.visit("https://Example.cypress.io/commands/actions");
// });

  
// it("has an h1 on the page", () => {
//   cy.get("h1").should("exist")
// });



// it('renders a section with the correct elements', () => {
//   cy.get('.container').eq(2).within(()=>{
//     cy.get('h4').should('exist')
//     cy.get('p').should('exist')
//   })
// })



