import React, { Component } from 'react';
import {
    MainBody, CountdownSpan, BodyPage, CountdownContainer, CountdownSpanDay,
    CountdownSpanHour, CountdownSpanMinute, CountdownSpanSecond,
    CloudPiece, AxisX1, AxisX2, AxisX3, AxisX4, AxisX5
} from './styles';

import backgroundImage from '../../assests/images/airplane.png';
import portugalFlag from '../../assests/images/portugalflag.svg';

export default class PortugalCountdown extends Component {
    state = {
        countdownDescription: "",
        countdownDays: 0,
        countdownHours: 0,
        countdownMinutes: 0,
        countdownSeconds: 0
    }

    async componentDidMount() {
        this.getCountdownCalculated();

        this.myInterval = setInterval(() => {
            this.setState({ countdownDescription: this.getCountdownCalculated() });
        }, 1000)
    }

    getCountdownCalculated() {
        const countDownDate = new Date("Feb 3, 2023 14:40:00").getTime();

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
            return "Estamos a caminho!!!"
        } else {
            this.setState({ countdownDays: days, countdownHours: hours, countdownMinutes: minutes, countdownSeconds: seconds })
        }
    }

    render() {
        const { countdownDays,
            countdownHours,
            countdownMinutes,
            countdownSeconds } = this.state;


        return (
            <>
                <BodyPage>
                    <AxisX1>
                        <img src={backgroundImage}></img>
                    </AxisX1>
                    <AxisX2>
                        <CloudPiece />
                    </AxisX2>
                    <AxisX3>
                        <CloudPiece />
                    </AxisX3>
                    <AxisX4>
                        <CloudPiece />
                    </AxisX4>
                    <AxisX5>
                        <CloudPiece />
                    </AxisX5>
                </BodyPage>
                <MainBody>
                    <CountdownContainer>
                        <img src={portugalFlag} width="150"></img>

                        <CountdownSpanDay>{countdownDays} dias</CountdownSpanDay>
                        <CountdownSpanHour>{countdownHours} horas</CountdownSpanHour>
                        <CountdownSpanMinute>{countdownMinutes} minutos</CountdownSpanMinute>
                        <CountdownSpanSecond>{countdownSeconds} segundos</CountdownSpanSecond>
                    </CountdownContainer>
                </MainBody>
            </>


        );
    }
}
