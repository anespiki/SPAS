import React from "react";
import About from './pages/About'
import Panamera from "./pages/Panamera"
import A8 from "./pages/A8"
import R8 from "./pages/R8"
import Home from "./pages/Home"
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App(){
    return(
        
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/panamera' element={<Panamera/>}/>
            <Route path='/R8' element={<R8/>}/>
            <Route path='/A8' element={<A8/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App