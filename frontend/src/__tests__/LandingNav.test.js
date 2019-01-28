import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import LandingNavComponent from '../components/LandingNav';

describe('<AddReviewModal />', () => {
  it('renders', () => {
    shallow(<LandingNavComponent />);
  });
  it('matches snapshot', () => {
    const wrapper = shallow(<LandingNavComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
