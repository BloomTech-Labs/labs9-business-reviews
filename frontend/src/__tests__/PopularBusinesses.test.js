import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import PopularBusinessesComponent from '../components/PopularBusinesses';

describe('PopularBusinessesComponent />', () => {
  it('renders', () => {
    shallow(<PopularBusinessesComponent />);
  });
  it('matches snapshot', () => {
    const wrapper = shallow(<PopularBusinessesComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
