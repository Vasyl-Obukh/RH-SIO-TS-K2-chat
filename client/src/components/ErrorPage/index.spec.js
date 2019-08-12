import React from 'react';
import { shallow } from 'enzyme';
import ErrorPage from './index';

describe('<ErrorPage> tests', () => {
  test('Should render correctly', () => {
    const component = shallow(< ErrorPage / >);
    expect(component).toMatchSnapshot();
  });
});