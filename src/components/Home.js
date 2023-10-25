import React, { Component } from 'react'
import HomeImg from './Assets/Images/HomeImg.jpg'
import Global from './Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
export default class Home extends Component {
    state = {
        coches: [],
        statusLoad: false
    }
    LoadCoches = () => {
        var request = "api/coches"
        var url = Global.apicorecrudcoches + request
        axios.get(url).then(response => {
            this.setState({
                coches: response.data,
                statusLoad: true
            })
        })
    }
    componentDidMount = () => {
        this.LoadCoches()
    }
    render() {
        return (
            <div>
                <h1>home</h1>
                <img src={HomeImg} alt="Home" />
                {
                    this.state.statusLoad == true && (
                        <table className='table table-dark table-striped'>
                            <thead>
                                <tr>
                                    <th>id coche</th>
                                    <th>marca</th>
                                    <th>modelo</th>
                                    <th>conductor</th>
                                    <th>image</th>
                                    <th>Operaciones</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.coches.map((coche, index) => {
                                        return (
                                            <tr ref={index}>
                                                <td><p>{coche.idCoche}</p></td>
                                                <td><p>{coche.marca}</p></td>
                                                <td><p>{coche.modelo}</p></td>
                                                <td><p>{coche.conductor}</p></td>
                                                <td><img src={coche.imagen} className='img-thumbnail' /></td>
                                                <td>
                                                    <NavLink to={"update/" + coche.idCoche} className='btn btn-secondary'>UPDATE</NavLink>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
        )
    }
}
