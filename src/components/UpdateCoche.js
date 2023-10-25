import React, { Component } from 'react'
import HomeImg from '../components/Assets/Images/HomeImg.jpg'
import Global from './Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
export default class UpdateCoche extends Component {
    state = {
        imagen: 'https://static.motor.es/fotos-noticias/2015/10/min652x435/curiosidades-delorean-regreso-al-futuro-201523728_4.jpg',
        statusEnviado: false,
        coche: {}
    }
    cajaImagen = React.createRef()
    handleImageChange = (e) => {
        e.preventDefault();
        const newImageUrl = this.cajaImagen.current.value;
        this.setState({ imagen: newImageUrl });
    }
    loadCoche = () => {
        var request = "api/Coches/FindCoche/" + this.props.idcoches
        var url = Global.apicorecrudcoches + request
        console.log(url)
        axios.get(url).then(response => {
            console.log(response.data)
            this.setState({
                coche: response.data,
                statusEnviado: true
            })
        })
    }
    componentDidMount = () => {
        this.loadCoche()
    }
    render() {
        return (
            <div>UpdateCoche{this.props.idcoches}

                <form >
                    <label for="idCoche">ID del Coche:</label>
                    <input defaultValue={this.state.coche.idCoche} ref={this.cajaIdCoche} className='form-control' type="text" disabled />

                    <label for="marca">Marca:</label>
                    <input defaultValue={this.state.coche.marca} ref={this.cajaMarca} className='form-control' type="text" />

                    <label for="modelo">Modelo:</label>
                    <input defaultValue={this.state.coche.modelo} ref={this.cajaModelo} className='form-control' type="text" />

                    <label for="conductor">Conductor:</label>
                    <input defaultValue={this.state.coche.conductor} ref={this.cajaConductor} className='form-control' type="text" />

                    <label for="imagen">URL de la Imagen:</label>
                    <input
                        onChange={this.handleImageChange}
                        defaultValue={this.state.coche.imagen} ref={this.cajaImagen}
                        className='form-control'
                        type="url"
                    />
                    <input type='file' />
                    <h6>Preview</h6>
                    <img className='img-thumbnail' src={this.state.imagen} alt='cargada' />
                    <button onClick={this.CreateCoches} className='btn btn-secondary'>Create</button>
                </form>
            </div >
        )
    }
}
