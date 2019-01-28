import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import EditReviewComponent from '../components/EditReview';

describe('<AddReviewModal />', () => {
  it('renders', () => {
    shallow(<EditReviewComponent />);
  });
  it('matches snapshot', () => {
    const wrapper = shallow(<EditReviewComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
