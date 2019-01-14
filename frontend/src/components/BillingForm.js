import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
// import { Mutation } from 'react-apollo';
// import Router from 'next/router';
// import NProgress from 'NProgress';
import PropTypes from 'prop-types';
// import gql from 'graphql-tag';

class BillingForm extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
    };
  }

  annualSub = () => {
    // this.setState({ amount: 999 });
    console.log("Amount", this.state.amount);
    console.log("You clicked me!");
  };

  onToken = (res) => {
    console.log('On Token Called!');
    console.log(res);
    console.log(res.id);
  }

  render() {
    return(
      <div>
        <button onClick={this.annualSub()} >Click Me</button>
        <form>
          <input type="checkbox" name="subscription" value="yearly"  />1 Year Subscription - $9.99 <br/>
          <input type="checkbox" name="subscription" value="yearly" />1 Month Subscription - $0.99 <br/>
          <input type="submit" value="Submit" />
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
    )
  }
}

export default BillingForm;