import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/layouts/RootLayout'
import ErrorPage from './components/pages/ErrorPage'
import TodoApp from './components/pages/TodoApp'
import NotesApp from './components/pages/NotesApp'
import FinancesApp from './components/pages/FinancesApp'
import CalculatorApp from './components/pages/CalculatorApp'
import WeatherApp from './components/pages/WeatherApp'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
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
				element: <FinancesApp />,
			},
			{
				path: 'calculator',
				element: <CalculatorApp />,
			},
			{
				path: 'weather',
				element: <WeatherApp />,
			},
			{
				path: '*',
				element: <ErrorPage />,
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
