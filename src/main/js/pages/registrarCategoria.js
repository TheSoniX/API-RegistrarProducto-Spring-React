const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState} = require('react');
const client = require('../client');

const NuevoCategoriaPage = () => {
     
    const [nombre, setNombre] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/categorias',
            entity: {nombre: nombre},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
            window.location = '/';
        })
    }

    return (
        <>
        <h1>Registrar Categoria</h1>
        <form onSubmit={handleSubmit}>
            <label>Nombre</label> <br />
            <input type='text' id='nombre' name='nombre' onChange={e=>setNombre(e.target.value)}/> <br />
            <input type='submit' value="Registrar Categoria" />
        </form>
        <Link to="/">Regresar</Link>
        </>
    )
}

module.exports = NuevoCategoriaPage;