//your JS code here. If required.


describe('To-Do App', () => {
  before(() => {
    // You can set up your app, navigate to the page, etc., if needed
    // For example, visit your app's URL:
    cy.visit('http://localhost:3000');
  });

  it('should display a nav-bar', () => {
    cy.get('.navbar').should('be.visible');
  });

  it('should have background color of #D3D3D3', () => {
    cy.get('.navbar').should('have.css', 'background-color', 'rgb(211, 211, 211)');
  });

  it('should have 10px padding', () => {
    cy.get('.navbar').should('have.css', 'padding', '10px');
  });

  it('should display list items horizontally', () => {
    cy.get('.navbar ul').should('have.css', 'display', 'flex');
  });
});

