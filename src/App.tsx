import { useState ,useEffect} from 'react'
import styled from 'styled-components';
import axios from 'axios';
// import Form from './components/Form/Form'
// import Card from './components/Card/Card';
// import Header from './components/Header/Header'
// import DataHolder from './components/DataHolder/DataHolder';
import {Card, Form,Header,DataHolder} from './components'
const key = import.meta.env.VITE_API_KEY

// console.log(key)

const StyledDiv = styled.main`
border: 2px dashed black;
margin: 0px 400px;
`
const initialState ={
  "coord": {
    "lon": 72.8479,
    "lat": 19.0144
  },
  "weather": [
    {
      "id": 711,
      "main": "Haze",
      "description": "haze",
      "icon": "50d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 28,
    "feels_like": 28,
    "temp_min": 28,
    "temp_max": 28,
    "pressure": 1005,
    "humidity": 88
  },
  "visibility": 2500,
  "wind": {
    "speed": 14,
    "deg": 270
  },
  "clouds": {
    "all": 20
  },
  "dt": 1678255738,
  "sys": {
    "type": 1,
    "id": 9052,
    "country": "IN",
    "sunrise": 1678238591,
    "sunset": 1678281371
  },
  "timezone": 19800,
  "id": 1275339,
  "name": "Mumbai",
  "cod": 200
}
function App() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [result,setResult] = useState(initialState)
  const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${key}`
  // const baseURL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${key}`
  const apiCallOnSubmit = async () => {
    await axios.get(baseURL).then((res:any) => setResult(res.data))
    // setSearchTerm('')
  }
  let {name,visibility,dt,main:{feels_like,humidity,pressure,temp_max,temp_min,temp},weather:[{description}],sys:{country,sunrise,sunset},wind:{speed,deg}} = result
// useEffect(() => {apiCallOnSubmit()},[])
  return (
    <StyledDiv>
      <Header title='Weather app'/>
      <Form searchTerm={searchTerm} setSearchTerm={setSearchTerm} apiCallOnSubmit={apiCallOnSubmit}/>
      <Card name={name} country={country} date={dt} description={description} temp={temp}/>
      <DataHolder visibility={visibility} high={temp_max} low={temp_min} wind={speed} direction={deg} humidity={humidity} pressure={pressure} sunrise={sunrise} sunset={sunset}/>
    </StyledDiv>
  )
}

export default App
