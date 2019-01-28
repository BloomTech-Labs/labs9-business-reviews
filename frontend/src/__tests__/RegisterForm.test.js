import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import RegisterFormComponent from '../components/RegisterForm';

describe('RegisterFormComponent />', () => {
  it('renders', () => {
    shallow(<RegisterFormComponent />);
  });
  it('matches snapshot', () => {
    const wrapper = shallow(<RegisterFormComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
