describe('Preorder website', () => {
  beforeEach(() => {
    cy.visit('https://chenjirak.github.io/preorder/')
  })
  it('should load the home page', () => {
    cy.get('#topbar').contains('สั่งซื้อล่วงหน้า iPhone 13');
  });

  it('should load title preorder', () => {
    cy.get('#title').contains('ซื้อ iPhone 13');
  });

  it('should display model list', () => {
    cy.get('#model-list').should('exist');
    cy.get('#model-item').should('have.length.greaterThan', 0);
  });

  it('should display color list', () => {
    cy.get('#color-list').should('exist');
    cy.get('#color-item').should('have.length.greaterThan', 0);
  });

  it('should display size list', () => {
    cy.get('#size-list').should('exist');
    cy.get('#size-item').should('have.length.greaterThan', 0);
  });

  it('should click model display image', () => {
    cy.get('#model-list').should('exist');
    cy.get('#model-item').click();
    cy.get('#model-item').contains('iPhone 13 Pro Max');
    cy.get('#product-image').should('be.visible');
  });

  it('should click color display image', () => {
    cy.get('#color-list').should('exist');
    cy.get('#color-item').click();
    cy.get('#color-item').contains('Graphite');
    cy.get('#product-image').should('be.visible');
  });

  it('should click size display image', () => {
    cy.get('#size-list').should('exist');
    cy.get('#size-item').click();
    cy.get('#size-item').contains('128GB');
    cy.get('#product-image').should('be.visible');
  });

  it('should allow adding products to cart', () => {
    cy.get('#btn-submit').click();
    const url = 'https://interview.com7.in/api/pre-order';
    const data = {
      id: 881,
    };
    cy.request('POST', url, data)
        .then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).to.have.property('id');
          cy.get('#success-modal').should('be.visible');
        });
  });
});