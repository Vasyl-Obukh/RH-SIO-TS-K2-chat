import * as React from 'react';
import * as Styles from './styles';
import CardNew from '../CardNew';
import Cards from '../Cards';
import useSignStatus from '../../effects/useSignStatus';
import { Redirect } from 'react-router';
import paths from '../../constants/paths';

function Home() {
  const isSignedIn = useSignStatus();
  return (
    <Styles.Container>
      {!isSignedIn && <Redirect to={paths.SIGN_PAGE} />}
      <CardNew />
      <Cards />
    </Styles.Container>
  );
}

export default Home;