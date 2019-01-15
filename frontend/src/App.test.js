import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import App from './App';


describe('<App />', () => {
	it('renders without crashing', () => {
		shallow(<App />);
  });
  it.skip('matches snapshot', () => {
    const snapshot = renderer.create(<App />).toJSON();
    expect(snapshot).toMatchSnapshot();
	});
});