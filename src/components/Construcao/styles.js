import styled from 'styled-components';
import { buttonRadius } from '../GenericStyles/styles'

export const Container = styled.div`
display:  ${props => props.showComponent ? 'flex' : 'none'};


  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 150px;
  background: #333;
  /* position: absolute; */
  width: 100%;
  animation: display 2s ease-in;

  button{
    background: #222222;
    border-radius: ${buttonRadius};
  }
`;

