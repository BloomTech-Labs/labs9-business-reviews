import React from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import MainContent from './MainContent'

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  @media(max-width:900px){
    background-color: #eed974;
  }
`;

export default function LandingPage() {
  return (
    <Container>
      <SearchBar />
      <MainContent />
    </Container>
  )
}
