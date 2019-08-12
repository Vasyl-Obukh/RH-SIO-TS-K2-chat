import * as React from 'react';
import Card, { CardInterface } from '../Card';
import * as Styles from './styles';

const mockArray = [
  {
    title: 'some chat1',
    url: '/room-111'
  },
  {
    title: 'some chat2',
    url: '/room-666'
  },
  {
    title: 'some chat3',
    url: '/room-222'
  }
];

type Props = {
  cards: CardInterface[]
}

function Cards(props: Props) {
  return (
    <Styles.Container>
      {props.cards.map(card => <Card key={card.url} title={card.title} url={card.url} />)}
    </Styles.Container>
  );
}

export default () => <Cards cards={mockArray} />;