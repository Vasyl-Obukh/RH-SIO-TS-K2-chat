import * as React from 'react';
import * as Styles from './styles';

const defaultCopyright = 'Copyright © 2019 by Vasyl Obukh. All Rights Reserved.';

type Props = {
  copyright?: string
};

function Footer(props: Props) {
  const { copyright = defaultCopyright } = props;

  return (
    <Styles.Container>
      <Styles.Copyright>{copyright}</Styles.Copyright>
    </Styles.Container>
  );
}

export default Footer;