import './style.css'

function MoreInfoCard({ location, currentObservation }) {
  if (!location) {
    return <>Loading....</>
  }
  return (
    <div>
      <p className='weather_key location'>
        {location.city}, {location.region}
      </p>
      <p className='weather_key temperature'>
        {currentObservation.condition.temperature}°C
      </p>

      <p className='weather_key min_max_temperature'>
        Pressure : {currentObservation.atmosphere.pressure}
      </p>

      <p className='weather_key humidity'>
        Humidity : {currentObservation.atmosphere.humidity} %
      </p>

      <p className='weather_key humidity'>
        Sun Rise : {currentObservation.astronomy.sunrise} <br />
        Sun Set : {currentObservation.astronomy.sunset}
      </p>

      <p className='weather_key wind_speed'>
        Wind Speed : {currentObservation.wind.speed} m/s
      </p>
    </div>
  )
}

export default MoreInfoCard
