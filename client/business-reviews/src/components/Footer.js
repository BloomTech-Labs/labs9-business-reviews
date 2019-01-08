import React from 'react'
import styled from 'styled-components'


const FooterStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  a {
    margin-top: 150px;
    margin-bottom: 50px;
  }
`;

function Footer() {
  return (
    <FooterStyles>
      <a href="www.google.com">Meet the Team</a>
    </FooterStyles>
  )
}

export default Footer;