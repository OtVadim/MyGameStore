import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from "react-redux";

import { HomePage } from './pages/home-page';
import { GamePage } from './pages/game-page';
import { Header } from './components/header';
import { store } from './redux';




function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route path="/">
              <HomePage />
            </Route>
            <Route path="/app/:title">
              <GamePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
