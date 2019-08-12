import * as React from 'react';
import * as Styles from './styles';
import { withRouter } from 'react-router';
import Chat from '../Chat';
import MessageSendForm from '../MessageSendForm';

function Room(props) {
  React.useEffect(() => {
    document.title =  document.title.split('/')[0] + '/' + props.title;
    return () => document.title = document.title.split('/')[0];
  });

  return (
    <Styles.Container>
      <Styles.Title>Room name: {props.title}</Styles.Title>
      <Chat />
      <MessageSendForm />
    </Styles.Container>
  );
}

export default withRouter(Room);