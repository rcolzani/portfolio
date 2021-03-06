import styled from 'styled-components'

const transitionTime = '700ms'

export const Title = styled.h1`
  font-size: 24px;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  transition: border-color ${transitionTime} linear;
  border-bottom: solid 2px ${props => props.colorRnd};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`
export const PictureBorder = styled.div`
  display: flex;
  flex-shrink: 1;

  background-color: ${props => props.colorRnd} ;
  padding: 5px;
  border-radius: 20%;
  transition: background-color ${transitionTime} linear;
  margin: 25px;

  img{
    border-radius: 20%;
    padding: 1px;
    width: 250px;
  }
`;

export const SocialMedias = styled.div`
  display:flex;
  justify-content: space-between;
  margin-top: 30px;
`
export const SocialMedia = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  width: 120px;
  padding: 15px;

  text-decoration: none;
  color: #fff;
  font-size: 40px;
  border-radius: 5px;

  &:hover{
    background: #333;
  }

  span{
    font-size: 18px;
    margin: 0 10px;
  }
`;


export const RepositoryList = styled.ul`
list-style: none;
margin-top: 30px;
max-width: 720px;
color: #fff;

li{

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px ;
  margin: 15px;
  background: #333;
  border-bottom: 2px solid  ${props => props.colorRnd};

  border-radius: 5px;
  transition: border-color ${transitionTime} linear;

  a{
    text-decoration: none;

  }
}
`;

export const RepositoryTitle = styled.span`
font-size: 20px;
margin-bottom:15px;
`

export const RepositoryDescription = styled.span`
font-size: 14px;`
