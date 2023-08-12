const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { productos: [], categorias: [] };
	}
	componentDidMount() {

		client({ method: 'GET', path: '/api/productos' }).done(response => {
			this.setState({ productos: response.entity._embedded.instrumentos });
		});

		client({ method: 'GET', path: '/api/categorias' }).done(response => {
			this.setState({ categorias: response.entity._embedded.musicos });
		});

	}
	render() {
		return (
			<>
				<h1>GroWShop</h1>
				<Titulo entidad="Productos" emoji="🌿🍁🌿🌱" />
				<ProductoList productos={this.state.productos} />
				<Link to="/registrarProducto">Registrar Producto</Link>
				<Titulo entidad="Categorias" emoji="🌱🪴🌲" />
				<CategoriaList categorias={this.state.categorias} />
				<Link to="/registrarCategoria">Ingresa Categoria</Link>
			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<hr />
			Lista completa de {props.entidad.toLowerCase()}
		</>
	)
}


class ProductoList extends React.Component {
	render() {
		const productos = this.props.productos.map(producto =>
			<Producto key={producto._links.self.href} producto={producto} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Marca</th>
						<th>Acciones</th>
					</tr>
					{productos}
				</tbody>
			</table>
		)
	}
}
class CategoriaList extends React.Component {
	render() {
		const categorias = this.props.categorias.map(categoria =>
			<Categoria key={categoria._links.self.href} categoria={categoria} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Acciones</th>
					</tr>
					{categorias}
				</tbody>
			</table>
		)
	}
}

class Producto extends React.Component {
	render() {
		const id = this.props.producto._links.self.href.split("/").slice(-1)
		return (
			<tr>
				<td>{this.props.producto.nombre}</td>
				<td>{this.props.producto.marca}</td>
				<td>
					<Link to={"/listar-producto/" + id}>Ver</Link>
				</td>
			</tr>
		)
	}
}
class Categoria extends React.Component {
	render() {
		const id = this.props.categoria._links.self.href.split("/").slice(-1)

		return (
			<tr>
				<td>{this.props.categoria.nombre}</td>
				<td>
					<Link to={"/listar-categoria/" + id}>Ver</Link>
				</td>
			</tr>
		)
	}
}

module.exports = HomePage;