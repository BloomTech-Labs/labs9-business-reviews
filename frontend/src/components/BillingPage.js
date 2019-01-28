import React, { Component } from 'react';
import styled from 'styled-components';
import BillingForm from './BillingForm';

const StyledBilling = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  .billing {
    border: solid black 1px;
  }
  button {
    padding: 30px;
    font-size: 20px;
    width: 300px;
    margin-top: 30px;
  }
`;

class BillingPage extends Component {
  render() {
    return (
      <div>
        <StyledBilling>
          <div className='billing'>
            <BillingForm>
              <button>Buy Now</button>
            </BillingForm>
          </div>
        </StyledBilling>
      </div>
    );
  }
}

export default BillingPage;
