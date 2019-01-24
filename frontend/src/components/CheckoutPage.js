import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class CheckoutPage extends Component {
  render() {
    return (
      <StripeProvider apiKey={"pk_test_YRDXagNKMjZOXlX2ULVNUWbT"}>
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default CheckoutPage;
