import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import UpdateUserComponent from '../components/UpdateUser';

describe('UpdateUserComponent />', () => {
  it('renders', () => {
    shallow(<UpdateUserComponent />);
  });
  it('matches snapshot', () => {
    const wrapper = shallow(<UpdateUserComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
