import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import StarshipPage from './components/StarshipPage/StarshipPage';
import { getAllStarships } from './services/sw-api';

export default class App extends Component {
  state = {
    starships: [],
  }

  async componentDidMount() {
    try {
      const starshipData = await getAllStarships();
      console.log(starshipData);
      this.setState({ starships: starshipData.results });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/">
              {this.state.starships.map((starship, id) => (<Link to={`/starship/${id}`}>{starship.name}</Link>))}
            </Route>

            <Route path='/starship/:id' render={props => <StarshipPage {...props} ship={this.state.starships} />} />
          </Switch>
        </header>
      </div>
    )
  }
}

