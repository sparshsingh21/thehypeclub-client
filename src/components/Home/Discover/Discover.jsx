import React from 'react'
import './Discover.scss'
import back from '../../../assets/naruto.jpg';
import overlap from '../../../assets/back1.jpg'
const Discover = () => {
  return (
    <div className="discover" id="discover">
      <div className="left2">
        <div className="overlap">
          <img src={back} alt="" className="backimg" />
          <img src={overlap} alt="" className="overlapimg" />
        </div>
      </div>
      <div className="right2">
        <h2>Explore our new <br/> Hoodie Collection</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aliquid? Voluptatem, ipsam? Tempore repellendus ipsum laborum obcaecati iure ea beatae nisi recusandae reiciendis, dignissimos nobis saepe quasi ipsa rerum accusantium!</p>
      </div>
    </div>
  );
}

export default Discover