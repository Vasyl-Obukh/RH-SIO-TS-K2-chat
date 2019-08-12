import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import * as Styles from './styles';

describe('<Header /> tests', () => {
  test('Should render correctly', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });

  test('Should pass home ref to the link', () => {
    const component = shallow(<Header />);
    expect(component.find(Styles.HomeLink).prop('to')).toBe('/')
  });
});