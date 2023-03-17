import React from 'react'
import './Gallery.scss'
import { useNavigate } from 'react-router-dom'

const Gallery = () => {
    const navigate = useNavigate();
  return (
    <div className='gallery'>
        <div className="sneak">
            SNEAK PEEK <br/> INTO OUR NEW <br/> COLLECTION
        </div>
        <div className="gallery-down">
            <div className="box" onClick={()=> navigate('/category/1')}>Tshirts</div>
            <div className="box" onClick={()=> navigate('/category/1')}>Tshirts</div>
            <div className="box" onClick={()=> navigate('/category/2')}>Hoodies</div>
            <div className="box" onClick={()=> navigate('/category/3')}>Sweatshirts</div>
        </div>
    </div>
  )
}

export default Gallery