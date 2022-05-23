import React from 'react';

function Order(props) {
    return (
        <div>
  <div className="order">

    <div className=''> Order Id : {props.id}</div>
    <div className="">Rs. {props.total}</div><br></br>

 
    
    </div><h2>Thank You For Placing Your Order !!</h2></div>
    );
}

export default Order;