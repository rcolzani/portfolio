import React, { Component } from 'react';

import { Container } from './styles';

export default class Construcao extends Component {
  state = { showComponent: true };


  closeDiv() {
    this.setState({ showComponent: false });
    console.log(this.state);
  }

  render() {
    const { showComponent } = this.state;

    return (
      <Container showComponent={showComponent}>
        <h1>Em construção</h1>
        <button
          type="button"
          onClick={() => this.closeDiv()}
        >Fechar</button>
      </Container>
    )
  }
}


