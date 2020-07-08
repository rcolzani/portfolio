import styled, { keyframes } from 'styled-components'
// import backgroundImage from '../../assests/images/background.jpg';

const transitionTime = '700ms'
// const maxWidth = '720px'
const backgroundtheme = '#121212';
const borderColor = "#333";
const borderRadiusButton = '5px';

let fontSizeTitle = '32px';
let fontSizeSubTitle = '18px';
let fontSizeRepoTitle = '20px';
let fontSizeRepoDescription = '14px';


export const BodyPage = styled.div`
background: ${backgroundtheme};
height: 100%;
 min-height: 100%;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to{
    transform: rotate(360deg)
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;

`
export const Profile = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
  align-items: center;

`

export const Title = styled.h1`
  font-size: ${fontSizeTitle};
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  transition: border-color ${transitionTime} linear;
  border-bottom: solid 2px ${props => props.colorRnd};
`;

export const Subtitle = styled.span`
  font-size: ${fontSizeSubTitle};
  max-width: 400px;
  margin-top: 40px;
  text-align: center;
`

export const PictureBorder = styled.div`
  display: flex;
  flex-shrink: 1;

  background-color: ${props => props.colorRnd} ;
  padding: 5px;
  border-radius: 50%;
  transition: background-color ${transitionTime} linear;
  margin: 25px;

  img{
    border-radius: 50%;
    padding: 1px;
    width: 300px;
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

  color: #fff;
  font-size: 40px;
  border-radius: ${borderRadiusButton};
  border: 1px solid ${borderColor};
  transition: background-color 350ms ease-out;
  &:hover{
    background: #333;
  }

  span{
    font-size: 18px;
    margin: 0;
  }
`;

export const RepositoryContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 30px;
max-width: 720px;
color: #fff;
width: 100%;

 > span{
margin-left: 15px;
 }

#loadingrepos{
  display: flex;
  justify-content: center;
  align-items:center;
  width: 100%;
  text-align: center;
  margin: 10px 0;

  svg{
    margin-left: 10px;
    animation: ${rotate} 2s linear infinite;
    }
}
`;

export const LoadingContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 300px;
text-align: center;
font-size: 18px;
`

export const RepositoryList = styled.ul`
list-style: none;

li  {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px ;
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
font-size: ${fontSizeRepoTitle};
margin-bottom:15px;

`

export const RepositoryDescription = styled.span`
font-size: ${fontSizeRepoDescription};
color: #fff;
overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`


export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px;
  background: transparent;

  >span{
    display: flex;
    align-items: center;

    svg {
      margin-left: 6px;
    }
  }
`

export const Links = styled.div`
  margin-top: 15px;

a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    border: solid 1px #333;
    border-radius: ${borderRadiusButton};
    font-size: 40px;
    padding: 15px;

    transition: background-color 350ms ease-out;
  &:hover{
    background: #333;
  }

    span{
      font-size: 16px;
    }
  }

`
