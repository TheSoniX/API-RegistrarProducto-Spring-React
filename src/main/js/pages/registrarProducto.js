const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState} = require('react');
const client = require('../client');


const NuevoProductoPage = () => {
     
    const [nombre, setNombre] = useState('')
    const [marca, setMarca] = useState('')
    const [cantidad, setCantidad] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/productos',
            entity: {nombre: nombre, marca: marca, cantidad: cantidad},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
            window.location = '/';
        })
    }

    return (
        <>
        <h1>Registrar Producto</h1>
        <form onSubmit={handleSubmit}>
            <label>Nombre</label> <br />
            <input type='text' id='nombre' name='nombre' onChange={e=>setNombre(e.target.value)}/> <br />
            <label>Marca</label> <br />
            <input type='text' id='marca' name='marca' onChange={e=>setMarca(e.target.value)}/> <br />
            <label>Cantidad</label> <br />
            <input type='text' id='cantidad' name='cantidad' onChange={e=>setCantidad(e.target.value)}/> <br />
            <input type='submit' value="Nuevo Producto" />
        </form>
        <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoProductoPage;