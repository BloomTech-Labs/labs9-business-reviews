import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import FeaturedReviewsComponent from '../components/FeaturedReviews';

describe('<FeaturedReviewsComponent />', () => {
  it('renders', () => {
    shallow(<FeaturedReviewsComponent />);
  });
  it('matches snapshot', () => {
    const wrapper = shallow(<FeaturedReviewsComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
