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
  it('should contain 4 divs', () => {
    let app = shallow(<AddReviewModal/>);
    expect(app.find("div").length).toBe(4);
  });
  it('should contain review__modal div', () => {
    let app = shallow(<AddReviewModal/>);
    expect(app.find(".review__modal").length).toBe(1);
  });
  it('should contain container div', () => {
    let app = shallow(<AddReviewModal/>);
    expect(app.find(".container").length).toBe(1);
  });
});
