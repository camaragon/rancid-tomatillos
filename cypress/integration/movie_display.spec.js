describe('Main Display', () => {
    const baseUrl = 'http://localhost:3000';
    it('should be able to visit the base url and see a grid display of movie posters', () => {
        cy.visit(baseUrl);
    });
    beforeEach(() => {
        cy.visit(baseUrl);
    });
    it('should display a message while the posters are loading to inform the user', () => {
        cy
        .get('h2')
        .contains('The movies are on their way!')
    });

    it('should display an error if the movies are not loading', () => {
        cy
        .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movieol', {
            statusCode: 404
            }
        )
        // .get('h2').contains('Uh oh!').url().should('include', '/movies')
    });

    it('should have a main title', () => {
        cy
        .get('h1')
        .contains('Rancid Tomatillos')
    });

    it('should have a image, title, and rating displayed with each movie poster', () => {
        cy
        .get('.poster-wrapper').within(() => {
            cy.get('.poster-image').should('be.visible')
            cy.get('h2').contains('Mulan')
            cy.get('.poster-rating').contains('5')
        })
    });
    it('should take you to a movie information page when clicking on a movie poster', () => {
        cy
        .get('.poster-wrapper').within(() => {
            cy.get('.poster-image').click({multiple: false})
        })
        })
    })