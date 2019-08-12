import React from 'react';
import { shallow } from 'enzyme';
import PageWrapper from './index';

describe('<PageWrapper /> tests', () => {
  const testString = 'test';

  test('Should render correctly', () => {
    const component = shallow(<PageWrapper component={testString} />);
    expect(component).toMatchSnapshot();
  });

  test('', () => {
    const component = shallow(<PageWrapper component={testString} />);
    const stringNodes = component.findWhere(n => n.getElement().type == 'test');
    expect(stringNodes.length).toBe(1);
  });
});