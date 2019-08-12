import * as React from 'react';
import * as Styles from './styles';

const mockMessages = [
  {
    name: 'First Last1',
    text: 'Some amazing answer1'
  },
  {
    name: 'First Last2',
    text: 'Some amazing answer2'
  },
  {
    name: 'First Last3',
    text: 'Some amazing answer3'
  },
  {
    name: 'First Last4',
    text: 'Some amazing answer4'
  }
];

function Messages(props) {
  return (
    <Styles.Container>
      {props.messageArray.map((msg, id) => (
        <Styles.Message key={id}>
          <Styles.User>{msg.name}</Styles.User>
          <Styles.Text>{msg.text}</Styles.Text>
        </Styles.Message>
      ))}
    </Styles.Container>
  );
}

export default () => <Messages messageArray={mockMessages} />;