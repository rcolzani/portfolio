import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 24px;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  transition: border-color 250ms linear;
  border-bottom: solid 2px ${props => props.fontcolor};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-grow: 1;
`
export const PictureBorder = styled.div`
  display: flex;
  flex-shrink: 1;

  background-color: ${props => props.fontcolor} ;
  padding: 5px;
  border-radius: 50%;
  transition: background-color 250ms linear;
  margin: 25px;

  img{
    border-radius: 50%;
    ${props => props.fontcolor}
    padding: 50px;
    width: 250px;
  }
`;

export const RepositoryList = styled.ul`
list-style: none;
margin-top: 30px;

li{
  padding: 15px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  a{
    text-decoration: none;
  }
}
`;
