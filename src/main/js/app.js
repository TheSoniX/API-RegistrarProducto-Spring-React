const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const HomePage = require('./pages/home');
const NuevoMusicoPage = require('./pages/nuevo-musico');

const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/nuevo-musico', element: <NuevoMusicoPage /> },
])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react'))
