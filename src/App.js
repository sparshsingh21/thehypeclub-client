import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Login from './components/Login/Login';
import Checkout from "./components/Checkout/Checkout";
import { Context } from './utils/context';
import { useContext } from "react";
import toast, { Toaster } from 'react-hot-toast';
function App() {
    const { user } = useContext(Context)
    return (

        <BrowserRouter>
            <Header />
            <Toaster/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:id" element={<Category />} />
                <Route path="/product/:id" element={<SingleProduct />} />
                <Route path="/login" element={user ? <Navigate to='/' /> : <Login />} />
                <Route path="/checkout" element={user ? <Checkout /> : <Navigate to='/login' />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
