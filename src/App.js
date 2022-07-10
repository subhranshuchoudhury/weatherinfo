// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import Card from './WeatherCard/Card';
import './App.css';


function App() {
  const [inputBox, setinputBox] = useState("kendrapara");
  const [apiData, setapiData] = useState({});

  const fetchData = async () => {
    try {

      let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputBox}&units=metric&appid=ac244764e38460bdd143f804ed1840f8`;
      const res = await fetch(url);
      const data = await res.json();

      //destructure object
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      const { name } = data;
      const { country } = data.sys;
      const { main: weatherMood, description } = data.weather[0];


      //gather them in a object
      const weatherInfo = { temp, name, weatherMood, description, country, speed, humidity };

      setapiData(weatherInfo);

    } catch (error) {
      console.log(error);

    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { fetchData() }, []);
  return (
    <div className='mainContainer'>
      <div className="App">
        <input onChange={(e) => setinputBox(e.target.value)} value={inputBox} placeholder='Enter city name..'></input>
        <button className="button-24" onClick={fetchData}>Search</button>
      </div>

      <Card apiData={apiData} />
      <br></br>
      <p>@subhranshu {new Date().getFullYear()}</p>
    </div>
  );
}

export default App;
