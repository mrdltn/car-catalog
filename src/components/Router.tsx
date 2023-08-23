import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./screens/home/Home"
import CarDetail from "./screens/home/car-detail/CarDetail"


const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path='/' />
            <Route element={<CarDetail/>} path='/car/:id' />

            <Route path='*' element={<div>Page not found</div>} />
        </Routes>
    </BrowserRouter>
}

export default Router