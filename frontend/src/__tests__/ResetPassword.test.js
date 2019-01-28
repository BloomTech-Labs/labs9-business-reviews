import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import ResetPasswordComponent from '../components/ResetPassword';

describe('ResetPasswordComponent />', () => {
  it('renders', () => {
    shallow(<ResetPasswordComponent />);
  });
  it('matches snapshot', () => {
    const wrapper = shallow(<ResetPasswordComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
