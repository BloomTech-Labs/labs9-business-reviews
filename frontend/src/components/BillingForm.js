import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import styled from 'styled-components'
// import { Mutation } from 'react-apollo';
// import Router from 'next/router';
// import NProgress from 'NProgress';
import PropTypes from 'prop-types';
// import gql from 'graphql-tag';

const StyledBillingForm = styled.div`
  .billing-form{
    
    padding: 20px;
    max-width: 550px;
  },
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
  }

  render() {
    return(
      <StyledBillingForm>
        <div className="billing-form">  
        <h1>Billing</h1>
          <p>Here you can choose between a monthly or yearly subscription. Without a subscription, you can only read 3 reviews per day. But with a subscription you can view as many reviews as you like!</p>
          <form>
            <input type="radio" name="subscription" value="yearly" onClick={this.annualSub} />1 Year Subscription - $9.99 <br/>
            <input type="radio" name="subscription" value="yearly" onClick={this.monthlySub} />1 Month Subscription - $0.99 <br/>
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