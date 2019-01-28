import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import ModalComponent from '../components/Modal';

describe('<ModalComponent />', () => {
  it('renders', () => {
    shallow(<ModalComponent />);
  });
  it('matches snapshot', () => {
    const wrapper = shallow(<ModalComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
