import React, { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './components/Banner'
import { Tabs, Tab } from 'react-bootstrap'
import TemperatureChart from './components/TemperatureChart'
import MoreInfoCard from './components/MoreInfoCard'

function App() {
  const [weatherData, setWeatherData] = useState({})
  const [key, setKey] = useState('home')

  useEffect(() => {
    fetch('/weather.json')
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data)
      })
  }, [])

  const onChange = (key) => {
    setKey(key)
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-5 form-container glassMor'>
          <Banner
            location={weatherData.location}
            currentObservation={weatherData.current_observation}
            onChange={onChange}
            tab={key}
          />
        </div>
        <div className='col-md-7 weather-container'>
          <Tabs
            defaultActiveKey='home'
            id='controlled-tab-example'
            activeKey={key}
            className='mb-3'
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey='home' title='Home'>
              <div id='chart'>
                <TemperatureChart forecasts={weatherData.forecasts} />
              </div>
            </Tab>
            <Tab eventKey='more' title='More Weather info'>
              <MoreInfoCard
                location={weatherData.location}
                currentObservation={weatherData.current_observation}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default App
