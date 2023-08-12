const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState} = require('react');
const client = require('../client');

const VerCategoriaPage = () => {

    let { id } = useParams();
    const [categoria, setCategoria] = useState({});

    client({
        method: 'GET',
        path: '/api/categorias/' + id
    }).done(response=>setCategoria(response.entity))

    return (
        <>
            <h1> Lista de Categoria</h1>
            <table>
                <tr>
                    <th>Categoria</th>
                    <td>{categoria.nombre}</td>
                </tr>
            </table>
            < Link to="/">Regresar</Link>
        </>
    )
}

module.exports = VerCategoriaPage;