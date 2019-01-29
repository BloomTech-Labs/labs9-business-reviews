import React from 'react';
import styled from 'styled-components';
import copyright from '../assets/copyright.png';

const FooterStyles = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  background: #142e41;
  span{
    color: white;
    padding-right: 40px;
  }
  a {
    color: white;
    text-decoration: none;
    padding: 5px;
  }
  .copyright {
    padding-right: 5px;
    height: 15px;
    width: 15px;
  }
`;

// Needs an icon for copyright

function Footer() {
  return (
    <FooterStyles>
      <img src={copyright} alt="copyright" className="copyright" />
      <span> Bonafind</span> 
      <a href='https://github.com/Lambda-School-Labs/labs9-business-reviews'>
        Meet the Team
      </a>
    </FooterStyles>
  );
}

export default Footer;
