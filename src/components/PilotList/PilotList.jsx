import React, { Component } from 'react';
import { getPilots } from '../../services/sw-api';

export default class PilotList extends Component {
    state = {
        pilots: [],
    }

    async componentDidMount() {
        let pilots = await getPilots(this.props.pilots);
        this.setState({ pilots: pilots })
    }

    render() {
        return (
            <ul>
                {this.state.pilots.map((pilot, index) => <li>{pilot.name}</li>)}
            </ul>
        );
    }
}