import React, { useEffect, useState } from 'react'
// import Image from 'react-bootstrap/Image'
import { Image, Card, Button } from 'react-bootstrap'
import './style.css'

function Banner({ location, currentObservation, onChange, tab }) {
  if (location == null || currentObservation == null) {
    return <>Loading...</>
  }
  return (
    <form className='form-container'>
      {tab != 'more' ? (
        <div
          className='weather_info_container'
          onClick={() => onChange('more')}
        >
          <p className='weather_key location'>
            {location && location.city},{location.region},{location.country}
          </p>
          <h1></h1>
          <p className='weather_key'>
            Current Weather :{' '}
            {currentObservation && currentObservation.condition.text}
          </p>
          <p className='weather_key'>
            Current Tempertarue:{' '}
            {currentObservation && currentObservation.condition.temperature}°C
          </p>
          <p className='weather_key'>
            High: {currentObservation && currentObservation.condition.high}°C
          </p>
          <p className='weather_key'>
            Low: {currentObservation && currentObservation.condition.low}°C
          </p>
        </div>
      ) : (
        <div className='location '>
          <blockquote>
            “Who cares about the clouds when we're together? Just sing a song
            and bring the sunny weather”.
          </blockquote>
        </div>
      )}
    </form>
  )
}

export default Banner
