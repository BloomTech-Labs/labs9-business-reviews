import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
// import { Mutation } from 'react-apollo';
// import Router from 'next/router';
// import NProgress from 'NProgress';
import PropTypes from 'prop-types';
// import gql from 'graphql-tag';

class BillingForm extends React.Component {
    render() {
        return(
           <StripeCheckout
                name="Bonafind"
                description="Purchase Subscription"
           >
               {this.props.children}
           </StripeCheckout> 
        )
    }
}

export default BillingForm;