import * as React from 'react';
import * as Styles from './styles';

export interface CardInterface {
  title: string,
  url: string
}

function Card(props: CardInterface) {
  return (
    <Styles.Wrapper>
      <Styles.Title to={props.url}>{props.title}</Styles.Title>
    </Styles.Wrapper>
  );
}

export default Card;