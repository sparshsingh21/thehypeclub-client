import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Discover from './Discover/Discover'
import About from './About/About'
import Metadata from "../../helpers/Metadata";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import Gallery from "./Gallery/Gallery";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    const { products, setProducts, categories, setCategories } = useContext(Context);
    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            setProducts(res);
        });
    };
    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            setCategories(res);
        });
    };

    return (
        <div>
            <Metadata title={'Home'}/>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Discover/>
                    <About/>
                    <Gallery/>
                    <Testimonials/>
                </div>
            </div>
        </div>
    );
};

export default Home;
