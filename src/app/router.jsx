import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../components/Home/Home"
import CartContent from "../components/CartContent/CartContent"
import DataProvider from "../components/Context/DataContext"



const Router = () => {
    return (
        <BrowserRouter>
            <DataProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<CartContent />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </DataProvider>
        </BrowserRouter>
    )
}

export default Router