describe('Pokedex', function() {
  beforeEach(function() {
    cy.visit('http://localhost:5000/')
  })

  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo')
  })

  it('Pokemon page can be navigated to', function() {
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
    cy.contains('Next').click()
    cy.contains('venusaur')
  })
})