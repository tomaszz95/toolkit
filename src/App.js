import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/layouts/RootLayout'
import ErrorPage from './components/pages/ErrorPage'
import TodoApp from './components/pages/TodoApp'
import NotesApp from './components/pages/NotesApp'
import MoneyApp from './components/pages/MoneyApp'
import CalculatorApp from './components/pages/CalculatorApp'
import WeatherApp from './components/pages/WeatherApp'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <TodoApp /> },
			{
				path: 'todo',
				element: <TodoApp />,
			},
			{
				path: 'notes',
				element: <NotesApp />,
			},
			{
				path: 'finance',
				element: <MoneyApp />,
			},
			{
				path: 'calculator',
				element: <CalculatorApp />,
			},
			{
				path: 'weather',
				element: <WeatherApp />,
			},
		],
	},
])

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
