import styled, { keyframes } from 'styled-components'

export const MainBody = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width: 100%;
 height: 100%;
 min-height: 100%;
`

export const BodyPage = styled.div`
  bottom: 0;
	left: 0;
	position: fixed;
	right: 0;
	top: 0;
	z-index: -1;
	background: #66d1ff;
`

export const CountdownContainer = styled.div`
font-family: Arial, Helvetica, sans-serif;
color: #363636;
font-weight: bold;
    height: 350px;
    display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
background-image: url('https://beportugal.com/wp-content/uploads/2019/02/portugal-flag.jpg');
`

export const CountdownSpanDay = styled.span`
    font-size: 10vh;
`
export const CountdownSpanHour = styled.span`
    font-size: 6vh;
`
export const CountdownSpanMinute = styled.span`
    font-size: 4vh;
`
export const CountdownSpanSecond = styled.span`
    font-size: 2vh;
`

export const CountdownSpan = styled.span`
    color: #fff;
`



const animateCloud = keyframes`
    0% {
        margin-left: -1000px;
    }
    100% {
        margin-left: 100%;
    }
`

/* ANIMATIONS */

export const AxisX1 = styled.div`
animation: ${animateCloud} 5s linear infinite;
transform: scale(0.65);
`

export const AxisX2 = styled.div`
        animation: ${animateCloud} 7s linear infinite;
transform: scale(0.3);
`

export const AxisX3 = styled.div`
    animation: ${animateCloud} 15s linear infinite;
    transform: scale(0.5);
    `

export const AxisX4 = styled.div`
    animation: ${animateCloud} 9s linear infinite;
    transform: scale(0.4);
    `

export const AxisX5 = styled.div`
    animation: ${animateCloud} 16s linear infinite;
    transform: scale(0.55);
`

/* OBJECTS */

export const CloudPiece = styled.div`
        background: #fff;
        background: linear-gradient(top, #fff 5%, #f1f1f1 100%);
        filter: progid: DXImageTransform.Microsoft.gradient(startColorstr = '#fff', endColorstr = '#f1f1f1', GradientType = 0);

        border-radius: 100px;

        box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);

        height: 120px;
        position: relative;
        width: 350px;

        &:after, &:before{
            background: #fff;
            content: '';
            position: absolute;
            z-indeX: -1;
        }

        &:after{
                border-radius: 100px;
                height: 100px;
                left: 50px;
                top: -50px;
                width: 100px;
            }

        &:before{
            border-radius: 200px;
            width: 180px;
            height: 180px;
            right: 50px;
            top: -90px;
        }
`
