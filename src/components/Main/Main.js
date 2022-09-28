import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';


const Main = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    const loadData = async() =>{
        const res = await fetch('products.json');
        const data = await res.json();
        setProduct(data);
    }

   
    useEffect(()=>{
        loadData()
    },[])
    
    return (
      <div className='grid grid-cols-6'>
            <div className="products col-span-5 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 p-20 ">
                {
                    products.map(product => <Product key={product.id} product = {product} cart={cart} setCart ={setCart}></Product>)
                }
                
            </div>
            <div className='bg-emerald-800 text-white'>
                <Cart></Cart>
            </div>
            <div className='bg-emerald-500 text-white sticky top-0 '>
                {
                    cart.map(p => <li >{p.name}</li>)
                }
            </div>
      </div>
    );
};

export default Main;