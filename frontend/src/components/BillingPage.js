import React, { Component } from 'react';
import styled from 'styled-components';
import BillingForm from './BillingForm';

const StyledBilling = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  // background-color: #142e41;
  .billing {
    padding-left: 20px;
  }
  .payment-form {
    width: 280px;
    display: flex;
    flex-direction: column;

    border: 1px solid black;
    padding: 10px;
  }
  .payment-form input {
    width: 180px;
    margin: 10px;
    padding: 6px;
  }
  .input-div {
    display: flex;
    justify-content: center;
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
