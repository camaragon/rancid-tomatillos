describe('Main Display', () => {
    const baseUrl = 'http://localhost:3000';
    it('should be able to visit the base url and see a grid display of movie posters', () => {
        cy.visit(baseUrl);
    });
    beforeEach(() => {
        cy.visit(baseUrl);
    });
    it('should display a content loading screen while the posters are loading to inform the user', () => {
        cy
        .get('.content-loader')
        .should('be.visible')
    });

    it('should display an error if movies are not loading', () => {
        cy.visit('http://localhost:3000/33f')
        .intercept('GET', '/sdfw', {
            statusCode: 404,
            headers: { "access-control-allow-origin": "*"},
            body: {
                message: "Uh oh... we can\'t find that movie!"
            },
            movies: []
            })
        // .request({
        //     method: 'GET', 
        //     url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movirr',
        //     failOnStatusCode: false 
        // })
        // .then((response) => {
        //     expect(response).to.have.property('status', 404)
        // })
        .get('h2').contains('Uh oh... we can\'t find that movie!')
        // .get('h2').contains('Uh oh!').url().should('include', '/movies')
        // cy.visit('http://localhost:3000/')
        // cy.visit('http://localhost:3000/')
    });

    it('should have a main title', () => {
        cy
        .get('h1')
        .contains('RANCID TOMATILLOS')
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
        .get('.poster-wrapper:first').within(() => {
            cy.get('.poster-image').click()
        })
    })

    it('should see a form with a search bar and dropdown button', () => {
        cy
        .wait(750)
        .get('.querying-form').within(() => {
            cy.get('input').should('be.visible')
            cy.get('.dropdown').should('be.visible')
            cy.get('.button-lobby').should('be.visible')
        })
    })

    it('should display a list of sorting options on click of dropdown button', () => {
        cy
        .wait(750)
        .get('.dropdown').click()
        .get('.dropdown-option').contains('Highest - Lowest')
        .get('.dropdown-option').contains('Lowest - Highest')
        .get('.dropdown-option').contains('A - Z (Title)')
        .get('.dropdown-option').contains('Z - A (Title)')
    })

    it('should display the list of movies in order of rating from highest to lowest when that option is selected', () => {
        cy
        .wait(750)
        .get('.dropdown').click()
        .contains('Highest - Lowest').click()
        .get('.poster-wrapper:first').within(() => {
            cy.get('.poster-title').contains('Peninsula')
        })
    })

    it('should display the list of movies in order of rating from lowest to highest when that option is selected', () => {
        cy
        .wait(750)
        .get('.dropdown').click()
        .contains('Lowest - Highest').click()
        .get('.poster-wrapper:first').within(() => {
            cy.get('.poster-title').contains('The Pale Door')
        })
    })

    it('should display the list of movies in alphabetical order by title when that option is selected', () => {
        cy
        .wait(750)
        .get('.dropdown').click()
        .contains('A - Z (Title)').click()
        .get('.poster-wrapper:first').within(() => {
            cy.get('.poster-title').contains('2067')
        })
        .get('.poster-wrapper:last').within(() => {
            cy.get('.poster-title').contains('Trolls')
        })
    })

    it('should display the list of movies in reverse alphabetical order by title when that option is selected', () => {
        cy
        .wait(750)
        .get('.dropdown').click()
        .contains('Z - A (Title)').click()
        .get('.poster-wrapper:first').within(() => {
            cy.get('.poster-title').contains('Trolls')
        })
        .get('.poster-wrapper:last').within(() => {
            cy.get('.poster-title').contains('2067')
        })
    })

    it('should be able to search movies by entering a string in the search bar', () => {
        cy
        .wait(750)
        .get('input').type('Mulan{enter}')
        .get('.poster-wrapper').within(() => {
            cy.get('.poster-title').contains('Mulan')
        })
    })

    it('should display an error if a string input into the search bar doesn\'t match', () => {
        cy
        .wait(750)
        .get('input').type('school{enter}')
        .get('h2').contains('No criteria matched your search!')
    })

    it('should be able to click a button on error page to go back to main display', () => {
        cy
        .wait(750)
        .get('input').type('school{enter}')
        .get('h2').contains('No criteria matched your search!')
        .get('button').contains('Go Back')
        .get('button').click()
        .get('.movie-grid').should('be.visible')
    })

    it('should be able to click a button to refresh back to displaying all the movies', () => {
        cy
        .get('.button-lobby').click()
        .get('.poster-wrapper:first').within(() => {
            cy.get('.poster-title').contains('Money Plane')
        })
    })
    })