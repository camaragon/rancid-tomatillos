describe('Movie Info Display', () => {
    const movie1 = 'http://localhost:3000/337401';
    const movie2 = 'http://localhost:3000/718444';
    
    beforeEach(() => {
        cy.visit(movie1);
    });

    it('should replace the background with an image from the selected movie', () => {
        cy.get('.selected-movie-display').should('have.css', 'backgroundImage')
    })
    
    it('should display the movie poster', () => {
        cy.get('.selected-movie-poster').should('be.visible')
    })
    
    it('should display the movie title', () => {
        cy.get('.selected-movie-title').contains('Mulan')
    })
    
    it('should display an average rating', () => {
        cy.get('.selected-movie-rating').contains('5')
    })
    
    it('should display a summary of the movie', () => {
        cy.get('.selected-movie-overview').contains('When the Emperor of China')
    })
    
    it('should display the movie\'s release date', () => {
        cy.get('.selected-movie-date').contains('September 4, 2020')
    })
    
    it('should display the runtime of the selected movie', () => {
        cy.get('.selected-movie-runtime').contains('1h 55 min')
    })
    
    it('should display other details for the movie if available', () => {
        cy.get('.selected-movie-revenue').contains('$57000000')
        cy.visit(movie2);
        cy.get('.selected-movie-genres').contains('Action')
        cy.get('.selected-movie-tagline').contains('When the hunter becomes the prey.')
    })
    
    it('should go back to the main page when the button is clicked', () => {
        cy.get('.button-lobby').click()
    })
})