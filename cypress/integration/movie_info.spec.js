describe('Movie Info Display', () => {
    const movie1 = 'http://localhost:3000/337401';
    const movie2 = 'http://localhost:3000/413518';
    const movie3 = 'http://localhost:3000/579583';
    beforeEach(() => {
        cy.visit(movie1);
        cy.visit(movie2);
        cy.visit(movie3);
    });
    it('should replace the background with an image from the selected movie', () => {

    })
    it('should display the movie poster', () => {

    })
    it('should display the movie title', () => {

    })
    it('should display an average rating', () => {

    })
    it('should display a summary of the movie', () => {

    })
    it('should display the movie\'s release date', () => {

    })
    it('should display the runtime of the selected movie', () => {

    })
    it('should display other details for the movie if available', () => {
        //tagline, genres, revenue
    })
    it('should go back to the main page when the button is clicked', () => {

    })
})