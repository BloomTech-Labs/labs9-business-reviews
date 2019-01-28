import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import PlaceHolderReviewsComponent from '../components/PlaceHolderReviews';

describe('PlaceHolderReviewsComponent />', () => {
  it('renders', () => {
    shallow(<PlaceHolderReviewsComponent />);
  });
  it('matches snapshot', () => {
    const wrapper = shallow(<PlaceHolderReviewsComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
