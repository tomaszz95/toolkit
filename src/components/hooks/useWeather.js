import { useCallback } from 'react'

function useLocalStorage() {
	const setProperIcon = useCallback(id => {
		let weatherImg
		if (id >= 200 && id < 300) {
			weatherImg = './assets/thunderstorm.png'
		} else if (id >= 300 && id < 400) {
			weatherImg = './assets/drizzle.png'
		} else if (id >= 500 && id < 600) {
			weatherImg = './assets/rain.png'
		} else if (id >= 600 && id < 700) {
			weatherImg = './assets/ice.png'
		} else if (id >= 700 && id < 800) {
			weatherImg = '../assets/fog.png'
		} else if (id === 800) {
			weatherImg = './assets/sun.png'
		} else if (id > 800 && id < 900) {
			weatherImg = './assets/cloud.png'
		} else {
			weatherImg = './assets/unknown.png'
		}
		return weatherImg
	}, [])

	const setProperLabel = useCallback(city => {
		if (city) {
			const bigLetters = city
				.split(' ')
				.map(cityName => (cityName = cityName.charAt(0).toUpperCase() + cityName.substring(1).toLowerCase()))
				.join(' ')
			return bigLetters
		}
	}, [])

	const setProperTimer = useCallback(time => {
		if (time === undefined) return
		const nowTime = new Date()
		const nowTimeMs = nowTime.getTime()
		const currentTimeInCity = new Date(nowTimeMs + time - 7200000)

		const nowHours =
			currentTimeInCity.getHours() < 10 ? `0${currentTimeInCity.getHours()}` : currentTimeInCity.getHours()
		const nowMinutes =
			currentTimeInCity.getMinutes() < 10 ? `0${currentTimeInCity.getMinutes()}` : currentTimeInCity.getMinutes()
		const nowSeconds =
			currentTimeInCity.getSeconds() < 10 ? `0${currentTimeInCity.getSeconds()}` : currentTimeInCity.getSeconds()
		const properTime = `${nowHours}:${nowMinutes}:${nowSeconds}`

		return properTime
	}, [])

	const setSunriseAndSunset = (sunrise, sunset, timezone) => {
		const sunriseDate = new Date(sunrise + timezone - 7200000)
		const sunriseHours = sunriseDate.getHours() < 10 ? `0${sunriseDate.getHours()}` : sunriseDate.getHours()
		const sunriseMinutes = sunriseDate.getMinutes() < 10 ? `0${sunriseDate.getMinutes()}` : sunriseDate.getMinutes()
		const sunriseSeconds = sunriseDate.getSeconds() < 10 ? `0${sunriseDate.getSeconds()}` : sunriseDate.getSeconds()

		const sunsetDate = new Date(sunset + timezone - 3600000)
		const sunsetHours = sunsetDate.getHours() < 10 ? `0${sunsetDate.getHours()}` : sunsetDate.getHours()
		const sunsetMinutes = sunsetDate.getMinutes() < 10 ? `0${sunsetDate.getMinutes()}` : sunsetDate.getMinutes()
		const sunsetSeconds = sunsetDate.getSeconds() < 10 ? `0${sunsetDate.getSeconds()}` : sunsetDate.getSeconds()

		const sunriseH = `${sunriseHours}:${sunriseMinutes}:${sunriseSeconds}`
		const sunsetH = `${sunsetHours}:${sunsetMinutes}:${sunsetSeconds}`

		return {
			sunriseH,
			sunsetH,
		}
	}
	return { setProperIcon, setProperLabel, setProperTimer, setSunriseAndSunset }
}

export default useLocalStorage
