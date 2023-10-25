import React, { Component } from 'react'
//imports
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
//import components
import MenuCoches from './MenuCoches'
import Home from './Home'
import CreateCoches from './CreateCoches'
import UpdateCoche from './UpdateCoche'
export default class Router extends Component {
    render() {
        function UpdateCocheElement() {
            var { idcoches } = useParams()
            return <UpdateCoche idcoches={idcoches} />
        }
        return (
            <div>
                <BrowserRouter>
                    <MenuCoches />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/create' element={<CreateCoches />} />
                        <Route path='/update/:idcoches' element={<UpdateCocheElement />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}
