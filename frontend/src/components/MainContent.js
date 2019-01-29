import React from 'react';
import PopularReviewers from './PopularReviewers';
import PopularBusinesses from './PopularBusinesses';
import styled from 'styled-components';

const MainContentContainer = styled.div`
  width: 100%;
`;

const PopularBusinessesContainer = styled.div`
  background: #f1f1f1;
`;

function MainContent() {
  return (
    <MainContentContainer>
      <PopularBusinessesContainer>
        <PopularBusinesses />
      </PopularBusinessesContainer>
      <PopularReviewers />
    </MainContentContainer>
  );
}

export default MainContent;
