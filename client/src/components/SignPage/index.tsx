import * as React from 'react';
import * as Styles from './styles';
import useSignStatus from '../../effects/useSignStatus';
import { Redirect } from 'react-router';
import paths from '../../constants/paths';
import localStorageHandler from '../../handlers/localStorageHandler';

function SignPage() {
  const isSignedIn = useSignStatus();
  const userName = React.createRef();
  const handleSubmit = e => {
    e.preventDefault();
    // @ts-ignore
    localStorageHandler.signIn(userName.current.value);
  };

  return (
    <Styles.Container>
      {isSignedIn && <Redirect to={paths.HOME} />}
      <Styles.Form onSubmit={handleSubmit}>
        <Styles.Label htmlFor='name' >Please, register</Styles.Label>
        <Styles.Input ref={userName} type='text' id='name' placeholder='Enter your name...' autoComplete='off' required />
        <Styles.Button>Confirm</Styles.Button>
      </Styles.Form>
    </Styles.Container>
  );
}

export default SignPage;