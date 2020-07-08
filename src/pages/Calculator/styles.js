import styled from "styled-components";

const background2 = "#262626";
const fontcolor1 = "#262626";
const fontcolor2 = "#fff";
const borderButton = "#7159c1"


export const Container = styled.div`
  background: #fff;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
  color: ${fontcolor1};
  padding: 15px;
  border-radius: 4px;

  @media (max-width: 768px) {
    margin: 10px;
  }

  h1{
    text-align: center;
    margin-top: 20px;
  }

  > span{
    text-align: center;
    font-size: 16px;
  }
`;

export const Subtitulo = styled.span`
    /* display: ${props => props.mostrar ? '' : 'none'}; */
    font-size: 16px;
    max-width: 600px;
    text-align: center;
    margin-bottom: 40px;
    transition: all 1s ease-in;

    > span{
      font-size: 26px;
    }
`

export const Botoes = styled.div`
  display: flex;
  justify-content:center;
  flex-wrap: wrap;
  max-width: 500px;
  margin-top: 10px;
  margin-bottom: 30px;
  border-bottom: 1px solid #262626;

  button{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    margin: 5px;
    border: 1px solid ${borderButton};
    border-radius: 5px;
    color: ${fontcolor2};
    background: ${background2};
    font-size: 20px;
    transition: background-color 350ms ease-out;
  &:hover{
    background: transparent;
    color: ${fontcolor1};
  }

  span{
    font-size: 14px;
  }
  }
`

export const CustomSize = styled.div`
display: flex;
align-items: center;
margin: 10px;
input {
    flex: 1;
    border: 1px solid #eee;
    padding: 5px 5px;
    margin-left: 5px;
    width: 80px;
    border-radius: 4px;
    font-size: 16px;
}

button{  padding: 8px;
    margin: 5px;
    border: 1px solid ${borderButton};
    border-radius: 5px;
    font-size: 14px;
    color: ${fontcolor2};
    background: ${background2};

    &:hover{
    background: transparent;
    color: ${fontcolor1};
  }
}

`
export const ListaItens = styled.div`
 display:flex;
 justify-content: space-between;
 flex-wrap: wrap;
 color: #262626;
 margin-top: 3px;
`

export const ListaItem = styled.div`
display: flex;
flex-direction: column;
background: #fff;
padding: 10px;
border-radius: 4px;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);
margin: 2px;
max-width:150px;

#itemDescription{
 font-size: 18px;

 >span{
   font-size: 14px;
 }
}

input {
     width: 60%;
    border: 2px solid #eee;
    padding: 10px 0px;
    margin: 10px 0;
    border-radius: 4px;
    font-size: 16px;

  }

`
export const Result = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 450px;
  width: 100%;
  margin-top: 25px;


  li{
    display: flex;
    flex:1;
    width: 100%;
    justify-content: space-between;
    margin-top:10px;

    border-bottom: 1px solid #262626;

      > span{
        flex: 1 1 0px;
      }

      .itemPrice{
        text-align:center;
      }

      .itemPercent{
        text-align: right;
      }
  }

`
