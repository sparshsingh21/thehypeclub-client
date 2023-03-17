import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/naruto.jpg";
import Banner2 from '../../../assets/back1.jpg';
import Carousels from '../../Carousels/Carousels';
import { Link } from "react-router-dom";

const Banner = () => {
    const images = [BannerImg, Banner2]
    return (
        <div className="heromain">
            <div className="left">
                <div className="car-container">
                    <Carousels imgs={images} />
                </div>
                <p className="heromain-text">
                    This is a dummy text to fill in this space until a real content 
                    is put up here.
                </p>
                <h1 className="hype">TheHypeClub</h1>
            </div>
            <div className="right">
            <Carousels imgs={images}/>
            </div>
        </div>
    );
};

export default Banner;
