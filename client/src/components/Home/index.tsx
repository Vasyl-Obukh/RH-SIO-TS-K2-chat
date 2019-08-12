import * as React from 'react';
import * as Styles from './styles';
import CardNew from '../CardNew';
import Cards from '../Cards';

function Home() {
  return (
    <Styles.Container>
      <CardNew />
      <Cards />
    </Styles.Container>
  );
}

export default Home;