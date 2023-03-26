import { useState, useCallback } from 'react'
import useLocalStorage from './useLocalStorage'

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '&appid=1503629039d232e2a67ca14492858f91'
const API_UNITS = '&units=metric'

const useApi = () => {
	const [data, setData] = useState({})
	const [error, setError] = useState('')
	const { addValue } = useLocalStorage()

	const getApiData = useCallback(
		async cityName => {
			const API_URL = API_LINK + cityName + API_KEY + API_UNITS
			try {
				const response = await fetch(API_URL)
				const jsonData = await response.json()

				setData({
					cityName,
					cityTemp: jsonData.main.temp.toFixed(),
					cityPress: jsonData.main.pressure,
					cityHum: jsonData.main.humidity,
					citySunrise: jsonData.sys.sunrise * 1000,
					citySunset: jsonData.sys.sunset * 1000,
					cityWeatherID: jsonData.weather[0].id,
					cityWeatherDesc: jsonData.weather[0].main,
					cityWindSpeed: jsonData.wind.speed.toFixed(1),
					cityWindDeg: jsonData.wind.deg,
					cityTimezoneSeconds: jsonData.timezone * 1000,
				})
				setError('')
				addValue('weather', cityName)
			} catch (err) {
				setError('No cities with this name')
			}
		},
		[addValue]
	)

	return { data, error, getApiData }
}

export default useApi
