import * as React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import * as Styles from './styles';

interface Props {
  component: any
}

function PageWrapper({ component: Component }: Props) {
  return (
    <>
      <Header />
      <Styles.ComponentContainer>
        <Component />
      </Styles.ComponentContainer>
      <Footer />
    </>
  );
}

export default PageWrapper;