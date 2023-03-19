import { useCallback } from 'react'

function useLocalStorage() {
	const getValue = useCallback(key => {
		const storageValue = localStorage.getItem(key)
		return JSON.parse(storageValue)
	}, [])

	const addValue = useCallback((key, newValue) => {
		window.localStorage.setItem(key, JSON.stringify(newValue))
	}, [])

	const removeValue = key => {
		localStorage.removeItem(key)
	}

	const editValue = (key, newValue) => {
		const currentValue = localStorage.getItem(key)
		const updatedValue = [...currentValue, newValue]
		localStorage.setItem(key, JSON.stringify(updatedValue))
	}

	return { getValue, addValue, removeValue, editValue }
}

export default useLocalStorage
