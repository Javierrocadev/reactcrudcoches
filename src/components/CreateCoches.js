import React, { Component } from 'react'
import HomeImg from '../components/Assets/Images/HomeImg.jpg'
import Global from './Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
export default class CreateCoches extends Component {
    cajaIdCoche = React.createRef()
    cajaMarca = React.createRef()
    cajaModelo = React.createRef()
    cajaConductor = React.createRef()
    cajaImagen = React.createRef()
    state = {
        imagen: 'https://static.motor.es/fotos-noticias/2015/10/min652x435/curiosidades-delorean-regreso-al-futuro-201523728_4.jpg',
        statusEnviado: false
    }
    handleImageChange = (e) => {
        e.preventDefault();
        const newImageUrl = this.cajaImagen.current.value;
        this.setState({ imagen: newImageUrl });
    }
    CreateCoches = (e) => {
        e.preventDefault()
        var idCoche = parseInt(this.cajaIdCoche.current.value)
        var marca = this.cajaMarca.current.value
        var modelo = this.cajaModelo.current.value
        var conductor = this.cajaConductor.current.value
        var imagen = this.cajaImagen.current.value
        var coche = {
            idcoche: idCoche,
            marca: marca,
            modelo: modelo,
            conductor: conductor,
            imagen: imagen
        }
        console.log(coche)
        var request = "api/Coches/InsertCoche"
        var url = Global.apicorecrudcoches + request
        console.log(url)
        axios.post(url, coche).then(response => {
            this.setState({
                statusEnviado: true
            })
        })
    }
    render() {

        if (this.state.statusEnviado == true) {
            return <Navigate to="/"></Navigate>
        }
        else {
            return (
                <div>
                    <form >
                        <label for="idCoche">ID del Coche:</label>
                        <input ref={this.cajaIdCoche} className='form-control' type="text" />

                        <label for="marca">Marca:</label>
                        <input ref={this.cajaMarca} className='form-control' type="text" />

                        <label for="modelo">Modelo:</label>
                        <input ref={this.cajaModelo} className='form-control' type="text" />

                        <label for="conductor">Conductor:</label>
                        <input ref={this.cajaConductor} className='form-control' type="text" />

                        <label for="imagen">URL de la Imagen:</label>
                        <input
                            onChange={this.handleImageChange}
                            ref={this.cajaImagen}
                            className='form-control'
                            type="url"
                        />
                        <input type='file' />
                        <h6>Preview</h6>
                        <img className='img-thumbnail' src={this.state.imagen} alt='cargada' />
                        <button onClick={this.CreateCoches} className='btn btn-secondary'>Create</button>
                    </form>
                </div>
            )
        }


    }
}
