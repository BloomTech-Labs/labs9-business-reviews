import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  background: #142e41;
  span{
    color: white;
    margin-top: 5px;
    padding-right: 40px;
  }
  a {
    color: white;
    text-decoration: none;
    padding: 5px;
  }
`;

// Needs an icon for copyright

function Footer() {
  return (
    <FooterStyles>
      <span>&copy Bonafind</span> 
      <a href='https://github.com/Lambda-School-Labs/labs9-business-reviews'>
        Meet the Team
      </a>
    </FooterStyles>
  );
}

export default Footer;
