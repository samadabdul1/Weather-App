import React from 'react'
import styled from 'styled-components'
import 'weather-icons/css/weather-icons-wind.css'
import Icon from './Icon'

function TodayTemperature({weather,temp,tempMin,tempMax}) {
    
    return (
        <Container>
            <PresentTemperatureAndWeather>
                <Icon condition={weather}/>
                <Weather>{weather}</Weather>
                <PresentTemperature>{temp}&deg;C</PresentTemperature>
            </PresentTemperatureAndWeather>
            <TodayHighAndLowTemperature>
                <TodayLowTemperature>Low:{tempMin}&deg;C</TodayLowTemperature>
                <TodayHighTemperature>High:{tempMax}&deg;C</TodayHighTemperature>
            </TodayHighAndLowTemperature>
        </Container>
    )
}

export default TodayTemperature
const Container=styled.div`
    // border:2px solid black;
    margin:100px;
    width:300px;
    height:200px;
    border-radius:30px;
    display:flex;
    background-color:#2A2A2A;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Weather = styled.h2`

`
const PresentTemperatureAndWeather = styled.div`
    display:flex;
    background-color:#ccc;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom:20px;
`
const PresentTemperature = styled.h2`
    margin-top:5px;
    font-size:50px;
`
const TodayWeather = styled.h2`
    
`
const TodayHighAndLowTemperature = styled.div`
  display:flex;
  background-color:#2A2A2A;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  margin:10px;
  @media screen and (max-width: 550px)
    {
    display:flex;
    background-color:#2A2A2A;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* margin:10px; */
    }
`
const TodayLowTemperature= styled.h2`
    margin-right:40px;
    font-size:40px;
    @media screen and (max-width: 550px)
    {
        margin-right:-25px;
        font-size:40px;
    }
    

`
const TodayHighTemperature = styled.h2`
    margin-left:40px;
    font-size:40px;

`
