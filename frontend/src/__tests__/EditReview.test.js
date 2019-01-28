import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import EditReviewComponent from '../components/EditReview';

describe('<EditReviewComponent />', () => {
  it('renders', () => {
    shallow(<EditReviewComponent match={{ params: '1' }} />);
  });
  it('matches snapshot', () => {
    const wrapper = shallow(<EditReviewComponent match={{ params: '1' }} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
