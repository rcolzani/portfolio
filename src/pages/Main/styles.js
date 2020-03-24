import styled from 'styled-components'

const transitionTime = '700ms'
const maxWidth = '720px'
const backgroundtheme = '#121212';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

`
export const Title = styled.h1`
  font-size: 24px;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  transition: border-color ${transitionTime} linear;
  border-bottom: solid 2px ${props => props.colorRnd};
`;

export const Subtitle = styled.span`
  font-size: 14px;
  max-width: 400px;
  color: #fff;
  margin-top: 10px;
  text-align: center;
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
    width: 200px;
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
  width: 130px;
  padding: 15px;

  text-decoration: none;
  color: #fff;
  font-size: 40px;
  border-radius: 5px;
  transition: background-color 1s ease-out;
  border: 1px solid #333;

  &:hover{
    background: #333;
  }

  span{
    font-size: 18px;
    margin: 0;
  }
`;

export const RepositoryContainer = styled.div`
margin-top: 30px;
max-width: 720px;
color: #fff;

 > span{
margin-left: 15px;
 }
`;

export const RepositoryList = styled.ul`
list-style: none;

li  {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px ;
  margin: 15px;
  background: #333;
  border-bottom: 2px solid  ${props => props.colorRnd};

  border-radius: 5px;
  transition: border-color ${transitionTime} linear;

  @media (max-width: 768px) {
    flex-direction: column;

    a{
      margin-top: 10px;
    }
  }

  a{
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: #fff;
      margin-left: 20px;
      background: ${backgroundtheme};
      padding: 10px;
      border-radius: 5px;
      min-width: 110px;

      *{
        font-size: 25px;
      }


  }
}
`;

export const RepositoryInfos = styled.div`
   display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  /* justify-content: left; */
  width: 100%;

`

export const RepositoryTitle = styled.span`
font-size: 20px;
margin-bottom:15px;

`

export const RepositoryDescription = styled.span`
font-size: 14px;`
