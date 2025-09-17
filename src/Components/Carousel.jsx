import React from "react";
const Carousel = ({ items }) => (
  <div className="carousel">
    {items.map(item => <img key={item.id} src={item.image} alt={item.name}/>)}
  </div>
);
export default Carousel;
