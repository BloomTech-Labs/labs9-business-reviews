import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  background: #142e41;
  color: white;

  span {
    // padding-right: 300px;
  }
  a {
    color: white;
    text-decoration: none;
    padding: 10px;
  }
`;

function Footer() {
  return (
    <FooterStyles>
      <span>© 2019 Bonafind</span>
      <a href='https://github.com/Lambda-School-Labs/labs9-business-reviews'>
        Meet the Team
      </a>
    </FooterStyles>
  );
}

export default Footer;
