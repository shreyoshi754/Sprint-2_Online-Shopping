import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewProduct from './ViewProduct';
import { useSelector } from "react-redux";

function ViewCart(props) {
    const temp = useSelector((state) => state);
    const [allProductList, setAllProductList] = useState([]);


    const fatchProduct = async (e) => {

        try {
            const response = await axios.get("http://localhost:8083/viewcart", {
                headers: {
                  Authorization: temp.token,
                },
              });
              console.log(response);
        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        fatchProduct()
    }, [])


    return (

        <div>
            <h1 style={{margin: '20%'}}>Hi I am Cart</h1>
        </div>
    );
}

export default ViewCart;