import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import './style.css'

function TemperatureChart({ forecasts }) {
  const apexdata = {
    series: [
      {
        name: 'High',
        data: [],
        weather: 'breezy'
      },
      {
        name: 'Low',
        data: []
      }
    ],

    options: {
      chart: {
        height: 350,
        type: 'line',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ['#77B6EA', '#545454'],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: 'Average High & Low Temperature',
        align: 'left'
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: [],
        title: {
          text: 'Week'
        },
        tooltip: {
          enabled: false
        }
      },
      tooltip: {
        theme: 'dark',
        custom: function ({ dataPointIndex, ctx, seriesIndex }, opts) {
          const title = forecasts.filter((item) => item.id === dataPointIndex)

          return (
            '<div>' +
            '<div class="customToolTipHeader">' +
            title[0].day +
            '-' +
            title[0].text +
            '</div>' +
            '<span class="customTooltip">' +
            'High-' +
            title[0].high +
            '~~ ' +
            'Low-' +
            title[0].low +
            '</span>' +
            '</div>'
          )
        }
      },
      yaxis: {
        title: {
          text: 'Temperature'
        },
        tooltip: {
          enabled: false
        },
        min: 10,
        max: 100
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    }
  }

  const [chartData, setChartData] = useState({})
  const getXaxisData = () => {
    const categories = []
    const highTemp = []
    const lowTemp = []

    forecasts?.forEach((item) => {
      categories.push(item.day)
      highTemp.push(item.high)
      lowTemp.push(item.low)
    })
    apexdata.options.xaxis.categories = categories
    apexdata.series = [
      {
        name: 'High',
        data: highTemp,
        weather: 'breezy'
      },
      {
        name: 'Low',
        data: lowTemp,
        weather: 'breezy'
      }
    ]
    setChartData(apexdata)
  }
  useEffect(() => {
    getXaxisData()
  }, [forecasts])

  return (
    <div>
      {chartData && chartData.options && (
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type='line'
          height={350}
        />
      )}
    </div>
  )
}

export default TemperatureChart
