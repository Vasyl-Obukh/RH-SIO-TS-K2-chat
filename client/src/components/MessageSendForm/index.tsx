import * as React from 'react';
import * as Styles from './styles';

function MessageSendForm() {
  return (
    <Styles.Container>
      <Styles.Input type='text' placeholder='Enter your message...' required />
      <Styles.Button type='submit'>Send</Styles.Button>
    </Styles.Container>
  );
}

export default MessageSendForm;