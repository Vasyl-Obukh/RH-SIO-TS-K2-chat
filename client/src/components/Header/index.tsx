import * as React from 'react';
import * as Styles from './styles';
import paths from '../../constants/paths';
import localStorageHandler from '../../handlers/localStorageHandler';

function Header() {
  return (
    <Styles.Container>
      <Styles.Link to={paths.HOME}>Home</Styles.Link>
      <Styles.Link as='span' onClick={localStorageHandler.signOut}>Sign out</Styles.Link>
    </Styles.Container>
  );
}

export default Header;