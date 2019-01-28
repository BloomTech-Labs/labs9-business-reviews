import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import SideBarComponent from '../components/SideBar';

describe('PopularBusinessesComponent />', () => {
  it('renders', () => {
    shallow(<SideBarComponent />);
  });
  it('matches snapshot', () => {
    const wrapper = shallow(<SideBarComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
