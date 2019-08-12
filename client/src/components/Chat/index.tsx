import * as React from 'react';
import * as Styles from './styles';
import Messages from '../Messages';

function Chat() {
  return (
    <Styles.Container>
      <Messages />
    </Styles.Container>
  );
}

export default Chat;