import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home(props) {

    const[allProductList,setAllProductList]=useState([]);

    const fatchProduct =async(e)=>{
        
        try {
            const response = await axios.get(`http://localhost:8083/view`)
            const {productList} = response.data;
            setAllProductList(productList);
        } catch (error) {
            console.log(error)
            
        }
    }

    useEffect(()=>{
        fatchProduct()
    },[])
console.log(allProductList)
    
    
    return (
        <div>
           <h1>I am home</h1> 
           {allProductList.map((product)=>
           <div key={product.id}>
            
           <h1 >{product.id}</h1>
           <p >{product.name}</p>
           <p >{product.price}</p>
           
           </div>
           
           )}
        </div>
    );
}

export default Home;