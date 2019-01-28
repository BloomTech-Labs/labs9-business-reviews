import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import PopularReviewersComponent from '../components/PopularReviewers';

describe('PopularReviewersComponent />', () => {
  it('renders', () => {
    shallow(<PopularReviewersComponent />);
  });
  it('matches snapshot', () => {
    const wrapper = shallow(<PopularReviewersComponent />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
