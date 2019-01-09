import React, { Component } from 'react'
import styled from 'styled-components'
import SideBar from './SideBar';
import ProfileNav from './ProfileNav';

const StyledBilling = styled.div`
  width: 80%;
  display: flex;
  height: 600px;
  .billing{
    padding-left: 20px;
  }
  .payment-form{
    width: 280px;
    display: flex;
    flex-direction: column;

    border: 1px solid black;
    padding: 10px;
  }
  .payment-form input{
    width: 180px;
    margin: 10px;
    padding: 6px;
  }
  .input-div{
    display: flex;
    justify-content: center;
  }
  .checkbox{
    display: flex;
  }
  .checkbox p{
    margin-left: 5px;
  }
  button{
    padding: 30px;
    font-size: 20px;
    width: 300px;
    margin-top: 30px;
  }
`;

class BillingPage extends Component {
    constructor() {
        super();
    }

    render() {
      return(
        <div>
          <ProfileNav />
          <StyledBilling>
            <SideBar />
            <div className="billing">
              <h1>Billing</h1>
              <h4>Payment Info</h4>
              <form className="payment-form">
                <div className="input-div">
                  <p>CC#</p>
                  <input placeholder="####-####-####-####" />
                </div>
                <div className="input-div">
                  <p>EXP</p>
                  <input placeholder="MM/YY" />
                </div>
                <div className="input-div">
                  <p>CVV</p>
                  <input placeholder="###" />
                </div>
              </form>
              <form>
                <div className="checkbox">
                  <input type="checkbox" />
                  <p>1 Year Subscription - $9.99</p>
                </div>
                <div className="checkbox">
                  <input type="checkbox" />
                  <p>1 Month Subscription - $0.99</p>
                </div>
              </form>
              <button>Buy Now</button>
            </div>
          </StyledBilling>
        </div>
      )
    }
}

export default BillingPage;