import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewProduct from './ViewProduct';
function Home(props) {

    const [allProductList, setAllProductList] = useState([]);

    const fatchProduct = async (e) => {

        try {
            const response = await axios.get(`http://localhost:8080/view`)
            const { productList } = response.data;
            setAllProductList(productList);
        } catch (error) {
            console.log(error)

        }
    }

    useEffect(() => {
        fatchProduct()
    }, [])
    console.log(allProductList)


    return (

        <div>
            <h1>I am home</h1>
            {allProductList.map((product) =>
                <ViewProduct key={product.id} title={product.name}
                    description={product.catagory}
                    price={product.price} />


            )}
        </div>
    );
}

export default Home;