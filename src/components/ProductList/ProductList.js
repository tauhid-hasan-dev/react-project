import React from 'react';

const ProductList = (props) => {
    const {name} = props
    return (
        <div className='sticky top-0 '>
            <p  className='sticky top-0 '>{name}</p>
        </div>
    );
};

export default ProductList;