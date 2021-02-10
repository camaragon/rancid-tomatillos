describe('Main Display', () => {
    const baseUrl = 'http://localhost:3000';
    it('should be able to visit the base url and see a grid display of movie posters', () => {
        cy.visit(baseUrl);
    });
    beforeEach(() => {
        cy.visit(baseUrl);
    });
    it('should display a message while the posters are loading to inform the user', () => {

    });

    it('should display an error if the movies are not loading', () => {

    });

    it('should have a main title', () => {

    });

    it('should have a image, title, and rating displayed with each movie poster', () => {

    });

    it('')

})