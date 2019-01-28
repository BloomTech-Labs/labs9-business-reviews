import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import LoginFormComponent from '../components/LoginForm';

describe('<LoginComponent />', () => {
  it('renders', () => {
    shallow(<LoginFormComponent />);
  });
  it('matches snapshot', () => {
    const wrapper = shallow(<LoginFormComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
