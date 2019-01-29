import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import styled from 'styled-components'
import axios from 'axios';
import { backendLink } from '../assets/config';

const StyledBillingForm = styled.div`
  background-color: white;
  .billing-form{   
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.15);
    padding: 40px;
    max-width: 500px;
  }
  .radio-form {
    padding: 15px;
  }
`;

class BillingForm extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: 99,
    };
  }

  annualSub = () => {
    this.setState({ amount: 999 });
    console.log("Amount", this.state.amount);
  };

  monthlySub = () => {
    this.setState({ amount: 99 });
    console.log("Amount", this.state.amount);
  };

  onToken = (res) => {
    console.log('On Token Called!');
    console.log(res);
    console.log(res.id);
    if(this.state.amount === 99) {
      axios
        .post(`${backendLink}/api/billing/monthly?token=${res.id}`)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    } else if(this.state.amount === 999) {
      axios
        .post(`${backendLink}/api/billing/yearly?token=${res.id}`)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    } else return null
  };

  render() {
    return(
      <StyledBillingForm>
        <div className="billing-form">  
        <h1>Bonafind Subscription</h1>
          <p>Here you can choose between a monthly or yearly subscription. Without a subscription, you can only read 3 reviews per day. But with a subscription you can view as many reviews as you like!</p>
          <form className="radio-form">
            <input type="radio" name="subscription" value="yearly" onClick={this.annualSub} />1 Year Subscription - $9.99 <br/> <br/>
            <input type="radio" name="subscription" value="monthly" onClick={this.monthlySub} />1 Month Subscription - $0.99 <br/>
          </form>
          <StripeCheckout
            amount={this.state.amount}
            name="Bonafind"
            description="Purchase Subscription"
            stripeKey="pk_test_YRDXagNKMjZOXlX2ULVNUWbT"
            currency="USD"
            token={res => this.onToken(res)}
          >
            {this.props.children}
          </StripeCheckout>
        </div>
      </StyledBillingForm>
    )
  }
}

export default BillingForm;