import React from 'react'
import styled from 'styled-components'
const Icon =props =>{
    const Icon=styled.img`
        width:40%;
    `;
  var icon = "";
  console.log(props.condition)
  switch (props.condition) {
    case "Clouds":
      icon = 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-512.png';
      break;
    case "Clear":
      icon = 'https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-sunny-512.png';
      break;
    case "Haze":
      icon = `https://cdn3.iconfinder.com/data/icons/weather-essential/48/v-04-128.png`;
      break;
    case "Hail":
      icon = `https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-54-128.png`;
      break;
    case "Fog":
      icon = `https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-27-128.png`;
      break;
    case "Tornado":
      icon = `https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-29-128.png`;
      break;
    case "Dust":
      icon = `https://cdn1.iconfinder.com/data/icons/weather-colored-outline/50/Weather_Colored-Outline-14-128.png`;
      break;
    case "Mist":
      icon = `https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_30-128.png`;
      break;
    case "Snow":
      icon = `https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Light_Snow-128.png`;
      break;
    case "Rain":
      icon = `https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Heavy_Rain-128.png`;
      break;
    case "Drizzle":
      icon = `https://cdn3.iconfinder.com/data/icons/weather-610/64/weather_drizzle_rain_cloud-128.png`;
      break;
    case "Thunderstorm":
      icon = `https://cdn1.iconfinder.com/data/icons/weather-281/64/thunder-128.png`;
      break;
    default:
      icon = `https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-sunny-512.png`;
      break;
  }
  return<Icon src={icon} alt="Weather Icon"/>
}

export default Icon
