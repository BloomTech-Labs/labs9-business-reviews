import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import UserProfileComponent from '../components/UserProfile';

describe('UserProfileComponent />', () => {
  it('renders', () => {
    shallow(<UserProfileComponent match={{ params: '1' }} />);
  });
  it('matches snapshot', () => {
    const wrapper = shallow(<UserProfileComponent match={{ params: '1' }} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
