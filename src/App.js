import React, { Component } from 'react';

import { Title, Container, PictureBorder, RepositoryList } from './styles'

import GlobalStyle from './styles/global'

import api from './services/api'

export default class App extends Component {
  state = {
    repositories: [],
    cor: '#7159c1'
  };

  async componentDidMount() {
    const response = await api.get('/users/rcolzani/repos');

    this.setState({
      repositories: response.data.sort((a, b) => a.created_at < b.created_at)
    })
  }

  _onMouseMove(e) {
    this.setState({ cor: this.randomColor() });
  }

  getIntegerRandom() {
    const min = Math.ceil(0);
    const max = Math.floor(255);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  randomColor() {
    return "#" + this.componentToHex(this.getIntegerRandom()) + this.componentToHex(this.getIntegerRandom()) + this.componentToHex(this.getIntegerRandom());
  }

  render() {
    const { repositories } = this.state;

    return (
      <>
        <Container className="App" onMouseMove={this._onMouseMove.bind(this)} >
          <PictureBorder fontcolor={this.state.cor}>
            <img src="https://avatars1.githubusercontent.com/u/6742811?s=400&u=08e0915ca288e05e885b4bde2193c5cc23d763c9&v=4" />
          </PictureBorder>
          <Title fontcolor={this.state.cor} >{this.state.repositories.length} Ricardo Colzani</Title>
          <RepositoryList>
            {repositories.map(repository => (
              <li key={repository.name}>
                <span>{repository.name}</span>
              </li>
            ))}
          </RepositoryList>
        </Container>
        <GlobalStyle />
      </>
    );
  }
}

