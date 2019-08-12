import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index';
import * as Styles from './styles';

describe('<Footer /> tests', () => {
  const testCopyright = 'test copyright';

  test('Should render correctly', () => {
    const component = shallow(<Footer copyright={testCopyright} />);
    expect(component).toMatchSnapshot();
  });

  test('Should render correctly without passed copyright text', () => {
    const component = shallow(<Footer />);
    expect(component).toMatchSnapshot();
  });

  test('Should pass copyright text to appropriate node', () => {
    const component = shallow(<Footer copyright={testCopyright} />);
    expect(component.find(Styles.Copyright).text()).toBe('test copyright');
  });
});