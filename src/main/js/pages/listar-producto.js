const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState} = require('react');
const client = require('../client');

const VerProductoPage = () => {

    let { id } = useParams();
    const [producto, setProducto] = useState({});

    client({
        method: 'GET',
        path: '/api/productos' + id
    }).done(Response=>setProducto(response.entity))

    return(
        <>
            <h1>Lista de Productos</h1>
            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{producto.nombre}</td>
                </tr>
                <tr>
                    <th>Marca</th>
                    <td>{producto.marca}</td>
                </tr>
                <tr>
                    <th>Cantidad</th>
                    <td>{producto.cantidad}</td>
                </tr>
            </table>
        </>
    )
}

module.exports = VerProductoPage;