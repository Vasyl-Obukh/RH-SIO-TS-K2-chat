import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import paths from '../../constants/paths';
import * as Styles from './styles';
import PageWrapper from '../PageWrapper';
import Home from '../Home';
import Room from '../Room';
import SignPage from '../SignPage';
import ErrorPage from '../ErrorPage';

function App() {
  return (
    <Styles.Container>
      <Switch>
        <Route exact path={paths.HOME} render={() => <PageWrapper component={Home} />} />
        <Route path={paths.ROOM} render={() => <PageWrapper component={Room} />} />
        <Route path={paths.SIGN_PAGE} component={SignPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Styles.Container>
  );
}

export default App;