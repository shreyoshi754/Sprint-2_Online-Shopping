import React from 'react';
import "./Form.css";
function ViewProduct(props) {
    console.log(props);
    return (
       
            <div className="card">
                <img src={props.url} className="card__img"></img>
                <h2 className="card__title">Product Name:{props.title}</h2>
                <p>{props.id}</p>
                <p className="card__description">Catagory: {props.description}</p>
                <h3 className="card__price">Rupee: {props.price}</h3>
                <button className="card__btn">Add to Cart</button>
            </div>
       
    );
}

export default ViewProduct;