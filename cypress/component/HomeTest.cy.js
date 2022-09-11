import Home from "../../pages";
import { mount } from 'cypress/react'

describe('HomeTest.cy.js', () => {

  beforeEach(() => {
    // given
    mount(<Home />)
  })

  it('title test', () => {
    cy.get('[data-cy="title"]').contains('Welcome to Next.js on Docker')
  })

  it('p test', () => {
    cy.get('p').contains('Get started by editing')
    cy.get('p code').contains('pages/index.js')
  })

  it('body test', () => {
    cy.get('[data-cy="grid"]').children().should('have.length', 4)
  })
})
