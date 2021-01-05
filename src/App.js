import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import StarshipPage from './components/StarshipPage/StarshipPage';
import { getAllStarships } from './services/sw-api';

export default class App extends Component {
  state = {
    starships: [],
    loading: true,
    errorMessage: '',
  }

  async componentDidMount() {
    try {
      const starshipData = await getAllStarships();
      console.log(starshipData);
      this.setState({
        starships: starshipData.results,
        loading: false,
      });
    } catch (err) {
      console.error(err);
      this.setState({
        errorMessage: 'There was an error!',
        loading: false,
      });
    }
  }

  render() {

    if (this.state.loading) {
      return <h1>Loading...</h1>
    }

    if (this.state.errorMessage) {
      return <h1>{this.state.errorMessage}</h1>
    }

    return (
      <div className="App">
        <header className="App-header">STAR WARS STARSHIPS</header>
        <Switch>
          <Route exact path="/">
            {this.state.starships.map((starship, id) => (<Link to={`/starship/${id}`}>{starship.name}</Link>))}
          </Route>

          <Route path='/starship/:id' render={props => <StarshipPage {...props} ship={this.state.starships} />} />
        </Switch>
      </div>
    )
  }
}

