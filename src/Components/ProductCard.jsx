import React,{useState} from "react";
const ProductCard=({product,onAddToCart,onView})=>{
  const [wishlist,setWishlist]=useState(false);
  return(
    <div className="card">
      {product.badge&&<div className="badge">{product.badge}</div>}
      <div className="wishlist" onClick={()=>setWishlist(!wishlist)}>{wishlist?"❤️":"🤍"}</div>
      <img src={product.image} alt={product.name} onClick={onView}/>
      <h3>{product.name}</h3>
      <p>₹ {product.price}</p>
      <button onClick={()=>onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};
export default ProductCard;
