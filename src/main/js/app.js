const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const HomePage = require('./pages/home');

const NuevoProductoPage = require('./pages/registrarProducto');
const VerProductoPage = require('./pages/listar-producto');

const NuevoCategoriaPage = require('./pages/registrarCategoria');
const VerCategoriaPage = require('./pages/listar-categoria');


const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	
	{ path: '/listar-producto/:id', element: <VerProductoPage /> },
	{ path: '/registrarProducto', element: <NuevoProductoPage /> },
	
	{ path: '/listar-categoria/:id', element: <VerCategoriaPage /> },
	{ path: '/registrarCategoria', element: <NuevoCategoriaPage /> },
])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react'))
