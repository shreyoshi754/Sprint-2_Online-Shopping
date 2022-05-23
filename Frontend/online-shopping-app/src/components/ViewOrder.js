import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import Order from './Order';

function ViewOrder(props) {
    const temp = useSelector((state) => state);
    const [orderitem, setOrderItem] = useState([]);
    const [present,setPresent]=useState(false);
    const fetchOrder = async (e) => {
        try {
            const response = await axios.get("http://localhost:8083/vieworder", {
                headers: {
                    Authorization: temp.token,
                },
            });
            console.log(response);
            const {orderPresent} = response.data;
            setPresent(orderPresent);
            const orderItems=response.data.Order;
            setOrderItem(orderItems);

        }
        catch(error){

        }

    }
    useEffect(() => {
        fetchOrder();
    }, [])
    return (
        <div>
            <div className='shopping-cart'>
            <div class="title">
    My Order
  </div>
            
            {present?
            orderitem.map((order) =>
                <Order key={order.id} 
                    id={order.id}
                    total={order.totalAmount}
                    />
            ):<></>}

            </div></div>
    );
}

export default ViewOrder;