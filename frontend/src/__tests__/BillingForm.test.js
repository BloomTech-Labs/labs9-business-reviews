import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import BillingFormComponent from '../components/BillingForm';

describe('<AddReviewModal />', () => {
  it('renders', () => {
    shallow(<BillingFormComponent />);
  });
  it('matches snapshot', () => {
    const wrapper = shallow(<BillingFormComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
