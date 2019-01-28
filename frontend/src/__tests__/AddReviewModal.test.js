import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import AddReviewModal from '../components/AddReviewModal';

describe('<AddReviewModal />', () => {
  it('renders', () => {
    shallow(<AddReviewModal />);
  });
  it('matches snapshot', () => {
    const wrapper = shallow(<AddReviewModal />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
