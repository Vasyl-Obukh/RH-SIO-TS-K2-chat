import React from 'react';
import { shallow } from 'enzyme';
import Card from './index';
import * as Styles from './styles';

describe('<Card /> tests', () => {
  const props = {
    title: 'test title',
    url: 'test url'
  };

  test('Should render correctly', () => {
    const component = shallow(<Card {...props} />);
    expect(component).toMatchSnapshot();
  });

  test('Should pass url to the Link\'s attribute "to"', () => {
    const component = shallow(<Card {...props} />);
    expect(component.find(Styles.Title).prop('to')).toBe('test url');
  })

  test('Should pass title as the Link\'s child', () => {
    const component = shallow(<Card {...props} />);
    expect(component.find(Styles.Title).text()).toBe('test title');
  })
});