import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {product, cart, setCart} = props;
    const {img, name, price} = product;

    const handleAddToCart = ()=>{
        const info ={
            name,
            price
        }
        if(cart){
            const newProduct = [...cart, info];
            setCart(newProduct)
        }
        
    }
    //console.log(cart);
    return (
        <div className=' border-[1px] rounded-lg relative'>
            <div className='p-2'>
                <img src={img} alt=""  className='rounded'/>
                <div className='flex flex-col pt-3  h-52 '>
                    <div >
                        <p className='font-semibold'>{name}</p>
                        <p>Price:{price} </p>
                    </div>
                    <div className='mt-8'>
                        <p>Manufacturer: </p>
                        <p>Ratings: </p>
                    </div>
                </div>
            </div>
            <button className="bg-btn-color hover:bg-orange-400 text-black py-3 px-4 rounded-b absolute bottom-0 w-full flex items-center justify-center gap-3">
                <p onClick={handleAddToCart}>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;