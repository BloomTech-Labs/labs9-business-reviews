import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import LandingPageComponent from '../components/LandingPage';

describe('<LandingPageComponent />', () => {
  it('renders', () => {
    shallow(<LandingPageComponent />);
  });
  it('matches snapshot', () => {
    const wrapper = shallow(<LandingPageComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
