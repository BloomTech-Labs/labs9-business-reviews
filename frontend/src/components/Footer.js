import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  a {
    margin-top: 50px;
    margin-bottom: 50px;
    color: black;
    text-decoration: none;
    margin-right: 10px;
    padding: 5px;
  }
`;

function Footer() {
  return (
    <FooterStyles>
      <a href='https://github.com/Lambda-School-Labs/labs9-business-reviews'>
        Meet the Team
      </a>
    </FooterStyles>
  );
}

export default Footer;
