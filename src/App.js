import React from 'react';
import List from './Pokemon/List/List';
import View from './Pokemon/View/View';
import AppProvider from './AppContext/Provider';
import AppContext from './AppContext/Context';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <h1>
            <Link to="/pokemons/list">Pokémon List App</Link>
          </h1>
          <AppContext.Consumer>
            {({ user }) => (
              <></>
            )}
          </AppContext.Consumer>
          <Switch>
            <Route path="/pokemons/list" component={List} />
            <Route
              path="/pokemons/:name"
              component={View}
            />
            <Route path="/" exact>
              <Redirect to="/pokemons/list" />
            </Route>
          </Switch>
        </Router>
      </AppProvider>
    </div>
  );
}