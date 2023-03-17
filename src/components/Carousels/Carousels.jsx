import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './Carousels.scss'

const Carousels = ({ imgs }) => {
    const navigate = useNavigate();
    const [currImg, setCurrImg] = useState(0);
    useEffect(() => {
        let id = setInterval(() => {
            if (currImg + 1 === imgs.length) {
                setCurrImg(0);
            }
            else {
                setCurrImg(currImg + 1);
            }
        }, 3000);
        return () => clearInterval(id);
    });
    return (
        <div className="carousel" onClick={()=>{navigate('/category/1')}}>
        <img src={imgs[currImg]} alt='car-img' className='carousel-img'/>
</div>
    )
}

export default Carousels