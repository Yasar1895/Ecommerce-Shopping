import React from "react";
const ProductModal=({product,onClose,onAddToCart})=>(
  <div className="modal" onClick={onClose}>
    <div className="modal-content" onClick={e=>e.stopPropagation()}>
      <img src={product.image} alt={product.name}/>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ₹ {product.price}</p>
      <button onClick={()=>onAddToCart(product)}>Add to Cart</button>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);
export default ProductModal;
