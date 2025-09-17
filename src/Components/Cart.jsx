import React from "react";
const Cart=({cart,removeFromCart,updateQty})=>{
  const total=cart.reduce((acc,item)=>acc+item.price*item.qty,0);
  return(
    <div className="cart">
      <h3>Cart</h3>
      {cart.length===0?<p>No items in cart</p>:null}
      {cart.map(item=>(
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <input type="number" value={item.qty} onChange={e=>updateQty(item.id,parseInt(e.target.value))}/>
          <button onClick={()=>removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      {cart.length>0&&<div className="cart-total">Total: ₹ {total}</div>}
    </div>
  );
};
export default Cart;
