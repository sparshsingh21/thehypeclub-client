import React from 'react'
import './Testimonials.scss'
import back from '../../../assets/back1.jpg'

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <div className="heading">
            What Others Say about the hype club
        </div>
        <div className="testim-body">
            <div className="left">
                <img src={back} alt="nice" />
            </div>
            <div className="right">
                <div className="border-box">
                    <div className="review-box">
                        <div className="stars">
                            &#9733;&#9733;&#9733;&#9733;&#9733;
                        </div>
                        <p>This is the best brand I've ever seen. Isse acha kapda kahi nahi mila</p>
                        <h1>Sparsh Singh</h1>
                    </div>
                    <div className="review-box">
                        <div className="stars">
                            &#9733;&#9733;&#9733;&#9733;&#9733;
                        </div>
                        <p>This is the best brand I've ever seen. Isse acha kapda kahi nahi mila</p>
                        <h1>Sparsh Singh</h1>
                    </div>
                    <div className="review-box">
                        <div className="stars">
                            &#9733;&#9733;&#9733;&#9733;&#9733;
                        </div>
                        <p>This is the best brand I've ever seen. Isse acha kapda kahi nahi mila</p>
                        <h1>Sparsh Singh</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials