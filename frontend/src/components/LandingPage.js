import React from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import MainContent from './MainContent'
import Footer from './Footer'

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  border: 1px solid blue;
  padding-top: 2rem;
`;

export default function LandingPage() {
  return (
    <Container>
      <SearchBar />
      <MainContent />
      <Footer />
    </Container>
  )
}
