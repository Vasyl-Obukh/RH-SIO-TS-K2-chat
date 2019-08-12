import * as React from 'react';
import Header from '../Header';
import Footer from '../Footer';

interface Props {
  component: React.FC
}

function PageWrapper({ component: Component }: Props) {
  return (
    <>
      <Header />
      <Component />
      <Footer />
    </>
  );
}

export default PageWrapper;