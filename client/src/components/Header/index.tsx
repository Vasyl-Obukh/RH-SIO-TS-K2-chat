import * as React from 'react';
import * as Styles from './styles';
import paths from '../../constants/paths';

function Header() {
  return (
    <Styles.Container>
      <Styles.HomeLink to={paths.HOME}>Home</Styles.HomeLink>
    </Styles.Container>
  );
}

export default Header;