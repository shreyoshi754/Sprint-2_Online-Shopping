import React from 'react';

function Cart(props) {
    return (
        <div className="">
  <div className="item">
    <div className="buttons">
      <span class="delete-btn"></span>
      <span class="like-btn"></span>
    </div>
 
    <div class="image">
      <img src="item-1.png" alt="" />
    </div>
 
    <div className="description">
      {props.description}
    </div>
 
    <div className="quantity">
      <button class="minus-btn" type="button" name="button" onClick={() => props.handleMinus(props.id)}>
          -
      </button>
      <input type="text" name="name" value={props.item}/>
      <button class="plus-btn" type="button" name="button" onClick={() => props.handleSubmit(props.productId,props.id)}>
          +
      </button>
    </div>
 
    <div className="total-price">{props.totalprice}</div>
    </div></div>
    );
}

export default Cart;