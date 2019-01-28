import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import FooterComponent from '../components/Footer';

describe('<FooterComponent />', () => {
  it('renders', () => {
    shallow(<FooterComponent />);
  });
  it('matches snapshot', () => {
    const wrapper = shallow(<FooterComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
