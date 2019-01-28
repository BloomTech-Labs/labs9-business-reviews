import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import MainContentComponent from '../components/MainContent';

describe('MainContentComponent />', () => {
  it('renders', () => {
    shallow(<MainContentComponent />);
  });
  it('matches snapshot', () => {
    const wrapper = shallow(<MainContentComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
