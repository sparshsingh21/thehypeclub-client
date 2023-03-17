import React from "react";
import "./Footer.scss";
import { useNavigate } from 'react-router-dom'
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className="footer">
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        &#169; THE HYPE CLUB | 2023
                    </span>
                    <div className="policy">
                        <p onClick={()=>{navigate('/return-policy')}}>Return Policy</p>
                        <p onClick={()=> navigate('/privacy-policy')}>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
