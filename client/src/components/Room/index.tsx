import * as React from 'react';
import * as Styles from './styles';
import { withRouter } from 'react-router';
import Chat from '../Chat';
import MessageSendForm from '../MessageSendForm';
import useSignStatus from '../../effects/useSignStatus';
import { Redirect } from 'react-router';
import paths from '../../constants/paths';

function Room(props) {
  const isSignedIn = useSignStatus();
  React.useEffect(() => {
    document.title =  document.title.split('/')[0] + '/' + props.title;
    return () => document.title = document.title.split('/')[0];
  });

  return (
    <Styles.Container>
      {!isSignedIn && <Redirect to={paths.SIGN_PAGE} />}
      <Styles.Title>Room name: {props.title}</Styles.Title>
      <Chat />
      <MessageSendForm />
    </Styles.Container>
  );
}

export default withRouter(Room);