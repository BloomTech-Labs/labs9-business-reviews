import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import UpdatePasswordComponent from '../components/UpdatePassword';

describe('UpdatePasswordComponent />', () => {
  it('renders', () => {
    shallow(<UpdatePasswordComponent />);
  });
  it('matches snapshot', () => {
    const wrapper = shallow(<UpdatePasswordComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
