import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import StarshipPage from './components/StarshipPage/StarshipPage';
import { getAllStarships } from './services/sw-api';

export default class App extends Component {
  state = {
    starships: null,
  }

  async componentDidMount() {
    try {
      //getAllStarships data from API
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" render={() => (<Link><StarshipPage /></Link>)} />
          </Switch>
        </header>
      </div>
    )
  }
}

