import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import BillingPage from '../components/BillingPage';

describe('<BillingPage />', () => {
  it('renders', () => {
    shallow(<BillingPage />);
  });
  it('matches snapshot', () => {
    const wrapper = shallow(<BillingPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
