import { useCallback } from 'react'

function useLocalStorage() {
	const getValue = useCallback(key => {
		const storageValue = localStorage.getItem(key)
		return JSON.parse(storageValue)
	}, [])

	const addValue = useCallback((key, newValue) => {
		window.localStorage.setItem(key, JSON.stringify(newValue))
	}, [])

	const removeValue = useCallback(key => {
		localStorage.removeItem(key)
	}, [])

	const editValue = useCallback((key, newValue) => {
		const currentValue = localStorage.getItem(key)
		const parsedValue = JSON.parse(currentValue)
		const finishValue = parsedValue.map(item => {
			if (item.id === newValue.id) {
				return { ...newValue }
			} else {
				return item
			}
		})
		localStorage.setItem(key, JSON.stringify(finishValue))
	}, [])

	return { getValue, addValue, removeValue, editValue }
}

export default useLocalStorage
