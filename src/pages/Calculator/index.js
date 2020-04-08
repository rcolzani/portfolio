import React, { Component } from 'react';
import produce from 'immer';
import { formatPrice } from '../../util/format';
import { Container, Subtitulo, ListaItens, ListaItem, Botoes, CustomSize, Result } from './styles';

import Construcao from '../../components/Construcao';

export default class Calculator extends Component {
  state = {
    customButtonSize: 0,
    CompareItems: [],
    CompareResult: [],
    botoes: [{ size: 210, description: "210 ml", type: 'Mini latinha' }, { size: 250, description: "250 ml", type: 'Mini lata' }, { size: 300, description: '300 ml', type: 'Garrafinha' }, { size: 350, description: '350 ml', type: 'Latinha' }, { size: 473, description: '473 ml', type: 'Latão' }, { size: 600, description: '600 ml', type: 'garrafa' }]
  }

  calculaPrecoPorLitro(cerveja) {
    return cerveja.price * 1000 / cerveja.size;
  }

  handlePriceChange = e => {
    const { CompareItems } = this.state;

    const result = produce(CompareItems, draft => {
      const productIndex = draft.findIndex(p => p.id === e.target.id);
      if (productIndex >= 0) {
        draft[productIndex].price = e.target.value;
        draft[productIndex].pricePerLiter = this.calculaPrecoPorLitro(draft[productIndex]);
      }
    });

    let compareResult = result.slice().filter(a => a.pricePerLiter > 0).sort((a, b) => a.pricePerLiter - b.pricePerLiter);

    compareResult = compareResult.map(item => ({ ...item, percentual: (item.pricePerLiter - compareResult[0].pricePerLiter) * 100 / compareResult[0].pricePerLiter }));
    console.log(compareResult);

    this.setState({ CompareItems: result, CompareResult: compareResult });
  }

  async addButton(botao) {
    const { CompareItems } = this.state;
    const newButton = { ...botao, id: CompareItems.length.toString(), price: 0, pricePerLiter: 0 }
    console.log(newButton);
    this.setState({ CompareItems: [...CompareItems, newButton] })
  }

  async addButtonCustom(size) {

    if (size <= 0) {
      return;
    }

    const buttonNew = { size: size, description: size + " ml", type: 'Person.' }
    this.addButton(buttonNew);
    this.setState({ customButtonSize: 0 });
  }

  handleCustomButtonSizeChange = e => {
    this.setState({ customButtonSize: e.target.value });
  };

  render() {
    const { customButtonSize, CompareItems, CompareResult, botoes } = this.state;

    return (
      <>
        {/* <Construcao /> */}
        <Container>
          <h1>Comparador de preços de bebidas</h1>
          <Subtitulo mostrar={CompareItems.length <= 0}>Fácil, rápido e intuitivo <span>&#128525;&#128516;🍻</span> </Subtitulo>
          <span>Clique para adicionar os itens para comparação</span>
          <Botoes>
            {botoes.map(botao => (
              <>
                <button
                  key={botao.description}
                  type="button"
                  onClick={() => this.addButton(botao)}
                >{botao.description}<span>{botao.type}</span></button>
              </>
            ))}
            <CustomSize>
              <span>Personalizado</span>
              <input type="number" name='customButton' value={customButtonSize} onChange={this.handleCustomButtonSizeChange} />
              <span>ml</span>
              <button type="button" onClick={() => this.addButtonCustom(customButtonSize)}>Adicionar</button>
            </CustomSize>
          </Botoes>

          {CompareItems.length > 0 ? <span>Itens adicionados para comparação</span> : ''}
          <ListaItens>
            {CompareItems.map(item => (
              <ListaItem key={item.id} >
                <span id='itemDescription'>{item.description}<span> ({item.type})</span></span>
                <div>R$ <input type="number" max="999" id={item.id} name={item.id} value={item.preco} onChange={this.handlePriceChange} /></div>
                <span id='itemPricePerLiter'>Por litro {formatPrice(item.pricePerLiter)}</span>
              </ListaItem>
            ))}
          </ListaItens>
          <Result>
            {CompareResult.length > 0 ? <span>Resultado</span> : ''}
            {CompareResult.map((item, index) => (
              <li>
                <span >{item.type} - {item.description}</span>
                <span class="itemPrice">{formatPrice(item.price)}</span>
                <span class="itemPercent">{CompareResult.indexOf(item) == 0 ? 'Mais barato' : item.percentual.toFixed(2) + " %"}</span>
              </li>
            ))}
          </Result>
        </Container>
      </>
    );
  }
}
