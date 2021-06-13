import './App.css';
import axios from 'axios'
import {state,useState,useEffect} from 'react'
import TodayTemperature from './TodayTemperature'
import ToggleMenu from './ToggleMenu';
import Graph from './Graph'
import styled from 'styled-components'
function App() {

  const [chartData, setChartData] = useState([])

  const [weather, setWeather] = useState('');
  const [temp, setTemp] = useState(0);
  const [tempMin, setTempMin] = useState(0);
  const [tempMax, setTempMax] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [sunSetTiming, setSunSetTiming] = useState(0);
  const [sunRiseTime, setSunRiseTime] = useState(0);


  function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = hour + ':' + min + ':' + sec ;
    return time;
  }


  const fetchWeather =async()=>{
    try{
      const res =await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=12.9899&lon=77.6030&appid=c3eff23bb4f30967ac47a8d6407960fe&units=metric');
      
      setTemp(res.data.main.temp)
      setWeather(res.data.weather[0].main)
      setTempMin (res.data.main.temp_min) 
      setTempMax (res.data.main.temp_max) 
      setWindSpeed (res.data.wind.speed)
      setHumidity(res.data.main.humidity) 
      setPressure (res.data.main.pressure) 
      setSunSetTiming(res.data.sys.sunset)
      setSunRiseTime(res.data.sys.sunrise)
    }
    catch(err){
      console.error(err);
    }
  }
  useEffect(() => {
    fetchWeather();

  },[])

  

  const fetchWeatherChartData =async()=>{
    try{
      const res =await axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=12.9716&lon=77.5946&exclude=minutely,hourly&units=metric&appid=c3eff23bb4f30967ac47a8d6407960fe');
      console.log()
      setChartData(res.data.daily)
    }
    catch(err){
      console.error(err);
    }
  }
  useEffect(() => {
    fetchWeatherChartData();

  },[])



 
  return (
    <Container>
      <Title>Weather App</Title>
      <AreaName>Bangalore,India</AreaName>
      <TodayTemperature weather={weather} temp={temp} tempMin={tempMin} tempMax={tempMax}/>
      <ToggleMenu>
        {({on,toggle})=>(
          <ToggleFunction>
            <ToggleButton  onClick={toggle}>Show/Hide</ToggleButton>
            {on && 
            <ToggleContainer>
              <LineOne>
                <WindSpeed>Wind speed<span>{windSpeed} km/h</span>
                  </WindSpeed>
                <Humidity>Humidity<span>{humidity}%</span></Humidity>
              </LineOne>
              <LineTwo>
                <Pressure>Pressure<span>{pressure} hPa</span></Pressure>
                <SunRiseAndSunSet>
                  <Heading>Sun Rise and Sun Set Timings</Heading>
                  <Timing>
                    <SunRiseTime>Sun Rise<span>{timeConverter(sunRiseTime)}</span></SunRiseTime>
                    <SunSetTime>Sun Set<span>{timeConverter(sunSetTiming)}</span></SunSetTime>
                  </Timing>
                </SunRiseAndSunSet>
              </LineTwo>
            </ToggleContainer>
            }
            
          </ToggleFunction>
        )}
      </ToggleMenu>
      <GraphContainer><Graph chartData={chartData}/></GraphContainer>
      
    </Container>
  );
}

export default App;

const Container=styled.div`
  display:flex;
  background-color:#2A2A2A;
  align-items: center;
  flex-direction: column;
  height:1200px;
`

const Title=styled.h1`
  color:#979797;
`
const AreaName=styled.h1`
  margin-top:30px;
  color:#979797;
`
const ToggleFunction=styled.div`
  /* color:#979797; */
  
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
`
const GraphContainer=styled.div`
  /* color:#979797; */
  margin-top: 90px;
`

const ToggleButton=styled.button`
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  background-color: #2a2a2a;
  border: 5px solid #313131;
  text-transform: uppercase;
  font-weight: 500;
  color:#969696;
  font-size: 18px;
  border-radius:40px;
  box-shadow:-7px -7px 15px rgb(42 42 42 / 75%), 7px 7px 15px rgb(10 8 8 / 75%), inset 2px 2px 4px rgb(43 37 37 / 50%), inset 2px 2px 8px rgb(26 22 22 / 15%);

`
const ToggleContainer=styled.div`
  height:160px;
  display:flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
`
const LineOne=styled.div`
  display:flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
`
const LineTwo=styled.div`
  display:flex;
  align-content: stretch;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;

`
const WindSpeed=styled.h2`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 263px;
  font-size: 18px;
`
const Humidity=styled.h2`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
`
const Pressure=styled.h2`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 192px;
  font-size: 18px;
`
const SunRiseAndSunSet=styled.h2`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: -100px;
  font-size: 18px;
`
const SunRiseTime=styled.h2`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 50px;
  font-size: 18px;

`
const SunSetTime=styled.h2`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
`
const Heading=styled.h2`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
`

const Timing=styled.h2`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-size: 18px;
`